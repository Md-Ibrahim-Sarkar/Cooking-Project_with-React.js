import SubscribeInput from "./SubscribeInput";


function Subscribe() {
  return (
    <div className="bg-[#E7F9FD] rounded-2xl py-20 relative">
      <div>
        <h1 className="h1 text-center max-[640px]:text-3xl mb-6">
          Deliciousness to your inbox
        </h1>
        <div className="flex w-full justify-center mb-14">
          <p className="max-w-[620px] text-center">
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
          </p>
        </div>
      </div>
      <div>
        <SubscribeInput />
      </div>
      <div className="absolute left-0 bottom-0  lg:w-[300px] max-[1000px]:w-[200px] max-[700px]:w-[150px]">
        <img src="/public/images/banner-child-three.png" alt="" />
      </div>
      <div className="absolute right-0 bottom-0 lg:w-[300px] max-[1000px]:w-[200px] max-[700px]:w-[150px]">
        <img src="/public/images/banner-child-three -2.png" alt="" />
      </div>
    </div>
  );
}

export default Subscribe