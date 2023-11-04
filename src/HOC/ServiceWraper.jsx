import { motion } from "framer-motion";
import { styles } from "../style";
import { staggerContainer } from "../utils/motion";



const ServiceWraper = (Component, idName) => function HOC() {
    return(
        <motion.section>
        <Component/>
        </motion.section>
    )
}


export default ServiceWraper;