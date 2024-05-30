import { BallCanvas } from '../canvas/';
import { ServiceWraper } from '../HOC';
import { technologies } from '../Constants';

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 ">
      {technologies.map((item) => (
        <div className="w-28 h28" key={item.name}>
          <BallCanvas icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default ServiceWraper(Tech, '');
