/* eslint-disable react/prop-types */

function Item({ AllData }) {
  return (
   
      <div className="bg-gradient-to-t from-[#E7F9FD] to-[#e7f9fd00] max-w-[364px] py-4 px-2 rounded-xl cursor-pointer">
        <div className="relative">
          <img
            className="w-[364px] h-[200px] rounded-xl"
            src={AllData.image}
            alt=""
          />
          <div
            className="w-[40px] h-[40px] bg-white
          absolute top-4 right-4 rounded-full flex justify-center items-center text-xl text-rose-500"
          >
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
        <h3 className="text-2xl mt-4">{AllData.name}</h3>
        <div className="mt-4">
          <span className="py-5 me-5">
            <i className="fa-solid me-3 fa-stopwatch"></i>
            <span>30 Minutes</span>
          </span>
          <span className="py-5 me-5">
            <i className="fa-solid me-3 fa-utensils"></i>
            <span>Snack</span>
          </span>
        </div>
      </div>
  
  );
}

export default Item