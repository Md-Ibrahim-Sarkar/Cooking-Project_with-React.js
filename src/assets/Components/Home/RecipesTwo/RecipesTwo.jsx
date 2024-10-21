/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import RecipeBodyTwo from "./RecipeBodyTwo";
import RecipeSearch from "./RecipeSearch";
import axios from "axios";
import { motion } from 'framer-motion';

function RecipesTwo() {

  let [recipe, setRecipe] = useState([])
  let [searchText, setSearchText] = useState('')


  
  
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
        <motion.h2
          className="h2 max-[640px]:text-2xl  max-[1000px]:text-center"
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0, //
            scale: 1,
            transition: {
              duration: 1,
              delay: 0.05,
            },
          }}
        >
          <span className="lg:block">Try this delicious recipe</span> to make
          your day
        </motion.h2>
        <div className="mt-3">
          <RecipeSearch onSearch={text => setSearchText(text)} />
        </div>
      </div>
      <div>
        {recipe.length == 0 ? (
          <div>
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
          <RecipeBodyTwo
            recipe={recipe.filter(item =>
              item.name.toLowerCase().includes(searchText.toLocaleLowerCase())
            )}
          />
        )}
        ;
      </div>
    </div>
  );
}

export default RecipesTwo