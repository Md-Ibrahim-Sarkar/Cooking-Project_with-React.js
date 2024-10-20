import { useEffect, useState } from "react";
import RecipeBodyTwo from "./RecipeBodyTwo";
import RecipeSearch from "./RecipeSearch";
import axios from "axios";

function RecipesTwo() {

  let [recipe, setRecipe] = useState([])
  console.log(recipe);
  
  
  useEffect(() => {
     async function data() {
      let mainData = await axios.get(
        'https://course.divinecoder.com/food/random/8'
       );
       setRecipe(mainData.data)
       

       
    }
    data();
  }, [])


  return (
    <div className="mt-14">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <h2 className="h2 max-[640px]:text-2xl  max-[1000px]:text-center">
          <span className="lg:block">Try this delicious recipe</span> to make
          your day
        </h2>
        <div className="mt-3">
          <RecipeSearch />
        </div>
      </div>
      <div>


        {
          recipe.length == 0 ?
            <div><span className="loading loading-infinity loading-lg"></span></div>
            :
            <RecipeBodyTwo  recipe={recipe} />
        };
      </div>
    </div>
  );
}

export default RecipesTwo