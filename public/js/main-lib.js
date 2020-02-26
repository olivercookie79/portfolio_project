var app = app || {};

app.createPlane = () => {

  const planeGeometry = new THREE.PlaneGeometry( 100, 100 );
  const planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC
  });

  // Combine the geometry (shape) and the material (what
  // the surface looks like) into a mesh, the actual
  // 3D object
  const plane = new THREE.Mesh( planeGeometry, planeMaterial);

  plane.position.set( 0, 0, 0 );
  plane.rotation.x = -0.5 * Math.PI;  // because of math(s)
  plane.receiveShadow = true; // shadows are cast onto this

  return plane;

}; // createPlane()


app.createSpotlight = () => {

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 );
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;

  return spotlight;

}; // createSpotlight()

app.createCube = () => {

  const cubeGeometry = new THREE.BoxGeometry( 10, 30, 10 );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
     // wireframe: true
  });

  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -30, 12, 0 );
  cube.castShadow = true;

  return cube;

}; // createCube()





//Model Loader

app.importGLTF = () => {
  const file = '../models/model_test.gltf';
  new THREE.GLTFLoader().load(file, function ( gltf ) {
  	// called when the resource is loaded
    app.scene.add( gltf.scene );



    const model = ( file, gltf.scene);
    model.position.set( 0, 10, 0 );
    model.scale.set( 3, 3, 3 );
    model.castShadow = true;

    // const geoMat = new THREE.MeshPhongMaterial({
    //   color: 0x039BE5,
    //   // wireframe: true
    // });


    // const geoMesh = ( model, geoMat);
    // geoMesh castShadow = true;





    app.animate(); // start rendering/animating the scene after model added



  });




};// import mesh
