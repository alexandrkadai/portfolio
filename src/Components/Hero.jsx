import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from '../canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 border-solid border-2 border-[#915eff] p-5">
          
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hello my name is<br/> <span className="text-[#915eff]">Alex</span>
            </h1>
            <p className={`${styles.heroSubText} mt-10 text-white`}>
              I`m Frontend Developer, Who love to make great <br className="sm:block hidden" />
              applications and help people
            </p>
          
        </div>
      </div>

      <div className="Murchaka w-full h-1/2  relative top-1/3">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-1 bottom-3 w-full flex justify-center items-center">
        <a href="#about" >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, reapeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
//1:22:11