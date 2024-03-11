import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="canvas-loader"> </div>
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: 800,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        {progress.toFixed(1)} %
      </p>
    </Html>
  );
};

export default Loader;
