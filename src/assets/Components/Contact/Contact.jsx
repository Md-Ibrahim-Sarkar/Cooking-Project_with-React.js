import { motion } from "framer-motion";
import Subscribe from "../Home/Subscribe/Subscribe";


function Contact() {
  return (
    <div className="container mx-auto px-3">
      <motion.h2 className="text-[64px] text-center font-semibold max-[640px]:text-4xl"
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
        }}>Contact Us</motion.h2>
      <div className="md:grid md:grid-cols-6 mb-7">
        <motion.div className="col-span-2 w-[400px] max-[1000px]:hidden h-[472px] bg-gradient-to-b from-orange-50 to-cyan-100 rounded-lg"
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0, //
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}>

        </motion.div>
        <motion.div className=" col-span-4 max-[1000px]:col-span-6 mt-12"
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
          <div className="flex max-[570px]:flex-wrap gap-4">
            <div className="w-full">
              <label htmlFor="input" className="text-[18px]">Name</label>
              <input type="text" id="voice-search" className="bg-gray-50 max-[570px]:max-w-[500px] mt-3 max-w-[400px] max-h-[60px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF5A1F] focus:border-[#FF5A1F] block w-full ps-10 p-2.5 " placeholder="Enter your name..." required />
            </div>
            <div className="w-full">
              <label htmlFor="input" className="text-[18px]">Email Address</label>
              <input type="text" id="voice-search" className="bg-gray-50 mt-3 max-[570px]:max-w-[500px] max-w-[400px] max-h-[60px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF5A1F] focus:border-[#FF5A1F] block w-full ps-10 p-2.5 " placeholder="Your email address..." required />
            </div>
          </div>
          <div className="flex gap-4 mt-6 max-[570px]:flex-wrap">
            <div className="w-full">
              <label htmlFor="input" className="text-[18px]">Subject</label>
              <input type="text" id="voice-search" className="bg-gray-50 mt-3 max-[570px]:max-w-[500px] max-w-[400px] max-h-[60px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF5A1F] focus:border-[#FF5A1F] block w-full ps-10 p-2.5 " placeholder="Enter subject..." required />
            </div>
            <div className="w-full">
              <label htmlFor="input" className="text-[18px]">Enquiry type</label>

              <select type="text" id="voice-search" className="bg-gray-50 mt-3 max-[570px]:max-w-[500px] max-w-[400px] max-h-[60px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF5A1F] focus:border-[#FF5A1F] block w-full  p-2.5 " placeholder="Advertising" required >

                <option value="test">Advertising</option>
                <option value="test">test</option>
                <option value="test">test</option>
                <option value="test">test</option>
              </select>
            </div>
          </div>

          <div className="w-full mt-6"
          >
            <label htmlFor="input" className="text-[18px]">Subject</label>
            <textarea type="text" id="voice-search" className="bg-gray-50 max-h-[200px] h-[180px]  mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FF5A1F] focus:border-[#FF5A1F] block w-full ps-10 p-2.5 " placeholder="Enter your messages..." required></textarea>

          </div>





        </motion.div>
      </div>
      <Subscribe />
    </div>
  );
}

export default Contact;
