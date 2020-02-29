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

  plane.position.set( 0, -19, 0 );
  plane.rotation.x = -0.5 * Math.PI;  // because of math(s)
  plane.receiveShadow = true; // shadows are cast onto this

  return plane;

}; // createPlane()




app.createCylinder = () => {

  const cylinderGeometry = new THREE.CylinderGeometry( 100, 100 );
  const cylinderMaterial = new THREE.MeshLambertMaterial({
    color: 0x666666
  });

  // Combine the geometry (shape) and the material (what
  // the surface looks like) into a mesh, the actual
  // 3D object
  const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial);

  cylinder.position.set( 0, -19, 0 );
  cylinder.scale.set( .4, .4, .4 );
  // cylinde.radial.Segments(20);
  // cylinder.rotation.x = -0.5 * Math.PI;  // because of math(s)
  cylinder.receiveShadow = true; // shadows are cast onto this

  return cylinder;

}; // createPlane()












app.createSpotlight = () => {

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 130, 20 );
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;




  const spotlight2 = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( 70, 60, -100 );
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
  const file = 'https://res.cloudinary.com/haxxor70/raw/upload/v1582790843/Demon%20%20GLB/demon5.glb';
  new THREE.GLTFLoader().load(file, function ( gltf ) {
  	// called when the resource is loaded
    app.scene.add( gltf.scene );



  const model = ( file, gltf.scene);
    model.position.set( 0, -20, 0 );
    model.scale.set( 1, 1, 1 );
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
