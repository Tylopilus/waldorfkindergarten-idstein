import * as THREE from 'three';

const hosts = Array.from(document.querySelectorAll<HTMLElement>('.watercolor-shell'));
const controllers: { start: () => void; stop: () => void }[] = [];
let initialized = false;

function init() {
	if (initialized) return;
	if (document.body?.dataset.washEnabled !== 'true') return;
	if (!hosts.length) {
		console.warn('Watercolor canvas host not found');
		return;
	}

	initialized = true;

	hosts.forEach((host) => {
		const canvas = host.querySelector<HTMLCanvasElement>('#watercolor-canvas');
		if (!canvas) return;

		const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 0.9));
		renderer.setClearColor(0xffffff, 0);

		const scene = new THREE.Scene();
		const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

		const geometry = new THREE.PlaneGeometry(2, 2);
		const uniforms = {
			u_time: { value: 0 },
			u_resolution: { value: new THREE.Vector2(1, 1) },
		};

		const material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader: `
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = vec4(position, 1.0);
				}
			`,
			fragmentShader: `
			precision highp float;
			varying vec2 vUv;
			uniform float u_time;
			uniform vec2 u_resolution;

			float hash(vec2 p) {
				return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
			}

			float noise(vec2 p) {
				vec2 i = floor(p);
				vec2 f = fract(p);
				float a = hash(i);
				float b = hash(i + vec2(1.0, 0.0));
				float c = hash(i + vec2(0.0, 1.0));
				float d = hash(i + vec2(1.0, 1.0));
				vec2 u = f * f * (3.0 - 2.0 * f);
				return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
			}

			float fbm(vec2 p) {
				float total = 0.0;
				float amp = 0.55;
				for (int i = 0; i < 5; i++) {
					total += noise(p) * amp;
					p *= 2.05;
					amp *= 0.55;
				}
				return total;
			}

			vec2 rotate(vec2 p, float a) {
				float s = sin(a);
				float c = cos(a);
				return vec2(c * p.x - s * p.y, s * p.x + c * p.y);
			}

			void main() {
				vec2 uv = vUv;
				vec2 centered = (uv - 0.5);
				centered.x *= u_resolution.x / u_resolution.y;

				float rawTime = u_time;
				float t = rawTime * 0.08;

				vec2 flowDir = rotate(vec2(0.18, 0.07), 0.6 + t * 0.3);
				vec2 slowDrift = centered * 1.4 + flowDir * t * 2.0;
				vec2 bloomDrift = rotate(centered * 3.1, 0.7) - flowDir * t * 1.1;

				float wash = fbm(slowDrift);
				float flow = fbm(rotate(centered * 2.7 + vec2(t * 0.4, -t * 0.2), 0.25));
				float blooms = fbm(bloomDrift);
				float paperFiber = noise(uv * u_resolution * 0.55);

				float pigment = mix(wash, flow, 0.5) + blooms * 0.35;
				float bleed = smoothstep(0.35, 0.8, pigment + 0.15 * fbm(centered * 5.0));
				float fringe = smoothstep(0.4, 0.85, pigment) * (0.12 + 0.06 * sin(t * 1.6));

				float hueShift = sin(rawTime * 0.02) * 0.08;
				float hueDrift = cos(rawTime * 0.009) * 0.06;
				vec3 sun = vec3(0.98 + hueShift * 0.5, 0.88 + hueDrift * 0.4, 0.62);
				vec3 peach = vec3(0.95, 0.72 + hueShift * 0.6, 0.62 + hueDrift * 0.4);
				vec3 rose = vec3(0.90 + hueDrift * 0.5, 0.64, 0.70 + hueShift * 0.6);
				vec3 sky = vec3(0.56, 0.78 + hueShift * 0.7, 0.92 + hueDrift * 0.4);
				vec3 aqua = vec3(0.64 + hueDrift * 0.5, 0.86, 0.86 + hueShift * 0.6);

				float radius = length(centered) * 1.1;
				float glow = 1.0 - smoothstep(0.2, 0.95, radius);

				float warmPulse = 0.08 * sin(rawTime * 0.08);
				float coolPulse = 0.05 * cos(rawTime * 0.06);
				vec3 warmLayer = mix(peach, sun, clamp(glow + pigment * 0.35 + warmPulse, 0.0, 1.0));
				vec3 bloomLayer = mix(warmLayer, rose, smoothstep(0.15, 0.85, blooms));
				vec3 coolLayer = mix(sky, aqua, smoothstep(0.2 + coolPulse, 0.9, flow));
				vec2 paletteDrift = centered * 1.6 + vec2(t * 0.18, -t * 0.11);
				float paletteField = fbm(paletteDrift + flowDir * 0.8);
				float mixWarmCool = smoothstep(0.35, 0.7, paletteField + 0.12 * sin(rawTime * 0.11));
				vec3 merged = mix(bloomLayer, coolLayer, mixWarmCool);

				vec3 paper = vec3(1.02) - paperFiber * 0.06;

				vec3 color = mix(merged, paper, 0.06);
				color -= fringe * 0.07;
				color += bleed * 0.05;

				gl_FragColor = vec4(color, 0.9);
			}
		`,
			transparent: true,
		});

		const mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		const clock = new THREE.Clock();

		function resize() {
			const { clientWidth, clientHeight } = host;
			renderer.setSize(clientWidth, clientHeight, false);
			uniforms.u_resolution.value.set(clientWidth, clientHeight);
		}

		let frameAccumulator = 0;
		let animId: number | null = null;
		let isActive = false;

		function render() {
			if (!isActive) return;
			const delta = Math.min(clock.getDelta(), 0.05);
			frameAccumulator += delta;

			// Throttle to ~24 FPS to reduce GPU/CPU load.
			if (frameAccumulator >= 1 / 24) {
				uniforms.u_time.value += delta;
				renderer.render(scene, camera);
				frameAccumulator = 0;
			}

			animId = requestAnimationFrame(render);
		}

		function start() {
			if (animId !== null) return;
			frameAccumulator = 0;
			isActive = true;
			clock.start();
			animId = requestAnimationFrame(render);
		}

		function stop() {
			isActive = false;
			if (animId !== null) {
				cancelAnimationFrame(animId);
				animId = null;
			}
			clock.stop();
		}

		window.addEventListener('resize', resize);
		resize();
		start();
		controllers.push({ start, stop });
	});
}

function stopAll() {
	controllers.forEach((c) => c.stop());
}

(window as any).__initWash = () => {
	document.body.dataset.washEnabled = 'true';
	if (!initialized) {
		init();
	} else {
		controllers.forEach((c) => c.start());
	}
};

(window as any).__stopWash = () => {
	document.body.dataset.washEnabled = 'false';
	stopAll();
};

init();
