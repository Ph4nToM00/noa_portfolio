"use client"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'

export function CameraModel() {
  const cameraRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (cameraRef.current) {
      cameraRef.current.rotation.y += 0.002
      cameraRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={cameraRef} position={[0, 0, 0]} scale={[1.5, 1.5, 1.5]} rotation={[0, 0, 0]}>
      {/* Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.8, 0.5, 0.4]} />
        <meshStandardMaterial color="#1d4ed8" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Lens */}
      <mesh castShadow receiveShadow position={[0.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 0.4, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Viewfinder */}
      <mesh castShadow receiveShadow position={[0, 0.3, 0]}>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Grip */}
      <mesh castShadow receiveShadow position={[0, -0.3, 0]}>
        <boxGeometry args={[0.3, 0.3, 0.35]} />
        <meshStandardMaterial color="#1e293b" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}