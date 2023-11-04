import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import ServiceCard from './ServiceCard';
import { ServiceWraper } from '../HOC';
import { styles } from '../style';
import { services } from '../Constants';
import { fadeIn, textVariant } from '../utils/motion';
const About = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubtext}>Intoducrion</p>
        <h2 className={styles.sectionHeadText}>About MySelf</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise
        in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely
        with clients to create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
    </Fragment>
  );
};

export default ServiceWraper(About, "about");
