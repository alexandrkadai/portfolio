import { Fragment } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

import { projects } from "../constants";
import { styles } from '../style';
import { github } from '../assets';
import { ServiceWraper } from '../HOC';
import { fadeIn, textVariant } from '../utils/motion';

const Works = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>Recent Works</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          This project is created with my heart wide open, aiming to showcase my skills and
          experience through real-world examples. Each project includes a link to its repository on
          GitHub, where you can review the code management and code cleanliness. Furthermore, these
          projects are available online, allowing you to visually assess their responsiveness and
          other aspects. Feel free to explore them."
        </motion.p>
      </div>
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((item, index) => (
          <ProjectCard key={index} {...item} index={index}/>
        ))}
      </div>
    </Fragment>
  );
};

export default ServiceWraper(Works, 'works');
