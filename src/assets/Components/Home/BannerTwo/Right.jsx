
import { motion } from 'framer-motion';

function Right() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 100,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        x: 0, //
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.05,
        },
      }}
    >
      <img src="/public/images/banner-two.png" alt="" />
    </motion.div>
  );
}

export default Right