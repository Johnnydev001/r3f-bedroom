import { Html } from "@react-three/drei";
import React from "react";

export default function LaptopScreenComponent() {
  return (
    <mesh
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, 0.38]}
      castShadow
      receiveShadow
    >
      <planeGeometry args={[1, 0.65]} />
      <Html
        transform
        position={[0, 0, 0.000001]}
        occlude
        center
        scale={[0.02, 0.025, 0.1]}
      >
        <iframe
          width={"2010"}
          height={"1050"}
          src="https://curvefever.pro/"
          frameBorder={"0"}
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </Html>
    </mesh>
  );
}
