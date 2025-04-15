import { useControls } from "leva";

interface LevaControls {
  boxColor: string;
  backgroundColor: string;
}

export default function useLeva(): LevaControls {
  const controls = useControls("General Settings", {
    backgroundColor: {
      value: "#bde0fe",
    },
    boxColor: {
      value: "#fb6f92",
    },
  });

  return controls;
}
