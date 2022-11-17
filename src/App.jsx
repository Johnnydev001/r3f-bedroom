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
import { proxy, useSnapshot } from "valtio";
import Desktop from "../public/assets/models/desktop/Desktop";

// Constant for handling with state changes
export const state = proxy({
  displayPromotion: false,
});

function App() {
  // Hook for acessing the state data
  const snap = useSnapshot(state);

  return (
    <section className={styles.container}>
      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <color attach="background" args={["rgb(20, 0, 32)"]} />
            <PerspectiveCamera makeDefault position={[3, 1, 0]} />
            <Environment preset="night" />

            <OrbitControls
              disabled
              enablePan={true}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
            />
            <Desktop />
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
