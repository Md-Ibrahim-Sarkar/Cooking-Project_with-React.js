/* eslint-disable no-undef */
import { motion } from 'framer-motion';


function RecipeSearch({ onSearch }) {
  
  return (
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
      <form className="max-w-xl lg:w-[350px] mx-auto">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            onKeyUp={(e)=> onSearch(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-[#43ddff] rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#E7F9FD] dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
        </div>
      </form>
    </motion.div>
  );
}

export default RecipeSearch;
