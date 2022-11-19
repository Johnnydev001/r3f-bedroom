import styles from "./styles/app/app.module.scss";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { proxy } from "valtio";
import Desktop from "./components/desktop/Desktop";
import {
  EffectComposer,
  HueSaturation,
  Bloom,
  Noise,
  Vignette,
  ToneMapping,
  SSR,
} from "@react-three/postprocessing";

// Constant for handling with state changes
export const state = proxy({
  displayPromotion: false,
});

function App() {
  return (
    <section className={styles.container}>
      <section className={styles.canvas_container}>
        <Canvas shadows dpr={[1, 2]} colorManagement>
          <color attach={"background"} args={["#202020"]} />
          <Suspense fallback={"Loading world..."}>
            <PerspectiveCamera makeDefault position={[3, 0, 0]} zoom={1.2} />
            <Environment preset="night" background />
            <OrbitControls
              disabled
              enablePan={true}
              rotateSpeed={0.7}
              maxAzimuthAngle={Math.PI / 2}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              maxDistance={3.8}
              panSpeed={1.2}
              zoomSpeed={3}
            />

            <EffectComposer>
              <Vignette eskil={false} offset={0.1} darkness={1} />

              <Bloom
                luminanceThreshold={0.1}
                luminanceSmoothing={8}
                height={100}
              />
              <Noise opacity={0.01} />
              <HueSaturation saturation={0.3} />
              <ToneMapping
                adaptive={true}
                resolution={2048}
                middleGrey={1.5}
                maxLuminance={5.0}
                averageLuminance={5.0}
              />
              <SSR intensity={0.05} />

              <Desktop />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
