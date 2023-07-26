import * as THREE from 'three';
import './style.css';
import 'https://static.sketchfab.com/api/sketchfab-viewer-1.12.1.js';

var iframe = document.getElementById( 'api-frame' );
var uid = 'dd37769bdc0148a988535f893d01c551';

// By default, the latest version of the viewer API will be used.
var client = new Sketchfab( iframe );

// Alternatively, you can request a specific version.
// var client = new Sketchfab( '1.12.1', iframe );

client.init( uid, {
    success: function onSuccess( api ){
        api.start();
        api.addEventListener( 'viewerready', function() {

            // API is ready to use
            // Insert your code here
            // const scene = new THREE.Scene();
            // const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight);
            // const renderer = new THREE.WebGLRenderer({antialiaa:true});
            // renderer.setSize(window.innerWidth,window.innerHeight);
            console.log( 'Viewer is ready' );

        } );
    },
    error: function onError() {
        console.log( 'Viewer error' );
    }
} );
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
