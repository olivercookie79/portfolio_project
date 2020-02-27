
// If the app variable already exists, then reuse it,
// otherwise initialise it to an empty object
// (only works for 'var' because of 'hoisting', google it)
var app = app || {};

app.controls = {
  rotationSpeed: 0.01,
  bouncingSpeed: 0.05,
  step: 0  // for controlling the sphere position
};

app.init = () => {

  console.log('Hello my 3D W0rld!');




  // The scene stores and keeps track of all the objects we're creating,
  // including the camera and the lights
  app.scene = new THREE.Scene();


  app.camera = new THREE.PerspectiveCamera(
    60,  // field of view
    window.innerWidth / window.innerHeight,  // screen ratio
    0.1,  // near field (how close to the camera should we still see things)
    1000  // far field  (how far away from the camera should we still see things)
  );

  // Where exactly is the camera in the scene?
  app.camera.position.x = -30;
  app.camera.position.y = 10;
  app.camera.position.z = 30;
  // app.camera.position.set( -30, 40, 30 );

  app.camera.lookAt( app.scene.position ); // Look at the origin: x=0, y=10, z=0
  app.renderer = new THREE.WebGLRenderer(); // use hardware acceleration of gfx card!
  var output = document.getElementById('output');
  output.appendChild( app.renderer.domElement );
  app.camera.aspect = output.clientWidth / output.clientHeight;
  // The renderer calculates how to draw all the objects in the scene,
  // based on the lighting and the camera perspective, and renders
  // it all down to a 2D image to show in a <canvas> browser tag
  app.renderer.setSize( output.clientWidth, output.clientHeight );
  app.renderer.setClearColor( 0x000000 );  // background colour

  app.renderer.shadowMap.enabled = true;  // shadows are computationally expensive, and thus disabled by default
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // WTF??


  // app.axes = new THREE.AxesHelper( 40 );
  // app.scene.add( app.axes );

  // Let's add a 2D 'plane', i.e. a sheet, aka "The Runway"
  app.plane = app.createPlane();
  app.scene.add( app.plane );

  // app.cube = app.createCube();
  // app.scene.add( app.cube );

  // app.sphere = app.createSphere();
  // app.scene.add( app.sphere );


  // Let there be light!
  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.ambient = new THREE.AmbientLight( 0x774444 );
  app.scene.add( app.ambient );

  // Control camera position and zoom using the mouse
  app.mouseControls = new THREE.OrbitControls(
    app.camera,
    app.renderer.domElement
  );

app.importGLTF();





  // app.scene.add( app.meshGeo );






  // app.animate(); // kick off the animation process

}; // app.init()


app.animate = () => {

  app.controls.step += app.controls.bouncingSpeed;

  // app.sphere.position.y = 6 +  Math.abs( Math.sin(app.controls.step) * 30 );
  // app.sphere.position.x = 20 + ( Math.cos(app.controls.step) * 30 );

  // app.cube.rotation.x += app.controls.rotationSpeed;
  // app.cube.rotation.y +=
  app.controls.rotationSpeed;

  app.renderer.render( app.scene, app.camera );

  // Get the browser animation API to work out
  // how often to run our animate() method
  // (ideally, 60 times/sec and only when the tab
  // is visible)
  requestAnimationFrame( app.animate );

};


// Like jQuery $(document).ready() - run our function
// after the DOM is loaded
window.onload = app.init;
