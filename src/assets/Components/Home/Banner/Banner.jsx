/* eslint-disable no-undef */
import one from '../../../../../public/images/small-paper.png';
import Profile from '../../Profile/Profile';
import Banner_image from './Banner_image';
import { motion } from 'framer-motion';

function Banner() {
  return (
    <div>
      <div className=" grid grid-cols-2 bg-[#E7FAFE] rounded-3xl">
        <div className="col-span-1 max-[1000px]:col-span-2 p-3  lg:p-12 ">
          <motion.div
            className="flex gap-1 max-w-[156px] bg-white justify-center py-3 rounded-full shadow-2xl"
            initial={{
              opacity: 0,
              y: -50,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 1,
                delay: 0.05,
              },
            }}
          >
            <img src={one} alt="small-paper" />
            <span>Hot Recipes</span>
          </motion.div>
          <div>
            <motion.h1
              className="text-6xl lg:text-5xl xl:text-6xl font-semibold font-inter mt-[32px] max-w-[520px] max-[640px]:text-4xl"
              initial={{
                opacity: 0,
                y: -50,
              }}
              whileInView={{
                opacity: 1,
                y: 0, //
                transition: {
                  duration: 1,
                  delay: 0.05,
                },
              }}
            >
              Spicy delicious chicken wings
            </motion.h1>
            <motion.p
              className="font-inter mt-[24px] max-w-[520px]"
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
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{' '}
            </motion.p>
          </div>
          <motion.div
            className="mt-4"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0, //
              transition: {
                duration: 1,
                delay: 0.07,
              },
            }}
          >
            <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 max-[350px]:w-[100px] rounded-full">
              <i className="fa-solid fa-stopwatch"></i>
              <span className="ms-3 max-[350px]:text-[13px] ">30 Minutes</span>
            </span>
            <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 rounded-full ms-5">
              <i className="fa-solid fa-utensils"></i>
              <span className="ms-3 max-[350px]:text-[13px]">Chicken</span>
            </span>
          </motion.div>
          <motion.div
            className="flex mt-4 pt-5 justify-between min-[1314px]:mt-[104px]"
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0, //
              transition: {
                duration: 1,
                delay: 0.05,
              },
            }}
          >
            <Profile />
            <div className="flex justify-center items-center bg-black rounded-2xl px-5 max-[640px]:px-2 max-[350px]: cursor-pointer">
              <span className="me-2 text-white max-[640px]:text-[12px] max-[350px]:text-[11px]">
                View Recipes
              </span>
              <i className="fa-regular fa-circle-play text-white max-[640px]:text-[15px]"></i>
            </div>
          </motion.div>
        </div>
        <div className="col-span-1 max-[1000px]:col-span-2">
          <Banner_image />
        </div>
      </div>
    </div>
  );
}

export default Banner;
