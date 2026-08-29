/* ============================================================
   VIEWER 3D — Interactive 360° Bottle (global Three.js)
   ============================================================ */

(function () {
  'use strict';

  let scene, camera, renderer, bottleGroup;
  let isDragging = false, prevX = 0, prevY = 0, velX = 0, velY = 0;
  let raf;

  const VARIANTS = {
    gold:    { glass: 0x1a1206, liquid: 0x7a4a00, cap: 0xc9a96e, liq_e: 0x3a2200, liq_o: 0.55 },
    crystal: { glass: 0x0a1828, liquid: 0x1a4a7a, cap: 0xaad4f0, liq_e: 0x081440, liq_o: 0.45 },
    noir:    { glass: 0x060606, liquid: 0x180800, cap: 0x1e1e1e, liq_e: 0x050505, liq_o: 0.7  },
    rose:    { glass: 0x280c0c, liquid: 0x8a1a3a, cap: 0xcc6080, liq_e: 0x380818, liq_o: 0.55 },
    emerald: { glass: 0x04180e, liquid: 0x0a5028, cap: 0x48b86a, liq_e: 0x031008, liq_o: 0.5  },
  };

  function init(canvas) {
    if (!canvas || !window.THREE) return;
    const W = canvas.clientWidth, H = canvas.clientHeight;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(38, W / H, 0.1, 100);
    camera.position.set(0, 0.5, 7.8);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(W, H, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    scene.add(new THREE.AmbientLight(0x1a1208, 1.2));

    const key = new THREE.PointLight(0xc9a96e, 90, 22); key.position.set(4, 5, 5); scene.add(key);
    const fill = new THREE.PointLight(0x3366bb, 22, 16); fill.position.set(-5, 2, 3); scene.add(fill);
    const rim = new THREE.PointLight(0xffb347, 32, 14); rim.position.set(0, -4, -5); scene.add(rim);
    const top = new THREE.DirectionalLight(0xffe8cc, 0.5); top.position.set(0, 10, 5); scene.add(top);

    bottleGroup = new THREE.Group();
    scene.add(bottleGroup);
    buildBottle('gold');

    // Platform
    const ringGeo = new THREE.TorusGeometry(1.5, 0.008, 16, 120);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xc9a96e, transparent: true, opacity: 0.22 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2; ring.position.y = -2.25;
    scene.add(ring);

    // Shadow
    const sdGeo = new THREE.CircleGeometry(1.5, 64);
    const sdMat = new THREE.MeshBasicMaterial({ color: 0, transparent: true, opacity: 0.35, depthWrite: false });
    const sd = new THREE.Mesh(sdGeo, sdMat);
    sd.rotation.x = -Math.PI / 2; sd.position.y = -2.27;
    scene.add(sd);

    // Controls
    canvas.addEventListener('mousedown', e => { isDragging = true; prevX = e.clientX; prevY = e.clientY; });
    canvas.addEventListener('touchstart', e => { isDragging = true; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY; }, { passive: true });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx = e.clientX - prevX, dy = e.clientY - prevY;
      velX = dx * 0.011; velY = dy * 0.007;
      bottleGroup.rotation.y += velX;
      bottleGroup.rotation.x = Math.max(-0.45, Math.min(0.45, bottleGroup.rotation.x + velY));
      prevX = e.clientX; prevY = e.clientY;
    });
    window.addEventListener('touchmove', e => {
      if (!isDragging) return;
      const dx = e.touches[0].clientX - prevX, dy = e.touches[0].clientY - prevY;
      velX = dx * 0.011; velY = dy * 0.007;
      bottleGroup.rotation.y += velX;
      bottleGroup.rotation.x = Math.max(-0.45, Math.min(0.45, bottleGroup.rotation.x + velY));
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
    }, { passive: true });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('resize', () => {
      const nW = canvas.clientWidth, nH = canvas.clientHeight;
      camera.aspect = nW / nH; camera.updateProjectionMatrix();
      renderer.setSize(nW, nH, false);
    });

    animateViewer();
  }

  function buildBottle(key) {
    while (bottleGroup.children.length) bottleGroup.remove(bottleGroup.children[0]);
    const v = VARIANTS[key];

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: v.glass, metalness: 0, roughness: 0.04,
      transmission: 0.88, thickness: 2.2, ior: 1.52,
      reflectivity: 0.9, envMapIntensity: 2.5,
      transparent: true, opacity: 0.93, side: THREE.DoubleSide,
    });
    const capMat = new THREE.MeshStandardMaterial({ color: v.cap, metalness: 1, roughness: 0.16 });
    const liqMat = new THREE.MeshStandardMaterial({
      color: v.liquid, emissive: v.liq_e, emissiveIntensity: 0.5,
      transparent: true, opacity: v.liq_o, roughness: 0.08, metalness: 0.15,
    });

    const prof = [
      [0,.0,-3],[.75,-3],[.78,-2.7],[.75,-2.5],[.65,-2.2],[.6,.3],
      [.62,.6],[.55,1.2],[.42,1.8],[.4,2.5],[.42,2.7],[.38,3],[0,3],
    ];
    const pts = prof.map(([x,y]) => new THREE.Vector2(x*0.72, y*0.72));

    bottleGroup.add(new THREE.Mesh(new THREE.LatheGeometry(pts, 80), glassMat));

    const base = new THREE.Mesh(new THREE.CylinderGeometry(.54,.54,.07,64), capMat);
    base.position.y = -2.14; bottleGroup.add(base);

    const collar = new THREE.Mesh(new THREE.CylinderGeometry(.44,.42,.26,64), capMat);
    collar.position.y = 2.38; bottleGroup.add(collar);

    const capB = new THREE.Mesh(new THREE.CylinderGeometry(.42,.44,.62,64), capMat);
    capB.position.y = 2.96; bottleGroup.add(capB);

    const capD = new THREE.Mesh(new THREE.SphereGeometry(.42,48,24,0,Math.PI*2,0,Math.PI*.55), capMat);
    capD.position.y = 3.27; capD.rotation.x = Math.PI; bottleGroup.add(capD);

    const liqPts = pts.slice(0, pts.length - 2).map(p => new THREE.Vector2(p.x * 0.88, p.y));
    const liq = new THREE.Mesh(new THREE.LatheGeometry(liqPts, 60), liqMat);
    liq.position.y = 0.02; bottleGroup.add(liq);
  }

  function animateViewer() {
    raf = requestAnimationFrame(animateViewer);
    const t = Date.now() * 0.001;
    if (!isDragging) {
      velX *= 0.93; velY *= 0.93;
      bottleGroup.rotation.y += velX;
      bottleGroup.rotation.x += velY;
      if (Math.abs(velX) < 0.002) bottleGroup.rotation.y += 0.004;
    }
    bottleGroup.position.y = Math.sin(t * 0.65) * 0.06;
    renderer.render(scene, camera);
  }

  // Public API
  window.Viewer3D = {
    init,
    switchVariant: buildBottle,
  };
})();
