"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import Modal from "./Modal"
import { Color } from "three"

function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas  style={{height:500}}>
   
      <ambientLight position={[-5, -5, 5]} intensity={10} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={8}>
    <Modal/>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}