import { Leva } from "leva"
import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import { PerspectiveCamera } from "@react-three/drei"

import Cube from "../components/Cube.jsx"
import Rings from "../components/Rings.jsx"
import ReactLogo from "../components/ReactLogo.jsx"
import Button from "../components/Button.jsx"
import Target from "../components/Target.jsx"
import CanvasLoader from "../components/Loading.jsx"
import HeroCamera from "../components/HeroCamera.jsx"
import { calculateSizes } from "../constants/index.js"
import { HackerRoom } from "../components/HackerRoom.jsx"

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 })
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

  const sizes = calculateSizes(isSmall, isMobile, isTablet)

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden -mt-3" id="home">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none "></div>

      <div className="w-full mx-auto flex flex-col sm:mt-36 c-space gap-6 relative z-10">
        {/* Enhanced greeting with animation */}
        <div className="flex flex-col items-center">

          <h1 className="sm:text-7xl text-4xl font-bold text-white text-center font-generalsans leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              Naman Jain
            </span>
            <span className="waving-hand ml-2 inline-block animate-wave text-5xl">👋</span>

          </h1>

          <p className="hero_tag text-gray_gradient text-xl sm:text-4xl font-medium">Building Websites & Solution</p>

         
        </div>

        {/* Stats or highlights */}
        
    
      </div>

      <div className="w-full h-full mt-3 absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced bottom section */}
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <div className="flex flex-col items-center ">
          <a href="#about" className="w-fit group">
            <Button
              name="Let's work together"
              isBeam
              containerClass="sm:w-fit w-full sm:min-w-96 group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Scroll indicator */}
          {/* <div className="flex flex-col items-center  animate-bounce">
            <span className="text-xs text-gray-400 uppercase tracking-wider">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
    </section>
  )
}

export default Hero
