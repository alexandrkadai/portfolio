import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { ServiceWraper } from '../HOC';
import { Fragment } from 'react';
import ExpirienceCard from './ExpirienceCard';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../Constants';
import { textVariant } from '../utils/motion';

const Experience = () => {
  return (
    <Fragment>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubtext}>What I`ve Done </p>
      <h2 className={styles.sectionHeadText}>Expierence</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExpirienceCard key={index} expierence={item}/>
        ))}
      </VerticalTimeline>
      </div>
    </Fragment>
  );
};

export default ServiceWraper(Experience, 'work');
