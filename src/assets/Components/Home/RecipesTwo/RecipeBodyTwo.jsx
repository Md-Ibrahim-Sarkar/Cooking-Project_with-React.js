/* eslint-disable react/prop-types */
import RecipeItemTwo from "./RecipeItemTwo"


function RecipeBodyTwo({ recipe }) {

  
  return (
    <div className="py-6 grid lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 grid-cols-1  place-items-center gap-4">
      {recipe.map(item => (
        <RecipeItemTwo key={item.id} recipe={item} />
      ))}
    </div>
  );
}

export default RecipeBodyTwo