/* eslint-disable react/prop-types */

import { motion } from 'framer-motion';
import blogImage from '../../../../public/images/blog image.png';
import blogWriter from '../../../../public/images/blog-writer.png';

function Main({ className }) {

  const blogLoop = new Array(10).fill(null)

  return (
    <div className={`${className}`}>
      {blogLoop.map((item, index) => (
        <motion.div
          key={index}
          className='sm:flex max-[640px]:flex-none gap-4 mb-6 justify-center'
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
              delay: 0.05 * index,
            },
          }}
        >
          <img
            className='rounded-xl max-[770px]:w-full max-[770px]:h-[300px] max-[340px]:h-[200px] object-cover sm:h-[220px] sm:w-[260px]'
            src={blogImage}
            alt=""
          />
          <div className=''>
            <h3 className='text-[24px] font-semibold max-[770px]:mt-2'>
              Crochet Projects for Noodle Lovers
            </h3>
            <p className='leading-6 mt-3 mb-6 max-[770px]:mt-1  max-[770px]:mb-1'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='flex items-center gap-4 mt-3'>
              <img src={blogWriter} alt="" />
              <span>Wade Warren</span>
              <div className='border-s ps-3'>
                <span>12 November 2021</span>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Main;
