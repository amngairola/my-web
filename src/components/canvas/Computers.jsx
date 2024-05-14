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
        position={isMobile ? [8, -4, 2] : [4, -5, 2]}
        angle={-5}
        intensity={300}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.35 : 0.55}
        position={isMobile ? [1.98, -1.4, -0.6] : [-2.57, -2.7, -1.5]}
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
    const mediaQuery = window.matchMedia("(max-width:  412px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const cameraPosition = isMobile ? [8, 0, 5] : [20, 7, 2];
  const cameraFOV = isMobile ? 55 : 25;
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: cameraPosition, fov: cameraFOV }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-screen  p-3"
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
