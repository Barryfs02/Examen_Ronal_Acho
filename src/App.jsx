import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react'
import Mesa1 from "./modelos/Mesa1";
import Laptop from './modelos/Laptop';
import SillaPlastico from './modelos/SillaPlastico';
import PcLic from './modelos/PcLic';
import Mesa2 from "./modelos/Mesa2";
import Mesa3 from "./modelos/Mesa3";
import { GridHelper } from 'three';
import Lavamanos from './modelos/Lavamanos';

import Impresora from './modelos/Impresora';

import ControlMovil from "./ControlMovil"
import Carretilla from './modelos/Carretilla';
 import Cajas from './modelos/Cajas';
import Escalera from './modelos/Escalera';
const App = () => {
  const [intensidadLuz, setIntensidadLuz] = useState(1);
  const [movimientoActivo, setMovimientoActivo] = useState(false);

  const activarMovimiento = () => {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      DeviceOrientationEvent.requestPermission()
        .then((state) => {
          if (state === "granted") setMovimientoActivo(true);
          else alert("Permiso de sensor no otorgado");
        })
        .catch(console.error);
    } else {
      setMovimientoActivo(true); // Android y escritorio
    }
  };
  return (
    <>
      {/* === UI control de luz === */}
      <div style={{
        position: "absolute",
        top: 20,
        left: 20,
        zIndex: 10,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 5
      }}>
        <button
        onClick={() =>(movimientoActivo ? setMovimientoActivo(false) : activarMovimiento())
        }
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          zIndex: 1,
          padding: "8px 12px",
          borderRadius: 5,
          background: movimientoActivo ? "red" : "green",
          color: "white",
          border: "none",
        }}
      >
        {movimientoActivo ? "Desactivar movimiento" : "Activar movimiento"}
      </button>
        <label style={{ marginTop: 10, display: "block" }}>
          Intensidad de Luz: {intensidadLuz.toFixed(2)}
        </label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.01"
          value={intensidadLuz}
          onChange={(e) => setIntensidadLuz(parseFloat(e.target.value))}
          style={{ width: "100%" }}
        />
      </div>

     
      <Canvas
        shadows
        camera={{ position: [10, 10, -10], fov: 50 }}
        style={{ width: '100vw', height: '100vh', background: '#222' }}
      >
        {/* === Luces === */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[5, 8, 5]}
          intensity={intensidadLuz}
          color="white"
          castShadow
        />
        <hemisphereLight intensity={0.3} />

        <primitive object={new GridHelper(20, 20)} />

        
        <mesh position={[0, 1.5, 7.5]}>
          <boxGeometry args={[15, 3, 0.15]} />
          <meshStandardMaterial color="white" />
        </mesh>
       
        <mesh position={[0, 4.5, 7.5]}>
          <boxGeometry args={[15, 3, 0.15]} />
          <meshStandardMaterial color="orange" />
        </mesh>

       
        <mesh position={[0, 2.5, 7.35]}>
          <boxGeometry args={[6, 2, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>

       
        <mesh position={[0, 2.4, -7.5]}>
          <boxGeometry args={[15, 4.8, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 6.4, -7.5]}>
          <boxGeometry args={[15, 3.2, 0.2]} />
          <meshStandardMaterial color="orange" />
        </mesh>

      
        <mesh position={[-7.5, 2.4, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[15, 4.8, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-7.5, 6.4, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[15, 3.2, 0.2]} />
          <meshStandardMaterial color="orange" />
        </mesh>
    <mesh position={[7.5, 6.4, 0]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[15, 3.2, 0.2]} />
          <meshStandardMaterial color="orange" />
        </mesh>

          <mesh position={[7.5, 2.4, -4]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[7, 4.8, 0.2]} />
          <meshStandardMaterial color="white" />
        </mesh>

          <Mesa1 position={[-4, 0, -4]} />
        <Laptop position={[-4, 0.80, -4]} scale={[0.7, 0.7, 0.7]} />
        <SillaPlastico position={[-4, 0.2, -4.8]} scale={[0.12, 0.12, 0.12]} />

        <Mesa1 position={[-4, 0, 0]} />
        <Laptop position={[-4, 0.80, 0]} scale={[0.7, 0.7, 0.7]} />
        <SillaPlastico position={[-4, 0.2, -0.8]} scale={[0.12, 0.12, 0.12]} />

      
        <Mesa1 position={[0, 0, -2]} />
        <Laptop position={[0, 0.80, -2]} scale={[0.7, 0.7, 0.7]} />
        <SillaPlastico position={[0, 0.2, -2.8]} scale={[0.12, 0.12, 0.12]} />

        <Mesa1 position={[4, 0, -4]} />
        <Laptop position={[4, 0.80, -4]} scale={[0.7, 0.7, 0.7]} />
        <SillaPlastico position={[4, 0.2, -4.8]} scale={[0.12, 0.12, 0.12]} />

        <Mesa1 position={[4, 0, 0]} />
        <Laptop position={[4, 0.80, 0]} scale={[0.7, 0.7, 0.7]} />
        <SillaPlastico position={[4, 0.2, -0.8]} scale={[0.12, 0.12, 0.12]} />

        <Mesa1 position={[0, 0, -7]} scale={[1.3, 1, 1]} />
        <Mesa1 position={[1, 0, -7]} scale={[1.3, 1, 1]} />
        <Cajas position={[1, 0, -6]} scale={[1.3, 1, 1]} />
        <Mesa3 position={[5.5, 0, 2]} scale={[1.3, 1, 1]} />
        <Laptop position={[6.5, 0.80, 2]} scale={[0.7, 0.7, 0.7]} />

        <Mesa2 position={[0.1, 0, 16]} scale={[1.3, 1, 1]} />
        <Impresora position={[-4, 1, 4.5]} scale={[0.12, 0.12, 0.12]} />
        <Mesa3 position={[-5, 0, 6.5]} scale={[1.3, 1, 1]} />
        
        <PcLic position={[-6, 0, 7]} scale={[1.3, 1.3, 1.3]} />
        <SillaPlastico position={[-6, 0.2, 5.5]} scale={[0.12, 0.12, 0.12]} />

        <Lavamanos position={[-7, 0, -5.5]} scale={[1.3, 1, 1]} />
        <Escalera position={[-5, 0, -7]} scale={[0.20, 0.20, 0.20]}/>
        <Carretilla position={[6, 0, -6]} scale={[1.3, 1, 1]} />
        <Carretilla position={[5, 0, -6]} scale={[1.3, 1, 1]} />
        
        {movimientoActivo ? (
    <ControlMovil activo={movimientoActivo} />
  ) : (
    <OrbitControls enableDamping={true} enablePan={true} />
  )}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
