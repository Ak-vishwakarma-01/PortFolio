import React, { useEffect } from "react";
import "./Img3D.css";

//import three.js
import * as THREE from "three";

// to allow for the camera to move around the scene
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//To allow for importing the .gltg file
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Img3D = () => {
  useEffect(() => {
    
  // 3.js code
    // three.js scene(it's a 3d space)
    const scene = new THREE.Scene();

    // camera with postion and angles (point of view)
    const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

    // keep track of teh mouse position, so we can make object move
    let mouseX = window.innerWidth /2;
    let mouseY = window.innerHeight /2;

    // 3d object
    let object;

    // orbitalcontrol to move the camera around the scene
    let controls;

    // set object to render
    let objToRender = "naruto";

    let isObjectAdded = false; // Flag to check if object has been added

    // Loader to load .gltf file
    const loader = new GLTFLoader();

    // Load the file
    loader.load(
      "/assets/3DMOdels/robot_shark.glb",
      function(gltf){
        // if file is loaded add it to the scene
        object = gltf.scene;
        scene.add(object);
      },
      function(xhr){
        //while it is loading log the progress
        console.log((xhr.loaded/xhr.total * 100)+ '% loaded');
      },
      function(error){
        console.log(error);
      }
    );

    //a new render and its size
    const renderer = new THREE.WebGLRenderer({alpha:true}) // alpha:true allows for the transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);

    //add the render to the DOM
    document.getElementById("container3D").appendChild(renderer.domElement);

    //Set how far the camera will ber from the 3D model
    camera.position.z = 15;

    //Add lights to the scene , so we can actually see the 3D model
    const topLight = new THREE.DirectionalLight(0xffffff, 1); //(color , intensity)
    topLight.position.set(500, 500, 500) // top-left-ish
    topLight.castShadow = true;
    scene.add(topLight);

    const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "dino" ? 5 : 1);
    scene.add(ambientLight);

    // add control to the camera so we can rotate/zoom it with the mouse
    
    controls = new OrbitControls(camera,renderer.domElement);
    

    controls.enableDamping = true; // Enable damping (smooth movement)
    controls.dampingFactor = 0.25; // Damping factor for smoother experience
    controls.enableZoom = true; // Allow zooming

    // Render the scene
    function animate(){
      requestAnimationFrame(animate);
      // we could add some code to scene to automatic movement

      // Update controls every frame
      controls.update(); // This is essential for OrbitControls to work

      // make the object move
      if(object ){
        object.rotation.y = -3 + mouseX /window.innerWidth + 3;
        object.rotation.x = -1.2 + mouseY *2.5 / window.innerHeight;
      }
      renderer.render(scene, camera);
    }

    // add a listener to the window, so we can resize the window and the camera
    window.addEventListener("resize",function(){
    camera.aspect = this.window.innerWidth/this.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(this.window.innerWidth,this.window.innerHeight);
    });

    // add mouse position listener , se can me the object move
    document.onmousemove = (e) =>{
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    //start the 3D rendering
    animate();
    
  },[]);

  return <div id="container3D">

      </div>;
};

export default Img3D;


