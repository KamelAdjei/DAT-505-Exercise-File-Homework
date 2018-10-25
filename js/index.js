//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 2);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 2);
scene.add(light2);

  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.IcosahedronGeometry(100,0);
  material = new THREE.MeshNormalMaterial({  color: "#433F81", transparent:true,opacity:0.6});
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  geometry2 = new THREE.OctahedronGeometry(50,0);
  material2 = new THREE.MeshStandardMaterial( { color: "#433F81"  } );
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;
  mesh2.position.x = -200;

  geometry3 = new THREE.OctahedronGeometry(50,0);
  material3 = new THREE.MeshStandardMaterial( { color: "#433F81" } );
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;
  mesh3.position.y = 200;

  myshape = new THREE.OctahedronGeometry(50,0);
  skins = new THREE.MeshStandardMaterial( { color: "#433F81" } );
  combine = new THREE.Mesh( myshape, skins);
  combine.position.z = -1000;
  combine.position.y = 20;
    combine.position.x = 200;


    myshape2 = new THREE.OctahedronGeometry(50,0);
    skins2 = new THREE.MeshStandardMaterial( { color: "#433F81"} );
    combine2 = new THREE.Mesh( myshape2, skins2);
    combine2.position.z = -1000;
    combine2.position.y = -200;
    combine2.position.x = 0;

  mine = new THREE.TorusGeometry( 300, 1, 16, 100 );
  yours = new THREE.MeshNormalMaterial( { color: "#433F81" } );
    combine3 = new THREE.Mesh( mine,yours);
    combine3.position.z = -1000;
    combine3.position.y = 50;

    mine2 = new THREE.TorusGeometry( 300, 1, 16, 100 );
  yours2 = new THREE.MeshNormalMaterial( { color: "#433F81" } );
    combine4 = new THREE.Mesh( mine2,yours2);
    combine4.position.z = -1000;
    combine4.position.y = 50;


  // Add mesh to scene
  scene.add( mesh );
  scene.add( mesh2);
  scene.add( mesh3);
  scene.add( combine);
  scene.add( combine2);
  scene.add( combine3 );
  scene.add( combine4 );

}

//stuff
// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x += 0.01; //Continuously rotate the mesh
  mesh.rotation.y += 0.01;

  mesh2.rotation.x += 0.01; //Continuously rotate the mesh
  mesh2.rotation.y += 0.06;

  mesh3.rotation.x += 0.06; //Continuously rotate the mesh
  mesh3.rotation.y += 0.01;

combine.rotation.z += 0.06; //Continuously rotate the mesh
  combine.rotation.y += 0.01;

  combine2.rotation.x += 0.07; //Continuously rotate the mesh
    combine2.rotation.y += 0.01;

   combine3.rotation.x += 0.07; //Continuously rotate the mesh
    combine3.rotation.y += 0.01;

   combine4.rotation.x += -0.07; //Continuously rotate the mesh
    combine4.rotation.y += 0.01;


  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};


init();
geometry();
render();
