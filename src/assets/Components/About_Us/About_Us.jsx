import Profile from "../Profile/Profile";
import blogPost from '../../../assets/Image/blog post.png'
import blogTwo from '../../../../public/images/main-9.png'
import Subscribe from "../Home/Subscribe/Subscribe";
import { motion } from "framer-motion";

function About_Us() {
  return (
    <div className="container mx-auto px-3">
      <motion.h2 className="text-[48px] text-center font-semibold max-[640px]:text-4xl"
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}>Full Guide to Becoming a Professional Chef</motion.h2>
      <motion.div className="flex justify-center"
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}>
        <Profile />
      </motion.div>
      <motion.div className="flex justify-center mt-4"
        initial={{
          opacity: 0,
          scale: 0.5
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 1,
            delay: 0.05,
          },
        }}>
        <p className="text-center max-w-[1050px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p>
      </motion.div>
      <motion.div className="flex justify-center"
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
        <img className="mt-5" src={blogPost} alt="" />
      </motion.div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 mt-10 max-w-[1050px] ">
          <div className="col-span-4 max-[1050px]:col-span-5 w-11/12">
            <div className="w-full">
              <motion.div
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
                <h3 className="h3">How did you start out in the food industry?</h3>
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
              </motion.div>
              <motion.div
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
                <h3 className="h3 mt-12">What do you like most about your job?</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
              </motion.div>
              <motion.div
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
                <h3 className="h3 mt-12">Do you cook at home on your days off?</h3>
                <img className="w-full h-[400px] max-[700px]:h-[200px] object-cover mt-4 rounded-2xl" src={blogTwo} alt="" />
                <p className="mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
              </motion.div>
              <motion.div
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
                <h3 className="h3 mt-12">What would your advice be to young people looking to get their foot in the door?</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
              </motion.div>
              <motion.div
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
                <div className="py-9 bg-slate-400 flex justify-center px-5 mt-6 rounded">
                  <q className="text-2xl max-w-[700px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.</q>
                </div>
                <h3 className="h3 mt-9">What is the biggest misconception that people have about being a professional chef?</h3>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit.</p>
              </motion.div>
            </div>
          </div>
          <motion.div className="col-span-1 max-[1050px]:col-span-5 w-11/12 max-[1050px]:mt-7"
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
            <div className="flex justify-center">
              <span className="text-[20px] font-semibold uppercase">SHARE THIS ON:</span>
            </div>
            <div className="flex justify-center">
              <ul >
                <li className="px-4 rounded-full py-2 hover:text-blue-700">
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li className="px-4 rounded-full py-2 hover:text-blue-700">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li className="px-4 rounded-full py-2 hover:text-rose-500">
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="mt-7">
        <Subscribe />
      </div>
    </div>
  );
}

export default About_Us;
