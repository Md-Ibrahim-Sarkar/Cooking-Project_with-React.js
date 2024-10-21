import Button from "../../Button/Button"
import { motion } from 'framer-motion';

function InstagramImage() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 max-[640px]:grid-cols-1 sm:grid-cols-2 gap-4">
        <motion.div
          className="flex justify-center mb-3 "
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0, //
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}
        >
          <img className="shadow-2xl" src="/public/images/insta-1.png" alt="" />
        </motion.div>
        <motion.div
          className="flex justify-center mb-3 "
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
          <img className="shadow-2xl" src="/public/images/insta-2.png" alt="" />
        </motion.div>
        <motion.div
          className="flex justify-center mb-3 "
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
          <img className="shadow-2xl" src="/public/images/insta-3.png" alt="" />
        </motion.div>
        <motion.div
          className="flex justify-center mb-3 "
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0, //
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}
        >
          <img className="shadow-2xl" src="/public/images/insta-4.png" alt="" />
        </motion.div>
      </div>
      <div className="w-full flex justify-center md:mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
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
          <Button className="text-[14px]">
            Visit Our Instagram
            <span className="ms-3 text-[18px]">
              <i className="fa-brands fa-instagram"></i>
            </span>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}

export default InstagramImage