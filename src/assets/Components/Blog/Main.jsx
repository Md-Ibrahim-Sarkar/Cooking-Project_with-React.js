/* eslint-disable react/prop-types */

import { motion } from 'framer-motion'
import blogImage from '../../../../public/images/blog image.png'
import blogWriter from '../../../../public/images/blog-writer.png'



function Main({ className }) {
  return (
    <div className={`${className}`}>
      <motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div><motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div><motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div><motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div><motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div><motion.div className='flex gap-4 mb-6'
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
        }}>
        <img className='rounded-xl w-[260px]' src={blogImage} alt="" />
        <div>
          <h3 className='text-[24px] font-semibold'>Crochet Projects for Noodle Lovers</h3>
          <p className='leading-6 mt-3 mb-6'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim </p>
          <div className='flex items-center gap-4'>
            <img src={blogWriter} alt="" />
            <span>Wade Warren</span>
            <div className='border-s ps-3'>
              <span>12 November 2021</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Main