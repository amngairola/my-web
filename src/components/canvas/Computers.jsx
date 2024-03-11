import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import Loader from "../Loader";
const Computers = ({ isMobile }) => {
  const computer = useGLTF("../desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-2, 2, 5]}
        angle={2}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [-0.57, -3.7, -1.5]}
        rotation={[-0.01, -0.2, -0.01]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // useEffect callback function starts here

    // Define a media query for window width less than or equal to 500 pixels
    const mediaQuery = window.matchMedia("(max-window: 500px)");

    // Set the initial state of the 'isMobile' variable based on the media query result
    setIsMobile(mediaQuery.matches);

    // Define a function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      // Update the 'isMobile' state based on the new media query result
      setIsMobile(event.matches);
    };

    // Add an event listener to the media query to track changes
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup function to remove the event listener when the component unmounts or the effect is re-run
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Suspense>
      <Computers isMobile={isMobile} />

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
