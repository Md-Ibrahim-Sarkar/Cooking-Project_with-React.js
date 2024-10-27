/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import asideImage from '../../../../public/images/aside-image.png'


function Aside({ className }) {
  return (
    <div className={`${className} place-items-center`}>
      <div>
        <motion.h2 className="text-3xl font-semibold"
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileInView={{
            opacity: 1,
            y: 0, //
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}>Tasty Recipes</motion.h2>

        <div className='flex justify-center w-full'>
          <motion.div className='mt-6 flex max-[640px]:flex-wrap gap-3 '
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
            }}>
            <img className='rounded-2xl w-[160px] max-[640px]:h-[100px]' src={asideImage} alt="" />
            <div className='py-3'>
              <p className='max-w-[196px] mb-3 font-semibold'>Chicken Meatballs with Cream Cheese </p>
              <span className='pt-4'>By Andreas Paula</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Aside