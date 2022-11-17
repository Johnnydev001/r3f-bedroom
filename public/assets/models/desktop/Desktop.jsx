/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import LaptopScreenComponent from "../../../../src/components/laptop/laptop-screen.component";
import { Html } from "@react-three/drei";
import CarStandNavbarComponent from "../../../../src/components/carstand/navbar/navbar";
export default function Desktop({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/assets/models/desktop/desktop.gltf"
  );
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    Object.entries(actions)[57][1].play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Alfombrilla_16"
                position={[-2.84, 1.37, -1.39]}
                scale={1.2}
              >
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.negro}
                />
              </group>
              <group
                name="Botella_17"
                position={[-3.88, 1.51, -2.6]}
                scale={0.12}
              >
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group name="Cama_4" position={[-1.05, -0.69, 1.15]} scale={1.42}>
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials.base_cama}
                />
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials.colchon}
                />
              </group>
              <group
                name="Cojin_5"
                position={[3.11, 0.99, -3.33]}
                rotation={[0.6, 0, 0]}
                scale={[1.2, 1.6, 1.2]}
              >
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.sabanas}
                />
              </group>
              <group
                name="Estanteria_27"
                position={[-2.92, 4.04, -3.76]}
                scale={[1.2, 0.09, 0.45]}
              >
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials.base_cama}
                />
              </group>
              <group
                name="Habitacion_0"
                position={[0.09, -0.37, 0.14]}
                scale={4.82}
              >
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials.pared}
                />
                <mesh
                  name="Object_5"
                  geometry={nodes.Object_5.geometry}
                  material={materials.suelo}
                />
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.afuera}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.puerta}
                />
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.negro}
                />
              </group>
              <group
                name="Lampara_26"
                position={[0.25, 1.03, -3.31]}
                scale={[0.32, 0.04, 0.32]}
              >
                <mesh
                  name="Object_49"
                  geometry={nodes.Object_49.geometry}
                  material={materials.lamapra}
                />
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials.negro}
                />
              </group>
              <group
                name="Libros_28"
                position={[-2.77, 4.56, -3.74]}
                rotation={[Math.PI, 0, 2.85]}
                scale={[0.09, 0.43, 0.3]}
              >
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials.pages}
                />
                <mesh
                  name="Object_55"
                  geometry={nodes.Object_55.geometry}
                  material={materials.libro}
                />
              </group>
              <group
                name="Mesa_noche_25"
                position={[0.26, 0.66, -2.51]}
                scale={[-0.3, -0.03, -0.03]}
              >
                <mesh
                  name="Object_46"
                  geometry={nodes.Object_46.geometry}
                  material={materials.base_cama}
                />
                <mesh
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials.gris}
                />
              </group>
              <group
                name="Mesa_18"
                position={[-2.94, 1.35, -2.51]}
                scale={[1.2, 0.12, 1.2]}
              >
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials.base_cama}
                  position={[0.03, -0.18, 0.02]}
                  scale={[1, 1, 1.37]}
                />
              </group>
              <group
                name="Ordenador_19"
                position={[-3.96, 1.43, -3.49]}
                scale={0.08}
              >
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials.negro}
                />
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials.pcinsidenormal}
                />
              </group>
              <group
                name="Pantalla_20"
                position={[-3.78, 2.47, -1.13]}
                scale={1.46}
              >
                <mesh
                  name="Object_33"
                  geometry={nodes.Object_33.geometry}
                  material={materials.negro}
                />
                <LaptopScreenComponent />
              </group>
              <group
                name="Papel_1"
                position={[-3.66, 0.01, 1.34]}
                scale={0.58}
              />
              <group
                name="Papelera_3"
                position={[-3.58, 0.51, 1.41]}
                scale={0.39}
              >
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials.negro}
                  position={[0.05, 0, -0.93]}
                />
              </group>
              <group
                name="Papeles_2"
                position={[-3.49, 0.08, 1.43]}
                rotation={[0, 0, -0.88]}
                scale={0.58}
              />
              <group
                name="Pomo_24"
                position={[-4.16, 2.42, 4.44]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.11}
              >
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials.gris}
                />
              </group>
              <group
                name="Raton_21"
                position={[-2.79, 1.42, -2.24]}
                scale={[0.14, 0.04, 0.08]}
              >
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials.negro}
                />
                <mesh
                  name="Object_37"
                  geometry={nodes.Object_37.geometry}
                  material={materials.light}
                />
              </group>
              <group
                name="sabana_6"
                position={[3.21, 1.29, -0.07]}
                scale={[2.5, 1.2, 3.53]}
              >
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials.sabanas}
                />
              </group>
              <group
                name="Silla_22"
                position={[-2.5, -0.29, -0.91]}
                rotation={[-0.5, -1.22, 1.1]}
                scale={0.08}
              >
                <mesh
                  name="Object_39"
                  geometry={nodes.Object_39.geometry}
                  material={materials.silla2}
                />
              </group>
              <group
                name="Teclado_23"
                position={[-2.86, 1.4, -1.16]}
                scale={[0.27, 0.02, 0.8]}
              >
                <mesh
                  name="Object_41"
                  geometry={nodes.Object_41.geometry}
                  material={materials.negro}
                />
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials.material}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          onClick={() =>
            (Object.entries(actions)[57][1].paused =
              !Object.entries(actions)[57][1].paused)
          }
          name="Sketchfab_model001"
          position={[-2.87, 1.35, 0.94]}
          rotation={[-Math.PI / 2, 0, 1.84]}
          scale={5.49}
        >
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Bevels_2" position={[0, 0.01, -0.1]} scale={0.27}>
                <group name="Empty_1" scale={-0.04}>
                  <group
                    name="Camera_Light_0"
                    position={[0, 0.08, -0.04]}
                    rotation={[1.95, 0, 0]}
                    scale={-25.38}
                  >
                    <mesh
                      name="Object_12001"
                      geometry={nodes.Object_12001.geometry}
                      material={materials.Camera_Light}
                    />
                  </group>
                </group>
                <mesh
                  name="Object_4001"
                  geometry={nodes.Object_4001.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_5001"
                  geometry={nodes.Object_5001.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_6001"
                  geometry={nodes.Object_6001.geometry}
                  material={materials.Glass}
                />

                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
                  <planeGeometry args={[1, 0.5]} />
                  <Html transform position={[0, 0, 0.000001]} occlude center>
                    <div>
                      <CarStandNavbarComponent />
                    </div>
                  </Html>
                </mesh>
                {/* <mesh
                  name="Object_7001"
                  geometry={nodes.Object_7001.geometry}
                  material={materials["Material.003"]}
                /> */}
                <mesh
                  name="Object_8001"
                  geometry={nodes.Object_8001.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials["Space_Grey.001"]}
                />
              </group>
              <group
                name="Caps_Lock_Light_3"
                position={[0, -0.01, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_14001"
                  geometry={nodes.Object_14001.geometry}
                  material={materials.Caps_Lock_Light}
                />
              </group>
              <group name="Circle001_12" position={[0.2, 0.01, -0.1]} />
              <group name="Cube_9" position={[0, -0.01, 0]}>
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials.Black_Plastic}
                />
              </group>
              <group name="Keyboard_8" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_30001"
                  geometry={nodes.Object_30001.geometry}
                  material={materials.Keys}
                />
              </group>
              <group
                name="Macbook_Pro_4"
                position={[0, 0.01, -0.1]}
                rotation={[1.95, 0, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_16001"
                  geometry={nodes.Object_16001.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group name="Main_Body_5" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials.Space_Grey}
                />
                <mesh
                  name="Object_19001"
                  geometry={nodes.Object_19001.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_21001"
                  geometry={nodes.Object_21001.geometry}
                  material={materials["Keys.001"]}
                />
              </group>
              <group
                name="Touch_Bar_Shot_7"
                position={[0, -0.01, 0]}
                scale={0.27}
              >
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
                />
              </group>
              <group name="Touch_Bar_6" position={[0, -0.01, 0]} scale={0.27}>
                <mesh
                  name="Object_23001"
                  geometry={nodes.Object_23001.geometry}
                  material={materials.Black_Plastic}
                />
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials.Black_Glass}
                />
                <mesh
                  name="Object_25001"
                  geometry={nodes.Object_25001.geometry}
                  material={materials.Keys}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/desktop/desktop.gltf");
