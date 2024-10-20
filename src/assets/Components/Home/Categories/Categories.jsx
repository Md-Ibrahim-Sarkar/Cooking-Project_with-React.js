import { useEffect, useState } from "react";

import axios from "axios";
import FinalItem from "./FinalItem";


function Categories() {

  let [caData, setCaData] = useState([])
  
  useEffect(() => {
    async function dataFetch() {
      let data = await axios.get('categories.json')
      setCaData(data.data)
      
    }
    dataFetch();
  },[])
  

  return (
    <div className="lg:mt-40 mt-10 ">
      <div className="flex justify-between items-center px-3">
        <h2 className="text-[48px] mt-[-10px] font-semibold max-[640px]:text-[30px]">
          Categories
        </h2>
        <span>
          <a
            className="px-6 py-3 bg-[#E7FAFE]  rounded-lg max-[400px]:text-[10px] max-[400px]:px-3"
            href="#"
          >
            View All Categories
          </a>
        </span>
      </div>
      {/* item */}
      <div className="grid mt-8 max-[400px]:grid-cols-1 max-[700px]:grid-cols-2 max-[1050px]:grid-cols-3  grid-cols-6 gap-4 place-content-evenly w-full max-[700px]: place-items-center">
        <FinalItem caData={caData} />
      </div>
    </div>
  );
}

export default Categories