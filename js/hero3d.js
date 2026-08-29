/* ============================================================
   HERO 3D — Morphing Liquid Gold Blob (Three.js global build)
   No ES modules — works directly as <script src>
   ============================================================ */

(function () {
  'use strict';

  let scene, camera, renderer, blob, blobGeo;
  let mouseX = 0, mouseY = 0;
  let scrollY = 0;
  let raf;
  let originalPositions;

  const isMobile = window.innerWidth < 768;
  const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init(canvas) {
    if (!canvas || !window.THREE) return;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;

    // Scene
    scene = new THREE.Scene();

    // Camera
    camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // Renderer
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(W, H, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Lights
    scene.add(new THREE.AmbientLight(0x0d0906, 1.2));

    const key = new THREE.PointLight(0xc9a96e, 80, 18);
    key.position.set(4, 3, 4);
    scene.add(key);

    const fill = new THREE.PointLight(0x3355aa, 20, 14);
    fill.position.set(-4, 2, 2);
    scene.add(fill);

    const rim = new THREE.PointLight(0xffb060, 30, 10);
    rim.position.set(0, -4, -3);
    scene.add(rim);

    // Mouse interactive light
    window._blobMouseLight = new THREE.PointLight(0xffe0aa, 35, 10);
    window._blobMouseLight.position.set(0, 0, 3.5);
    scene.add(window._blobMouseLight);

    // Build blob
    buildBlob();

    // Particles
    buildParticles();

    // Events
    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMouse);
    window.addEventListener('scroll', onScroll, { passive: true });

    animate();
  }

  function buildBlob() {
    const detail = isMobile ? 4 : 6;
    blobGeo = new THREE.IcosahedronGeometry(1.6, detail);

    // Store original positions for morphing
    const pos = blobGeo.attributes.position;
    originalPositions = new Float32Array(pos.array.length);
    for (let i = 0; i < pos.array.length; i++) {
      originalPositions[i] = pos.array[i];
    }

    const mat = new THREE.MeshPhysicalMaterial({
      color: 0x1a1206,
      metalness: 0.7,
      roughness: 0.12,
      transmission: 0.25,
      thickness: 1.5,
      ior: 1.4,
      reflectivity: 0.95,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 0.92,
      side: THREE.DoubleSide,
    });

    blob = new THREE.Mesh(blobGeo, mat);
    scene.add(blob);

    // Inner glow sphere
    const innerGeo = new THREE.SphereGeometry(1.3, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x5a3a00,
      emissive: 0x3a2000,
      emissiveIntensity: 0.5,
      roughness: 0.8,
      transparent: true,
      opacity: 0.3,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Thin outer ring
    const ringGeo = new THREE.TorusGeometry(2.1, 0.006, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xc9a96e, transparent: true, opacity: 0.2,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI * 0.42;
    scene.add(ring);
  }

  function buildParticles() {
    const count = isMobile ? 60 : 180;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute in sphere shell
      const r = 2.8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi) - 2;

      const t = Math.random();
      col[i3]     = 0.78 + t * 0.22;
      col[i3 + 1] = 0.66 + t * 0.15;
      col[i3 + 2] = 0.43 + t * 0.1;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    window._blobParticles = new THREE.Points(geo, mat);
    scene.add(window._blobParticles);
  }

  function morphBlob(t) {
    if (!blobGeo || !originalPositions) return;
    const pos = blobGeo.attributes.position;
    const count = pos.count;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      // Perlin-like layered sine displacement
      const n1 = Math.sin(ox * 1.8 + t * 0.9) * Math.cos(oy * 1.4 + t * 0.7);
      const n2 = Math.sin(oy * 2.1 + t * 0.5) * Math.cos(oz * 1.9 + t * 1.1);
      const n3 = Math.sin(oz * 1.6 + t * 0.8) * Math.cos(ox * 2.3 + t * 0.6);
      const displacement = (n1 + n2 + n3) * 0.22;

      pos.array[i3]     = ox + ox * displacement;
      pos.array[i3 + 1] = oy + oy * displacement;
      pos.array[i3 + 2] = oz + oz * displacement;
    }

    pos.needsUpdate = true;
    blobGeo.computeVertexNormals();
  }

  function animate() {
    raf = requestAnimationFrame(animate);
    const t = Date.now() * 0.001;

    if (!isReduced) {
      // Morph the blob
      morphBlob(t * 0.4);

      // Slow rotation
      blob.rotation.y = t * 0.18 + scrollY * 0.002;
      blob.rotation.x = Math.sin(t * 0.22) * 0.15;

      // Float
      blob.position.y = Math.sin(t * 0.55) * 0.06;
    }

    // Camera follows mouse gently
    camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 0.5 + 0 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    // Mouse light
    if (window._blobMouseLight) {
      window._blobMouseLight.position.x += (mouseX * 4 - window._blobMouseLight.position.x) * 0.07;
      window._blobMouseLight.position.y += (-mouseY * 4 - window._blobMouseLight.position.y) * 0.07;
    }

    // Particle slow drift
    if (window._blobParticles) {
      window._blobParticles.rotation.y = t * 0.04;
    }

    renderer.render(scene, camera);
  }

  function onMouse(e) {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  }
  function onScroll() { scrollY = window.scrollY; }
  function onResize() {
    if (!renderer) return;
    const canvas = renderer.domElement;
    const W = canvas.clientWidth;
    const H = canvas.clientHeight;
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    renderer.setSize(W, H, false);
  }

  // Public API
  window.HeroBlob = { init };
})();
