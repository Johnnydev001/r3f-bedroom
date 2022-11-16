import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import CarStandFooterComponent from "../carstand/footer/footer";
import CarStandHeroComponent from "../carstand/hero/hero";
import CarStandTopCarsComponent from "../carstand/topcars/topcars";
import CarStandNavbarComponent from "../carstand/navbar/navbar";
import promotion from "/assets/video/promotion_video.mp4";
import styles from "../../../src/styles/laptop/laptop-screen.module.scss";
import { sRGBEncoding } from "three";
import { state } from "../../App";
import { useSnapshot } from "valtio";

export default function LaptopScreenComponent() {
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

  // Allow rotation/zoom when the video is playing
  useEffect(() => {
    if (snap.displayPromotion) {
      state.allowMovement = true;
    }
  });
  return (
    <mesh
      rotation={[1.565, 0, 0]}
      position={[0, 0, 0.4]}
      onClick={() => (state.displayPromotion = !state.displayPromotion)}
    >
      <planeGeometry args={[1.05, 0.7]} />
      {snap.screenTurnedOn && snap.displayPromotion && (
        <meshStandardMaterial emissive={"white"}>
          <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
          <videoTexture
            attach="emissiveMap"
            args={[video]}
            encoding={sRGBEncoding}
          />
        </meshStandardMaterial>
      )}
      {snap.screenTurnedOn && !snap.displayPromotion && (
        <Html
          className={styles.container}
          transform
          position={[0, 0, 0.000001]}
          occlude
          center
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
