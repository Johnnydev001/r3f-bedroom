import styles from "./styles/app/app.module.scss";
import NavbarComponent from "./components/navbar/navbar.component";
import {
  ContactShadows,
  OrbitControls,
  PerspectiveCamera,
  Environment
} from "@react-three/drei";
import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";

import Laptop from "./components/laptop/laptop.component";

function App() {
  const [zoom, setZoom] = useState(1);
  const [yPosition, setYPosition] = useState(-1);

  const [movement, allowMovement] = useState(false);

  const zoomInToScreen = () => {
    setZoom(1.5);
    setYPosition(1);
  };




  return (
    <section className={styles.container}>
      <NavbarComponent />

      <section className={styles.canvas_container}>
        <Canvas dpr={[1, 2]}>
          <Suspense fallback={"Loading world..."}>
            <PerspectiveCamera makeDefault position={[0, -1, 0]} zoom = {1}  />

            {/* Camera controls*/}
            <OrbitControls
              disabled
              enableZoom={movement}
              enableRotate={movement}
              minDistance={4}
              maxDistance={6}
              enablePan={false}
              rotateSpeed={0.7}
              maxPolarAngle={1.2}
            />
            <Environment preset="city" />

            <Laptop zoomInToScreen={() => zoomInToScreen()} allowMovement={(movement) => allowMovement(movement)}  />
            <ContactShadows position={[0, -1, 0]} opacity={1} width={5} height={5} />
          </Suspense>
        </Canvas>
      </section>
    </section>
  );
}

export default App;
