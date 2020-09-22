import React, {useRef, Suspense} from 'react'
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from 'drei'

import Box from './Box'
import Ibex from './Ibex'

function App() {
    const mouse = useRef({x: 0, y: 0}) // Tracks users mouse (0, 0 = middle of page)
    const scrollRig = useRef({section: 0, amount: 0}) // Tracks how far user has scrolled (0.0 to 1.0 = single 100vh page)

    window.addEventListener('mousemove', (e) => {
        mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
    })

    window.addEventListener('scroll', () => {
        var scroll = window.pageYOffset / window.innerHeight
        scrollRig.current.section = Math.floor(scroll)
        scrollRig.current.amount = scroll - Math.floor(scroll)
    })

    const Scene = () => {
        return (
            <>
                <ambientLight intensity={1.0} />
                <pointLight position={[10, 10, 10]} />

                <Box mouse={mouse} />
                <Suspense fallback={null}>
                    <Ibex scale={[2.5, 2.5, 2.5]} />
                </Suspense>
                <OrbitControls />
            </>
        )
    }

    return (
        <div className="canvas-container">
            <Canvas pixelRatio={window.devicePixelRatio}>
                <Scene />
            </Canvas>
        </div>
    )
}

export default App
