// 3D Wireframe background (uses THREE.js loaded separately)
(function () {
  function initWireframe() {
    if (!window.THREE) return; // three.js must be loaded
    const canvas = document.querySelector('#bg-wireframe');
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.position.setZ(5);

    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true });
    const wireframe = new THREE.Mesh(geometry, material);
    scene.add(wireframe);

    function animate() {
      requestAnimationFrame(animate);
      wireframe.rotation.x += 0.0005;
      wireframe.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  // Attempt to initialize after DOM and three.js load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWireframe);
  } else {
    initWireframe();
  }
})();
