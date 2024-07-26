import { useAnimations, useGLTF, ScrollControls, useScroll } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useRef } from 'react'

useGLTF.preload('./rob.glb')

const Modal = () => {
  const ref = useRef()
  const { nodes, materials, animations, scene } = useGLTF('./rob.glb')
  const { actions } = useAnimations(animations, scene)
  const scroll = useScroll()

  useEffect(() => {
    console.log(actions)
    actions['2137922060912_TempMotion'].play().paused = true
  }, [])

  useFrame(
    () =>
      //@ts-ignore
      (actions['2137922060912_TempMotion'].time =
        //@ts-ignore
        (actions['2137922060912_TempMotion'].getClip().duration * scroll.offset) / 4)
  )

  return (
    <group ref={ref} scale={[1.5, 1.25, 0.5]} >
      <primitive object={scene} />
    </group>
  )
}



export default Modal
