import one from '../../../../../public/images/small-paper.png'
import two from '../../../../../public/images/small-profile-img.png';
import Banner_image from './Banner_image';

function Banner() {
  return (
    <div>
      <div className=" grid grid-cols-2 bg-[#E7FAFE] rounded-3xl">
        <div className="col-span-1 max-[1000px]:col-span-2 p-3  lg:p-12 ">
          <div className="flex gap-1 max-w-[156px] bg-white justify-center py-3 rounded-full shadow-2xl">
            <img src={one} alt="small-paper" />
            <span>Hot Recipes</span>
          </div>
          <div>
            <h1 className="text-6xl lg:text-5xl xl:text-6xl font-semibold font-inter mt-[32px] max-w-[520px] max-[640px]:text-4xl">
              Spicy delicious chicken wings
            </h1>
            <p className="font-inter mt-[24px] max-w-[520px]">
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim{' '}
            </p>
          </div>
          <div className="mt-4">
            <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 rounded-full">
              <i className="fa-solid fa-stopwatch"></i>
              <span className="ms-3">30 Minutes</span>
            </span>
            <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 rounded-full ms-5">
              <i className="fa-solid fa-utensils"></i>
              <span className="ms-3">Chicken</span>
            </span>
          </div>
          <div className="flex mt-4 pt-5 justify-between min-[1314px]:mt-[104px]">
            <div className="flex gap-5   ">
              <img src={two} alt="profile" />
              <span>
                <span className="block">John Smith</span>
                <span className="block">15 March 2022</span>
              </span>
            </div>
            <div className="flex justify-center items-center bg-black rounded-2xl px-5 max-[640px]:px-2 cursor-pointer">
              <span className="me-2 text-white max-[640px]:text-[12px]">View Recipes</span>
              <i className="fa-regular fa-circle-play text-white max-[640px]:text-[15px]"></i>
            </div>
          </div>
        </div>
        <div className="col-span-1 max-[1000px]:col-span-2">
        <Banner_image />
        </div>
      </div>
    </div>
  );
}

export default Banner