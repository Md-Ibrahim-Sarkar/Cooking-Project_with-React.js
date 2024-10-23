import { motion } from 'framer-motion';

function RecipeVideo() {
  return (
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
      <iframe
        className="rounded-3xl mt-5 w-full h-[400px] max-[640px]:h-[270px]"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/SUhk3MbQn1U?si=Q6S4_oEnTX-1_30R"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </motion.div>
  );
}

export default RecipeVideo;
