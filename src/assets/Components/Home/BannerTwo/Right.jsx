
import { motion } from 'framer-motion';
import bannerTwo from '../../../../../public/images/banner-two.png'

function Right() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        y: 0, //
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.05,
        },
      }}
    >
      <img src={bannerTwo} alt="" />
    </motion.div>
  );
}

export default Right