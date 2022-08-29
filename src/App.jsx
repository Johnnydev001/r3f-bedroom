import styles from "./styles/app/app.module.scss";
import NavbarComponent from "./components/navbar/navbar.component";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Laptop from "./components/laptop/laptop.component";
import { proxy, useSnapshot } from "valtio";
import { Physics, usePlane } from "@react-three/cannon";

// Constant for handling with state changes
export const state = proxy({
  screenTurnedOn: false,
  allowMovement: false,
  displayEpisode: false,
});

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0,-1,0]}))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshPhongMaterial  transparent opacity={0.01}/>
    </mesh>
  )
}

function App() {

  // Hook for acessing the state data
  const snap = useSnapshot(state);

  return (
    <section className={styles.container}>
      <NavbarComponent />

      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
          
            <PerspectiveCamera makeDefault position={[0, -2, 0]} />
            <Environment preset="warehouse"/>
            {/* Camera controls*/}
            <OrbitControls
              disabled
              enableZoom={snap.allowMovement}
              enableRotate={snap.allowMovement}
              minDistance={4}
              maxDistance={6}
              enablePan={false}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
            />
            <Physics>
              <Laptop />
              <Plane/>
            </Physics> 
            
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
