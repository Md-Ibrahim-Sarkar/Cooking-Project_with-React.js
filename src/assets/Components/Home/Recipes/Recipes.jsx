/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import Item from "../Recipes/Item";
import { motion } from 'framer-motion';






function Recipes({ FetchData }) {
  return (
    <div className="px-3">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
          scale:0.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0, //
          scale:1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}
      >
        <h2 className="text-[48px] max-[640px]:text-[30px] text-center mt-20 max-[640px]:mt-7 font-semibold">
          Simple and tasty recipes
        </h2>
        <div className="flex justify-center mb-6">
          <p className="max-w-[706px] text-center mt-1">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
        </div>
      </motion.div>
      <div className="grid gap-4 lg:grid-cols-3 max-[640px]:grid-cols-1  sm:grid-cols-2  place-items-center ">
        {FetchData.map(item => (
          <Item key={item.id} AllData={item} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
