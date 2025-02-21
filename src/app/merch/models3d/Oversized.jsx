/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\Oversized.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function Oversized(props) {
  const { nodes, materials } = useGLTF('/oversizedf.glb')

  const groupRef = useRef()

  useEffect(() => {
    if (groupRef.current) {
      const box = new THREE.Box3().setFromObject(groupRef.current)
      const center = box.getCenter(new THREE.Vector3())
      groupRef.current.position.sub(center) // Center the model
    }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002 // Rotate the model on its own axis
    }
  })

  return (
    <group {...props} dispose={null} ref={groupRef}>
    <mesh geometry={nodes.Object_0004.geometry} material={materials.WOI} position={[0, 4.899, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.064} />
  </group>
  )
}

useGLTF.preload('/oversizedf.glb')



// import React from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/oversizedf.glb')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Object_0004.geometry} material={materials.WOI} position={[0, 4.899, 0]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.062} />
//     </group>
//   )
// }

// useGLTF.preload('/oversizedf.glb')
