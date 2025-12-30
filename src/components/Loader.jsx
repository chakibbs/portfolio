import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center className="text-xl font-normal text-center text-white-600">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;