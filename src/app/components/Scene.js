"use client"

import { Canvas, useThree } from "@react-three/fiber"
import Model from "./Model"
import { Suspense } from "react"
import { useProgress, Html, ScrollControls } from "@react-three/drei"
import Modal from "./Modal"


function Loader() {
  const { progress, active } = useProgress()

  return <Html center>{progress.toFixed(1)} % loaded</Html>
}

export default function Scene() {
  return (
    <Canvas  style={{height:600 , width:1400}}>
   
      <ambientLight position={[-5, -5, 5]} intensity={10} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={8}>
    <Model/>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}