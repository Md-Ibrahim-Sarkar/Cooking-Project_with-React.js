/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

function RecipeItemTwo({ recipe }) {


  let { name, image } = recipe


  return (
    <motion.div
      className="cursor-pointer"
      initial={{
        opacity: 0,
        y: -20,
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
      <div>
        <img
          className="rounded-2xl h-[200px] max-w-[360px] max-[640px]:max-w-[250px] object-cover lg:w-[300px] xl:w-[360px]"
          src={image}
        />
      </div>
      <h3 className="h3 my-5 max-w-72 capitalize">{name}</h3>
      <div>
        <div className="mt-8 mb-4">
          <span className="bg-[rgba(0,0,0,0.05)] py-2 max-[640px]:text-[15px] px-5 rounded-full">
            <i className="fa-solid fa-stopwatch"></i>
            <span className="ms-3 max-[640px]:text-[10px]">30 Minutes</span>
          </span>
          <span className="bg-[rgba(0,0,0,0.05)] py-2 max-[640px]:text-[15px] px-5 rounded-full ms-5">
            <i className="fa-solid fa-utensils"></i>
            <span className="ms-3 max-[640px]:text-[10px]">Chicken</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeItemTwo