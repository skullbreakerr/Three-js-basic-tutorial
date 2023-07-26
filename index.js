import * as THREE from 'three';
import './style.css';

const apiToken = 'f1798587198642deaa5a30a59cac7fa7';
const modelId = 'dd37769bdc0148a988535f893d01c551';
const url= `https://api.sketchfab.com/v3/models/${modelId}?apiKey=${apiToken}`; 

fetch(url).then(response => response.json())
.then(data =>{
  const viewer = new window.SketchfabViewer({
    client: '1.7.1',
    iframe: document.getElementById('api-frame')
  });
  viewer.init(data,{ autostart:true })
})
.catch(error=> console.error('Error in fetching: ',error));

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);

// const renderer = new THREE.WebGLRenderer({antialiaa:true});
// renderer.setSize(window.innerWidth,window.innerHeight);
// document.body.appendChild( renderer.domElement);

// var animate = function (){
//   object.rotation.x+=0.01;
//   renderer.render(scene,camera);
//   requestAnimationFrame(animate);
// };
// animate();
