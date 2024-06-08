// scripts.js

// Initialize Three.js
let scene, camera, renderer, controls, mixer;
let clock = new THREE.Clock();

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 3);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Load multiple GLTF models
    const loader = new THREE.GLTFLoader();

    // Load Damaged Helmet
    loader.load('models/DamagedHelmet.gltf', function (gltf) {
        const model = gltf.scene;
        model.position.set(-2, 0, 0);
        scene.add(model);
    });

    // Load Fox
    loader.load('models/Fox.gltf', function (gltf) {
        const model = gltf.scene;
        model.position.set(0, 0, 0);
        mixer = new THREE.AnimationMixer(model);
        if (gltf.animations.length) {
            gltf.animations.forEach(animation => {
                mixer.clipAction(animation).play();
            });
        }
        scene.add(model);
    });

    // Load Cesium Man
    loader.load('models/CesiumMan.gltf', function (gltf) {
        const model = gltf.scene;
        model.position.set(2, 0, 0);
        scene.add(model);
    });

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    let delta = clock.getDelta();
    if (mixer) mixer.update(delta);

    controls.update();
    renderer.render(scene, camera);
}

init();