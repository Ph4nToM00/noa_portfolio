"use client"

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { EarthScene } from './earth-scene'

export function HeroScene() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}
      >
        <color attach="background" args={['#000']} />
        <fog attach="fog" args={['#000', 5, 18]} />
        <ambientLight intensity={0.1} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <EarthScene />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          enableRotate={false}
        />
      </Canvas>
    </div>
  )
}