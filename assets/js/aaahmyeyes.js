/*
  Yes, I made this script myself, thanks for checking.
  I woke up, took my morning coffee, and spent an entire day writing this mess.
*/
(function($) {
  const scene = new THREE.Scene();

  const faceImage = document.getElementById('face');
  const faceRect = faceImage.getBoundingClientRect();

  const faceWidth = faceRect.width;
  const faceHeight = faceRect.height;
  const faceY = faceRect.top;

  const camera = new THREE.PerspectiveCamera(75, faceWidth / faceHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Create geometry for square eyes (3D cubes)
  const eyeGeometry = new THREE.BoxGeometry(faceWidth * 0.6 / 900, faceWidth * 0.6 / 900, 0);
  const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

  // Create two square eyeballs
  const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
  const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);

  const leftEyeY = 0.000889488 * faceWidth + 0.0230997;
  const rightEyeY = 0.000943396 * faceWidth + 0.182075;
  const leftEyeX = 0.000111321 * faceWidth + 0.149885;
  const rightEyeX = 0.000599084 * faceWidth + 0.989757;
  leftEye.position.set(leftEyeX, leftEyeY, 0);
  rightEye.position.set(rightEyeX, rightEyeY, -0.5);

  // ok, I'll and adjust the rotation
  leftEye.rotation.y = THREE.Math.degToRad(20);
  leftEye.rotation.z = THREE.Math.degToRad(10);
  rightEye.rotation.y = THREE.Math.degToRad(10);
  rightEye.rotation.z = THREE.Math.degToRad(10);

  // Create geometry for smaller square irises (3D cubes)
  const irisSize = 0.000349542 * faceWidth + 0.0948787;
  const irisGeometry = new THREE.BoxGeometry(irisSize, irisSize, 0.2);
  const irisMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });

  const leftIris = new THREE.Mesh(irisGeometry, irisMaterial);
  const rightIris = new THREE.Mesh(irisGeometry, irisMaterial);

  // Attach irises to the eyes
  leftIris.position.z = 0.6; // Position iris slightly in front of the eyeball
  rightIris.position.z = 0.6;
  leftIris.rotation.z = THREE.Math.degToRad(5);
  rightIris.rotation.z = THREE.Math.degToRad(5);
  leftEye.add(leftIris);
  rightEye.add(rightIris);

  // Add the eyes to the scene
  scene.add(leftEye);
  scene.add(rightEye);

  // Set up camera position
  camera.position.z = 5;

  // Track mouse movement
  document.addEventListener('scroll', () => {
    const yProgress = 1 - (window.scrollY / (faceHeight + faceY));
    
    // For the left eye, no depth adjustment needed
    leftIris.position.x = -0.9 + (yProgress) * 0.9;
    leftIris.position.y = -0.4 + (yProgress) * 0.46;

    // For the right eye, adjust based on its depth (z-axis)
    rightIris.position.x = -0.75 + (yProgress) * 0.7;
    rightIris.position.y = -0.37 + (yProgress) * 0.55;
  });

  // Animation loop
  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }

  animate();

  // Adjust canvas to overlay on the face image
  const face = document.getElementById('face');
  function updateCanvasPosition() {
      const faceRect = face.getBoundingClientRect();
      renderer.domElement.style.width = faceRect.width + 'px';
      renderer.domElement.style.height = faceRect.height + 'px';
      renderer.domElement.style.top = faceRect.top + 'px';
      renderer.domElement.style.left = faceRect.left + 'px';
  }

  // I'm lazy so it's easier to start from the top of the page so I don't have to
  // deal with some coordinates stuff
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  window.addEventListener('resize', () => location.reload());
  updateCanvasPosition();
  
  // Initial scroll
  window.scrollTo(window.scrollX, window.scrollY - 1);
  window.scrollTo(window.scrollX, window.scrollY + 1);
  
})(jQuery);