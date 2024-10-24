/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client';

function SingleItem({ item }) {


  console.log(item);


  return (
    <div>
      <motion.div
        className="w-[180px] h-[202px] cursor-pointer bg-gradient-to-t from-[rgba(108,198,63,0.1)]  to-[#6cc63f00] rounded-xl"
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          x: 0, //
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}
      >
        <div className="flex justify-center items-start">
          <img src={item.image} alt="" />
        </div>
        <p className="text-center mt-10">{item.title}</p>
      </motion.div>
    </div>
  );
}

export default SingleItem