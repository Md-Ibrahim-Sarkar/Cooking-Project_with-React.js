/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import Item from "./item";







function Recipes({ FetchData }) {
  return (
    <div className="px-3">
      <h2 className="text-[48px] max-[640px]:text-[30px] text-center mt-20 max-[640px]:mt-7 font-semibold">
        Simple and tasty recipes
      </h2>
      <div className="flex justify-center mb-6">
        <p className="max-w-[706px] text-center mt-4">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim{' '}
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3 max-[640px]:grid-cols-1 sm:grid-cols-2 place-items-center ">
        {FetchData.map(item => (
          <Item key={item.id} AllData={item} />
        ))}
      </div>
    </div>
  );
}

export default Recipes;
