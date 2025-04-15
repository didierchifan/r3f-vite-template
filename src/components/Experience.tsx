import useLeva from "../hooks/useLeva";

export default function Experience() {
  const { boxColor } = useLeva();

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={boxColor} />
      </mesh>
    </>
  );
}
