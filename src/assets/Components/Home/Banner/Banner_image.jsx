import Banner_img from '../../../../../public/images/banner.png'
import Banner_logo from '../../../../../public/images/banner-logo.png';
import { motion } from 'framer-motion';

function Banner_image() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
        scale: 0.7,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0.05,
        },
      }}
    >
      <div className="relative">
        <img
          className="w-full max-h-[640px] lg:h-full object-cover overflow-hidden rounded-r-3xl"
          src={Banner_img}
          alt="banner img"
        />

        <div>
          <img
            className="absolute top-8 left-1 lg:left-[-40px] max-[640px]:w-[80px]"
            src={Banner_logo}
            alt="banner logo"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Banner_image