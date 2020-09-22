import React, {useRef, useState} from 'react'
import {useFrame} from 'react-three-fiber'

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => {
        mesh.current.rotation.x = mesh.current.rotation.y += 0.01 * props.mouse.current.x
    })

    return (
        <mesh {...props} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="#FFFFFF" />
        </mesh>
    )
}

export default Box
