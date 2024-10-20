/* eslint-disable react/prop-types */


function SingleItem({ item }) {

  
  return (
    <div className="w-[180px] h-[202px] bg-gradient-to-t from-[rgba(108,198,63,0.1)]  to-[#6cc63f00] rounded-xl">
      <div className="flex justify-center items-start">
        <img src={item.image} alt="" />
      </div>
      <p className="text-center mt-10">{item.title}</p>
    </div>
  );
}

export default SingleItem