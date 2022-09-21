import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function animatedSphere({ scale, color, distort, speed, rough }) {
    return (
        <Sphere visible args={[1,32,32]} scale={scale}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={distort}
                speed={speed}
                roughness={rough}
            />
        </Sphere>
    )
}
