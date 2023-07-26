import * as THREE from 'three';
import './style.css';

 
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);

const renderer = new THREE.WebGLRenderer({antialiaa:true});
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild( renderer.domElement);

// tut-1 (Rotating Cube) //

// var geometry = new THREE.BoxGeometry(1,1,1);
// var material = new THREE.MeshBasicMaterial({color:0xff000});
// var cube = new THREE.Mesh(geometry,material);
// scene.add(cube);
// cube.position.z = -5;
// cube.rotation.x =10;
// cube.rotation.y =5;
// // renderer.render(scene,camera);

// var animate = function (){
//   cube.rotation.x+=0.01;
//   renderer.render(scene,camera);
//   requestAnimationFrame(animate);
// };
// animate();


// tut-2(Ring and various geometry constructor)//

// var geometry = new THREE.BoxGeometry(2,2,2); // Cube
// var geometry = new THREE.SphereGeometry(2,50,50); // Sphere
// var geometry = new THREE.ConeGeometry(2,6,50); //Cone
// var geometry = new THREE.OctahedronGeometry(5); //Octahedron
// var geometry = new THREE.CylinderGeometry(2,2,4); //Cylinder
// var geometry = new THREE.DodecahedronGeometry(2); //Dodecahedron

var geometry = new THREE.TorusGeometry(2,0.2,10,100);
// var material = new THREE.MeshPhongMaterial({color:0xff0000});
var material = new THREE.MeshPhongMaterial({color:0xff0000,side: THREE.DoubleSide});


var object = new THREE.Mesh(geometry,material);
scene.add(object);
console.log(geometry.vertices);

var directionalLight = new THREE.DirectionalLight(0xffffff,1.2);
directionalLight.position.x = 3;
directionalLight.position.y = 4;
directionalLight.position.z = 4;
scene.add( directionalLight );

scene.fog = new THREE.Fog(0xffffff,0,20000);
renderer.setClearColor(scene.fog.color,1);
object.position.z = -7;
object.rotation.x = 10;
object.rotation.y = 5;

var animate = function (){
  object.rotation.x+=0.01;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
};
animate();