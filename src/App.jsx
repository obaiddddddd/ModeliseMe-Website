import { Environment, OrbitControls } from "@react-three/drei";
import "./App.css";
import { BodySection } from "./components/BodySection";
import { MainSection } from "./components/MainSection";
import { Canvas } from "@react-three/fiber";
import { Female } from "./components/Female";
import { useRef } from "react";
import SupportSection from "./components/SupportSection";

function App() {
  const model1 = useRef();
  const model2 = useRef();
  const model3 = useRef();
  return (
    <div>
      <MainSection />
      <BodySection />
      <div className="bgstudio hidden lg:block">
        <Canvas>
          <Environment preset="studio" />
          {/* <OrbitControls /> */}
          <Female
            scale={0.06}
            position={[-3.5, -3.5, 0]}
            rotation={[0, 0.2, 0]}
            ref={model1}
          />
          <Female
            scale={0.06}
            position={[0, -3.5, 0]}
            rotation={[0, 0, 0]}
            ref={model2}
          />
          <Female
            scale={0.06}
            position={[3.5, -3.5, 0]}
            rotation={[0, -1.2, 0]}
            ref={model3}
          />
        </Canvas>
      </div>
      <button
        onClick={(e) => {
          model1.current.resetAnimation();
          model2.current.resetAnimation();
          model3.current.resetAnimation();
        }}
      >
        Reset
      </button>
      <SupportSection />
    </div>
  );
}

export default App;
