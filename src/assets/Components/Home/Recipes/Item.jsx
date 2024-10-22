/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
function Item({ AllData }) {
  return (
    <motion.div
      className="bg-gradient-to-t from-[#E7F9FD] to-[#e7f9fd00] max-w-[364px] py-4 px-2 rounded-xl cursor-pointer"
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
      <div className="relative">
        <img
          className="w-[364px] h-[200px] rounded-xl"
          src={AllData.image}
          alt=""
        />
        <div
          className="w-[40px] h-[40px] bg-white
          absolute top-4 right-4 rounded-full flex justify-center items-center text-xl text-rose-500"
        >
          <i className="fa-solid fa-heart"></i>
        </div>
      </div>
      <h3 className="text-2xl mt-4 capitalize">{AllData.name}</h3>
      <div className="mt-4">
        <span className="py-5 me-5">
          <i className="fa-solid me-3 fa-stopwatch"></i>
          <span>30 Minutes</span>
        </span>
        <span className="py-5 me-5">
          <i className="fa-solid me-3 fa-utensils"></i>
          <span>Snack</span>
        </span>
      </div>
    </motion.div>
  );
}

export default Item