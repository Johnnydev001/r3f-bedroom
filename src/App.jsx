import styles from "./styles/app/app.module.scss";
import {
  ContactShadows,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  Environment,
  SpotLight,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { proxy, useSnapshot } from "valtio";
import Desktop from "./components/desktop/Desktop";
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
  return (
    <section className={styles.container}>
      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <color attach={"background"} args={["#202020"]} />
          <Suspense fallback={"Loading world..."}>
            <PerspectiveCamera makeDefault position={[3, 0, 0]} zoom={1.3} />

            <OrbitControls
              disabled
              enablePan={true}
              rotateSpeed={0.7}
              maxAzimuthAngle={0.5}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              maxDistance={3.6}
            />

            <ambientLight color={"blue"} intensity={0.05} />
            <ambientLight color={"white"} intensity={0.008} />

            <EffectComposer>
              <Vignette eskil={false} offset={0.1} darkness={1} />

              <Bloom
                luminanceThreshold={5}
                luminanceSmoothing={5}
                height={100}
              />
              <Noise opacity={0.02} />
              <Desktop />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
