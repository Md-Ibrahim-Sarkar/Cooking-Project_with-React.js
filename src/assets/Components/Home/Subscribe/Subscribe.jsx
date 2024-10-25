import SubscribeInput from "./SubscribeInput";
import { motion } from 'framer-motion';
import banner_Child_one from '../../../../../public/images/banner-child-three.png'
import banner_Child_two from '../../../../../public/images/banner-child-three -2.png'

function Subscribe() {
  return (
    <div className="bg-[#E7F9FD] rounded-2xl py-20 relative">
      <div>
        <motion.h1
          className="h1 text-center max-[640px]:text-3xl mb-6"
          initial={{
            opacity: 0,
            y: -100,
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
          Deliciousness to your inbox
        </motion.h1>
        <div className="flex w-full justify-center mb-14 max-[640px]:mb-5">
          <motion.p
            className="max-w-[620px] text-center"
            initial={{
              opacity: 0,

              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,

              scale: 1,
              transition: {
                duration: 1,
                delay: 0.05,
              },
            }}
          >
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </motion.p>
        </div>
      </div>
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
        <SubscribeInput />
      </motion.div>
      <motion.div
        className="absolute left-0 bottom-0   lg:w-[300px] max-[1000px]:w-[200px] max-[700px]:w-[150px]"
        initial={{
          opacity: 0,

          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,

          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}
      >
        <img src={banner_Child_one} alt="" />
      </motion.div>
      <motion.div
        className="absolute right-0 bottom-0 lg:w-[300px] max-[1000px]:w-[200px] max-[700px]:w-[150px]"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}
      >
        <img src={banner_Child_two} alt="" />
      </motion.div>
    </div>
  );
}

export default Subscribe