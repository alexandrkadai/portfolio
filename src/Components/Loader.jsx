import { Html, useProgress } from '@react-three/drei';
import classes from './Loader.module.css';

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <p className={classes.pstyle}>{progress.toFixed(2)}%</p>
    </Html>
  );
};

export default Loader;
