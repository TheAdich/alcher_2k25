/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\Hoodie.glb 
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// import React from 'react'
// import { useGLTF } from '@react-three/drei'

export function Hoodie(props) {

  const { nodes, materials } = useGLTF('./Hoodie.glb')
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
    <group {...props} dispose={null}  ref={groupRef}>
      <mesh geometry={nodes.hoodie_low001.geometry} material={materials['Material.001']} position={[0,0,0]} rotation={[Math.PI / 2, 0, 0]} scale={0.017} />
    </group>
  )
}

useGLTF.preload('./Hoodie.glb')


// [-4.379, 2.577, -6.375]