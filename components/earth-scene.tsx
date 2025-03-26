"use client"

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// Préchargement du modèle
useGLTF.preload('/Scenes/earth.glb')

export function EarthScene() {
  const earthRef = useRef<THREE.Group>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  
  const { scene } = useGLTF('/Scenes/earth.glb')

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.frustumCulled = false
        }
      })
    }
  }, [scene])
  
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0005
      earthRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y += 0.0005
    }
  })

  return (
    <>
      <group ref={earthRef} position={[0, 0, 0]} scale={[1.2, 1.2, 1.2]} rotation={[0.4, 0, 0]}>
        <primitive object={scene} />
        {/* Ajout d'une sphère pour l'effet d'atmosphère */}
        <mesh ref={atmosphereRef} scale={[1.1, 1.1, 1.1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshPhongMaterial 
            color="#4a90ff"
            transparent={true}
            opacity={0.15}
            side={THREE.BackSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      </group>

      {/* Simulation de la lumière solaire */}
      <directionalLight 
        position={[4, 2, 4]} 
        intensity={1.2} 
        color="#fffaea" // Lumière solaire légèrement chaude
      />
      
      {/* Lumière ambiante faible pour le côté nuit */}
      <ambientLight intensity={0.08} color="#102046" />
      
      {/* Lumière d'atmosphère subtile */}
      <hemisphereLight
        color="#4a90ff"
        groundColor="#000000"
        intensity={0.3}
      />

      {/* Effet de lueur atmosphérique */}
      <pointLight 
        position={[4, 2, 4]} 
        intensity={0.3} 
        color="#4a90ff"
        distance={10}
        decay={2}
      />
    </>
  )
} 