import InstagramImage from "./InstagramImage";
import {motion} from 'framer-motion'

function InstagramData() {
  return (
    <div className="bg-gradient-to-t from-[#E7F9FD]  to-[#6cc63f00] pb-5">
      <div className="container mx-auto">
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
          <h2 className="h2 text-center mt-20">
            Check out @foodieland on Instagram
          </h2>
          <div className="w-full flex justify-center mb-20">
            <p className="max-w-[840px] text-center mt-6">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim.
            </p>
          </div>
        </motion.div>
        <InstagramImage />
      </div>
    </div>
  );
}

export default InstagramData