import React from 'react'

function Escenario() {
  return (
    <group>
      {/* ======== PAREDES ======== */}
      {/* Pared trasera */}
      <mesh position={[0, 2.5, -7]} receiveShadow castShadow>
        <boxGeometry args={[15, 5, 0.2]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Pared izquierda */}
      <mesh position={[-7.5, 2.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 5, 15]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Pared derecha */}
      <mesh position={[7.5, 2.5, 0]} receiveShadow castShadow>
        <boxGeometry args={[0.2, 5, 15]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Pared frontal */}
      <mesh position={[0, 2.5, 7]} receiveShadow castShadow>
        <boxGeometry args={[15, 5, 0.2]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* ======== PUERTA ======== */}
      <mesh position={[4, 1.25, 7.05]} receiveShadow castShadow>
        <boxGeometry args={[2, 2.5, 0.1]} />
        <meshStandardMaterial color="#8b5a2b" />
      </mesh>

      {/* ======== PIZARRA ======== */}
      <mesh position={[0, 2, -6.89]} receiveShadow>
        <boxGeometry args={[5, 2, 0.1]} />
        <meshStandardMaterial color="#2d2d2d" />
      </mesh>

      {/* Marco de la pizarra */}
      <mesh position={[0, 2, -6.91]} receiveShadow>
        <boxGeometry args={[5.2, 2.2, 0.05]} />
        <meshStandardMaterial color="#444" />
      </mesh>

      {/* ======== VENTANAS ======== */}
      {/* Ventana izquierda */}
      <mesh position={[-7.49, 2.5, -2]} receiveShadow>
        <boxGeometry args={[0.05, 2, 3]} />
        <meshStandardMaterial color="#a3d9ff" transparent opacity={0.6} />
      </mesh>

      {/* Ventana derecha */}
      <mesh position={[7.49, 2.5, -2]} receiveShadow>
        <boxGeometry args={[0.05, 2, 3]} />
        <meshStandardMaterial color="#a3d9ff" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

export default Escenario