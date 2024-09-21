import { Suspense, useEffect, useState } from 'react'
import { Canvas, extend  } from '@react-three/fiber'
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'
extend({ OrbitControls })

const Coins = ({ isMobile }) => {
  const Coin = useGLTF('./Coin/Coin.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" /> 
      <pointLight position={[10, 10, 0]} intensity={1000} />
      <pointLight position={[-10, 10, 0]} intensity={1000} />
      <primitive
        object={Coin.scene}
        scale={isMobile ? 1.5 : 2}
        position={isMobile ? [0, -0.5, 0] : [0, -1, 0]}
        rotation={[0, 1.26, 0]}
      />
    </mesh>
  )
}

const CoinCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 23, 5], fov: 25}}
      style={{zIndex: -1}}
      gl={{ preserveDrawingBuffer: true}}
    >
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Coins isMobile={isMobile}/>

      <Preload all />
    </Canvas>
  )
}

export default CoinCanvas