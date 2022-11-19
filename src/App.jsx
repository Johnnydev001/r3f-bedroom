import styles from "./styles/app/app.module.scss";
import {
  ContactShadows,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  Stage,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio";
import Desktop from "../public/assets/models/desktop/Desktop";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

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
          <color attach="background" args={["#101010"]} />
          <fog attach={"fog"} args={["black", 4, 3]} />
          <Suspense fallback={"Loading world..."}>
            <PerspectiveCamera makeDefault position={[3, 0, 0]} />
            <Environment preset="night" />

            <OrbitControls
              disabled
              enablePan={true}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
              maxAzimuthAngle={0.5}
            />

            <EffectComposer>
              <Vignette eskil={false} offset={1} darkness={0.4} />
              <Noise opacity={0.1} premultiply />

              <Desktop />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
