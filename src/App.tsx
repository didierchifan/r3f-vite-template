import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Experience from "./components/Experience";
import { OrbitControls } from "@react-three/drei";
import useLeva from "./hooks/useLeva";

function App() {
  const { backgroundColor } = useLeva();

  return (
    <>
      <Container>
        <Canvas
          camera={{
            fov: 10,
            near: 0.1,
            far: 200,
            position: [0, 0, 20],
          }}
        >
          <color attach="background" args={[backgroundColor]} />
          <OrbitControls />
          <directionalLight castShadow position={[2, 2, 2]} />
          <Experience />
        </Canvas>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
