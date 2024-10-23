import { motion } from 'framer-motion';
import Profile from '../Profile/Profile';

function RecipeCreator() {
  return (
    <motion.div
      className="flex justify-between"
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
      <div className="border-r-2 max-[640px]:border-none pe-4">
        <Profile />
      </div>
      <div className="border-r-2 max-[550px]:hidden">
        <div className="flex items-center pe-4 gap-4 ">
          <span>
            <i className="text-2xl fa-solid fa-stopwatch"></i>
          </span>
          <div className="flex flex-col pe-3">
            <span className="font-semibold max-[640px]:text-sm">PREP TIME</span>
            <span className="max-[640px]:text-sm">15 Minutes</span>
          </div>
        </div>
      </div>
      <div className="border-r-2 max-[550px]:hidden">
        <div className="flex items-center pe-4 gap-4 ">
          <span>
            <i className="text-2xl fa-solid fa-stopwatch"></i>
          </span>
          <div className="flex flex-col pe-3">
            <span className="font-semibold max-[640px]:text-sm">PREP TIME</span>
            <span className="max-[640px]:text-sm">15 Minutes</span>
          </div>
        </div>
      </div>
      <div className="flex items-center  justify-start max-[640px]:hidden">
        <span className="">
          <i className="fa-solid fa-utensils"></i>
          <span className="ms-3 max-[350px]:text-[13px]">Chicken</span>
        </span>
      </div>
    </motion.div>
  );
}

export default RecipeCreator;
