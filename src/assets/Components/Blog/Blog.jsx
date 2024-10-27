
import { Button, } from "flowbite-react";
import Main from "./Main";
import Aside from "./Aside";
import Subscribe from '../Home/Subscribe/Subscribe'
import { motion } from "framer-motion";






function Blog() {

  let i = 0;

  return (
    <div className="container mx-auto px-3">
      <motion.h2 className="text-[64px] text-center font-semibold"
        initial={{
          opacity: 0,
          scale: 0.4,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}>Blog & Article</motion.h2>
      <motion.p className="text-center"
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
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</motion.p>
      <motion.div className="flex w-full justify-center mt-4"
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        whileInView={{
          opacity: 1,
          scale: 1, //
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}>
        <div className="relative w-1/2 max-[640px]:w-full mx-6 rounded-xl py-2" >
          <input className="w-full rounded-xl py-3" type="text" placeholder="Search article, news or recipe..." />
          <div className="absolute right-2 top-3">
            <Button className="px-3 bg-black" type="submit">Search</Button>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-6 md:grid-cols-1 mt-10 gap-4">


        <Main className='col-span-4 max-[640px]:col-span-6' />


        <Aside className='col-span-2 max-[640px]:col-span-6' />
      </div>
      <div className="flex justify-center mt-4 mb-6">
        <ul className="flex flex-wrap gap-4">
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">1</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">2</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">3</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">4</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">5</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200">...</li>
          <li className="py-3 px-5 rounded-lg border font-semibold hover:bg-black hover:text-white transform transition-all ease-linear duration-200"><i className="fa-solid fa-chevron-right"></i></li>
        </ul>
      </div>
      <Subscribe />
    </div>
  );
}

export default Blog;
