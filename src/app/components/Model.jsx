import { useAnimations, useGLTF, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

useGLTF.preload('./robot_playground.glb')

const Model = () => {
  const ref = useRef()
  const { nodes, materials, animations, scene } = useGLTF('./robot_playground.glb')
  const { actions } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    actions['Experiment'].play().paused = true
  }, [])

  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"].getClip().duration * scroll.offset) / 2)
  )

  return (
    <group ref={ref} scale={[0.5, 0.5, 0.5] }>
      <primitive object={scene} />
    </group>
  )
}



export default Model
