import styles from "./styles/app/app.module.scss";
import {
  ContactShadows,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Backdrop,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Laptop from "./components/laptop/laptop.component";
import { proxy, useSnapshot } from "valtio";
import { Physics, usePlane } from "@react-three/cannon";
import Model from "../public/assets/models/Desktop";

// Constant for handling with state changes
export const state = proxy({
  screenTurnedOn: false,
  allowMovement: false,
  displayPromotion: false,
});

function Plane(props) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -1, 0],
  }));
  return (
    <Backdrop floor={2} position={[0, -0.5, -3]} scale={[12, 5, 2]}>
      <MeshReflectorMaterial
        resolution={2048}
        blur={[50, 50]}
        mixBlur={1}
        mixStrength={10}
        color="rgb(20, 0, 32)"
      />
    </Backdrop>
  );
}

function App() {
  // Hook for acessing the state data
  const snap = useSnapshot(state);

  return (
    <section className={styles.container}>
      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <color attach="background" args={["rgb(20, 0, 32)"]} />
            <PerspectiveCamera makeDefault position={[0, -2, 0]} zoom={1.2} />
            <Environment preset="dawn" />

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
            <Model />

            <Physics>
              <Laptop />

              <Plane />
            </Physics>
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
