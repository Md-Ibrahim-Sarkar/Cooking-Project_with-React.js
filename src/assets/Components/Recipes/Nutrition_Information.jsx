import { motion } from 'framer-motion';

function Nutrition_Information() {
  return (
    <div>
      <motion.div
        className=" lg:mb-12 flex justify-end items-center gap-4 mb-4"
        initial={{
          opacity: 0,
          y: -100,
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
        <span className="p-6 bg-[#E7FAFE] rounded-full">
          <i className="fa-solid fa-print text-xl"></i>
        </span>
        <span className="p-6 bg-[#E7FAFE] rounded-full">
          <i className="fa-solid fa-share-from-square text-xl"></i>
        </span>
      </motion.div>
      <motion.div
        className="p-4 bg-[#E7FAFE] rounded-3xl"
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
        <h3 className="text-2xl font-semibold">Nutrition Information</h3>
        <ul>
          <li className="flex justify-between py-2">
            <span className="text-lg ">Calories</span>
            <span className="font-semibold">219.9 kcal</span>
          </li>
          <hr className="mt-2" />
          <li className="flex justify-between py-2">
            <span className="text-lg ">Total Fat</span>
            <span className="font-semibold">10.8 g</span>
          </li>
          <hr className="mt-2" />
          <li className="flex justify-between py-2">
            <span className="text-lg ">Protein</span>
            <span className="font-semibold">7.9 g</span>
          </li>
          <hr className="mt-2" />
          <li className="flex justify-between py-2">
            <span className="text-lg ">Carbohydrate</span>
            <span className="font-semibold">22.3 g</span>
          </li>
          <hr className="mt-2" />
          <li className="flex justify-between py-2">
            <span className="text-lg ">Cholesterol</span>
            <span className="font-semibold">37.4 mg</span>
          </li>
          <hr className="mt-2" />
        </ul>
        <div className="w-full flex justify-center ">
          <p className="mt-10 text-center max-w-[336px] capitalize">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Nutrition_Information;
