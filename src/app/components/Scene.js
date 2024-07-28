"use client"

import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import Head from "./Head";

function Loader() {
  const { progress } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
    <>
    
    <Canvas 
      className="w-full h-full" 
      
    >
    <color attach="background" args={['#cecbd1']} />
      <ambientLight position={[-5, -5, 5]} intensity={10} />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={1} pages={10}>
        <Head/>
          <Model />
        </ScrollControls>
      </Suspense>
    </Canvas>
    </>

  );
}
