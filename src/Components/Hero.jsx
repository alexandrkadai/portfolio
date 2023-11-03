import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from '../canvas';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5 border-solid border-2 border-[#915eff] p-5">
        
         
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hello My Name Is <br /> <span className="text-[#915eff]">Alex</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white`}>I`m  Frontend Developer, Who love to make great <br className="sm:block hidden"/> applications and help people </p>
          </div>

        </div>
        </div>
        <ComputersCanvas/>
    </section>
  );
};

export default Hero;
