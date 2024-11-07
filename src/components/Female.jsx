import { useRef, useImperativeHandle, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export const Female = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("/Female.glb");
  const meshRef = useRef();
  const toggle = useRef(false);
  useFrame((state, delta) => {
    if (toggle.current) {
      meshRef.current.rotation.z += delta;
    }
  });
  useImperativeHandle(ref, () => ({
    resetAnimation() {
      meshRef.current.rotation.z = 0;
    },
  }));

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials["00275_Denise007_std"]}
          ref={meshRef}
          onPointerOver={(e) => {
            toggle.current = true;
          }}
          onPointerLeave={(e) => {
            toggle.current = false;
          }}
        />
      </group>
    </group>
  );
});
Female.displayName = "Female";

useGLTF.preload("Female.glb");

export default Female;
