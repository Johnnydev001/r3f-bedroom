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

// Constant for handling with state changes
export const state = proxy({
  screenTurnedOn: false,
  allowMovement: false,
  displayEpisode: false,
});

function App() {

  // Hook for acessing the state data
  const snap = useSnapshot(state);

  return (
    <section className={styles.container}>
      <NavbarComponent />

      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <PerspectiveCamera makeDefault position={[0, -1, 0]} />

            {/* Camera controls*/}
            <OrbitControls
              disabled
              enableZoom={snap.allowMovement}
              enableRotate={snap.allowMovement}
              minDistance={3.1}
              maxDistance={6}
              enablePan={false}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
            />
            <Environment preset="city" />

            <Laptop />
            <ContactShadows
              position={[0, -1, 0]}
              opacity={1}
              width={5}
              height={5}
            />
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
