import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Html,Sphere } from "@react-three/drei"

const techskills = "rgb(100, 111, 212)"
const softskills = "rgb(131, 70, 144)"
const oth = "#0077b6"

function Atoms({ time, content, scale, color, ...props }) {
  return (
    <mesh {...props}>
        <Sphere scale={scale}>
            <meshToonMaterial 
                roughness={0.8}
                color={color}
                emissive={"red"}
                emissiveIntensity={-0.3}
            />
        </Sphere>
        <Html distanceFactor={8} center={true}>
        <div className="content">
          {content}
        </div>
      </Html>
    </mesh>
  )
}

function Content() {
    const ref = useRef()
    useFrame(() => ( ref.current.rotation.y = ref.current.rotation.z += 0.01))
    return (
      <group ref={ref}>
        <Atoms position={[2.15, -2.15, -2.15]} content={"JS"} scale={0.8} color={techskills} />
        <Atoms position={[-2.15, -2.15, 2.15]} content={"Python"} scale={0.8} color={techskills} />
        <Atoms position={[-2.15, 2.15, -2.15]} content={"C/C++"} scale={0.8} color={techskills} />
        <Atoms position={[2.15, 2.15, 2.15]} content={"CSS3"} scale={0.8} color={techskills} />
        <Atoms position={[0, 0, -2.15]} content={"HTML"} scale={0.8} color={techskills} />
        <Atoms position={[0, 0, 2.15]} content={"ML"} scale={0.8} color={techskills} />
        <Atoms position={[0, 2.15, 0]} content={"React"} scale={0.8} color={techskills} />
        <Atoms position={[0, -2.15, 0]} content={"Git"} scale={0.8} color={techskills} />
        <Atoms position={[2.15, 0, 0]} content={"Bootstrap"} scale={1} color={techskills} />
        <Atoms position={[-2.15, 0, 0]} content={"MERN"} scale={0.8} color={techskills} />
        <Atoms position={[-2.15, 2.15, 2.15]} content={"Active Listener"} scale={1}  color={softskills} />
        <Atoms position={[2.15, 2.15, -2.15]} content={"Team Work"} scale={1}  color={softskills} />
        <Atoms position={[2.15, -2.15, 2.15]} content={"Fast Learner"} scale={1}  color={softskills} />
        <Atoms position={[-2.15, -2.15, -2.15]} content={"Algorithms"} scale={1}  color={softskills} />
        <Atoms position={[0, -2.15, 2.15]} content={"Anime"} scale={0.8}  color={oth} />
        <Atoms position={[0, 2.15, 2.15]} content={"Web Series"} scale={0.8}  color={oth} />
        <Atoms position={[0, 2.15, -2.15]} content={"Video Games"} scale={0.8}  color={oth} />
        <Atoms position={[0, -2.15, -2.15]} content={"Witcher 3"} scale={0.8}  color={oth} />
      </group>
    )
  }

export default Content