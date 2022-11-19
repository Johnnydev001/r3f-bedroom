import { Html } from "@react-three/drei";
import React, { useState } from "react";
import CarStandFooterComponent from "../carstand/footer/footer";
import CarStandHeroComponent from "../carstand/hero/hero";
import CarStandTopCarsComponent from "../carstand/topcars/topcars";
import CarStandNavbarComponent from "../carstand/navbar/navbar";
import promotion from "/assets/video/promotion_video.mp4";
import styles from "../../../src/styles/laptop/laptop-screen.module.scss";
import { sRGBEncoding } from "three";
import { state } from "../../App";
import { useSnapshot } from "valtio";

export default function DesktopScreenComponent() {
  // Hook for acessing the state data
  const snap = useSnapshot(state);

  // Simpsons video to be displayed on the screen
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = promotion;
    vid.loop = true;
    vid.muted = true;
    vid.play();
    return vid;
  });

  return (
    <mesh
      rotation={[0, Math.PI / 2, 0]}
      position={[0, 0, 0]}
      onClick={() => (state.displayPromotion = !state.displayPromotion)}
    >
      <planeGeometry args={[1.5, 1]} />
      {snap.displayPromotion && (
        <meshStandardMaterial emissive={"white"}>
          <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
          <videoTexture
            attach="emissiveMap"
            args={[video]}
            encoding={sRGBEncoding}
          />
        </meshStandardMaterial>
      )}

      {!snap.displayPromotion && (
        <Html
          className={styles.container}
          transform
          position={[0, 0, 0.000001]}
          occlude
          center
          scale={[0.0345, 0.022, 0.1]}
        >
          <div className={styles.sub_container}>
            <CarStandNavbarComponent />
            <CarStandHeroComponent />
            <CarStandTopCarsComponent />
            <CarStandFooterComponent />
          </div>
        </Html>
      )}
    </mesh>
  );
}
