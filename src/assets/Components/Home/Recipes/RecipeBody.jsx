import axios from "axios";
import Recipes from "./Recipes"
import { useState } from "react";
import { useEffect } from "react";

function RecipeBody() {

  let [data, setData] = useState([]);

  useEffect(() => {
    async function itemData() {
      try {
        let data = await axios.get(
          'https://course.divinecoder.com/food/random/9'
        );

        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    itemData();
  }, []);
  




  return (
    <div className="relative">
      {data.length == 0 ? (
        <div className="w-full h-60 flex justify-center items-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
      ) : (
        <Recipes FetchData={data} />
      )}
      
    </div>
  );
}

export default RecipeBody