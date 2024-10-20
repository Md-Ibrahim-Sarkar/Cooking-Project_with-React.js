import InstagramImage from "./InstagramImage";


function InstagramData() {
  return (
    <div className="bg-gradient-to-t from-[#E7F9FD]  to-[#6cc63f00] pb-5">
      <div className="container mx-auto">
        <h2 className="h2 text-center mt-20">
          Check out @foodieland on Instagram
        </h2>
        <div className="w-full flex justify-center mb-20">
          <p className="max-w-[840px] text-center mt-6">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim.
          </p>
        </div>
        <InstagramImage />
      </div>
    </div>
  );
}

export default InstagramData