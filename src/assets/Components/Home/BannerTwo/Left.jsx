import Button from "../../Button/Button";
import { motion } from 'framer-motion';


function Left() {
  return (
    <div className="">
      <div>
        <motion.h2
          className="h2 max-[640px]:text-center"
          initial={{
            opacity: 0,
            y: -50,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            y: 0, //
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.03,
            },
          }}
        >
          Everyone can be a <br /> chef in their own kitchen
        </motion.h2>
        <motion.div
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
          <p className="mt-6 max-w-[504px] max-[400px]:pe-5 max-[640px]:text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </p>
          <div className="w-full flex max-[640px]:justify-center max-[640px]:mb-2">
            <Button className="mt-16 max-[640px]:mt-6">Learn More</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Left