import Subscribe from '../Home/Subscribe/Subscribe';
import Nutrition_Information from './Nutrition_Information';
import RecipeCreator from './RecipeCreator';
import RecipeVideo from './RecipeVideo';
import { motion } from 'framer-motion';
function Recipes() {
  return (
    <div className="container mx-auto mt-8  max-[640px]:mt-8 px-3">
      <div className="grid max-[640px]:grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-5 ">
        <div className="md:col-span-3 max-[640px]:col-span-1 sm:col-span-1">
          <motion.h1
            className="text-5xl mb-6 max-[640px]:text-3xl "
            initial={{
              opacity: 0,
              y: -50,
              scale: 0.7,
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
            Health Japanese Fried Rice
          </motion.h1>
          <RecipeCreator />
          <RecipeVideo />
        </div>
        <div className="md:col-span-2 max-[640px]:col-span-1 sm:col-span-1">
          <Nutrition_Information />
        </div>
      </div>
      <motion.div
        className="w-full mt-9"
        initial={{
          opacity: 0,
          y: -50,
          scale: 0.7,
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
        <p className="break-all mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>
      <Subscribe />
    </div>
  );
}

export default Recipes;
