import Button from "../../Button/Button"


function InstagramImage() {
  return (
    <div>
      <div className="grid lg:grid-cols-4 max-[640px]:grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex justify-center mb-3 ">
          <img className="shadow-2xl" src="/public/images/insta-1.png" alt="" />
        </div>
        <div className="flex justify-center mb-3 ">
          <img className="shadow-2xl" src="/public/images/insta-2.png" alt="" />
        </div>
        <div className="flex justify-center mb-3 ">
          <img className="shadow-2xl" src="/public/images/insta-3.png" alt="" />
        </div>
        <div className="flex justify-center mb-3 ">
          <img className="shadow-2xl" src="/public/images/insta-4.png" alt="" />
        </div>
      </div>
      <div className="w-full flex justify-center md:mt-20">
        <Button className="text-[14px]">
          Visit Our Instagram
          <span className="ms-3 text-[18px]">
            <i className="fa-brands fa-instagram"></i>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default InstagramImage