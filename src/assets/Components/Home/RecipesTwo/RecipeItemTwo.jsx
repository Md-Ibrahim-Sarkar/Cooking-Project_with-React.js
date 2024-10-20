/* eslint-disable react/prop-types */


function RecipeItemTwo({ recipe }) {
  

  let {name,image} = recipe
  

  return (
    <div className="cursor-pointer">
      <div>
        <img className="rounded-2xl h-[200px] max-w-[360px] lg:w-[300px] xl:w-[360px]" src={image} />
      </div>
      <h3 className="h3 my-5 max-w-72">{name}</h3>
      <div>
        <div className="mt-8 mb-4">
          <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 rounded-full">
            <i className="fa-solid fa-stopwatch"></i>
            <span className="ms-3">30 Minutes</span>
          </span>
          <span className="bg-[rgba(0,0,0,0.05)] py-2 px-5 rounded-full ms-5">
            <i className="fa-solid fa-utensils"></i>
            <span className="ms-3">Chicken</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RecipeItemTwo