import { Html } from "@react-three/drei";
import React, { useEffect, useState } from "react";
import CarStandFooterComponent from "../carstand/footer/footer";
import CarStandHeroComponent from "../carstand/hero/hero";
import CarStandNavbarComponent from "../carstand/navbar/navbar";
import simpsons from "/assets/video/simpsons.mp4";
import styles from "../../../src/styles/laptop/laptop-screen.module.scss";
import {  sRGBEncoding } from "three";

export default function LaptopScreenComponent(props) {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = simpsons;
    vid.loop = true;
    vid.muted = true;
    vid.id = 'simpsons'
    vid.play();
    return vid;
  });

  const [episode, setDisplayEpisode] = useState(false);

  useEffect(() => {
    if(episode) {


      props.allowMovement(true);

      /* document.querySelector('#simpsons').addEventListener('click', function() {
        video.muted = false;
      }); */


    }
  })

  return (
    <mesh rotation={[1.565, 0, 0]} position={[0, 0, 0.4]}>
      <planeGeometry args={[1.05, 0.7]} />
      {props.screenTurnedOn && episode && (
        <meshStandardMaterial emissive={"white"}>
          <videoTexture attach="map" args={[video]} encoding={sRGBEncoding} />
          <videoTexture
            attach="emissiveMap"
            args={[video]}
            encoding={sRGBEncoding}
          />
        </meshStandardMaterial>
      )}
      {props.screenTurnedOn && !episode && (
        <Html
          className={styles.container}
          transform
          position={[0, 0, 0.000001]}
          occlude
          center
        >
          <div className={styles.sub_container}>
            <CarStandNavbarComponent displayEpisode={(displayEpisode) => setDisplayEpisode(displayEpisode)}/>
            <CarStandHeroComponent />

            <CarStandFooterComponent />
          </div>
        </Html>
      )}
    </mesh>
  );
}
