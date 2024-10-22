import Banner from './Banner/Banner'
import Categories from "./Categories/Categories"
import RecipeBody from "./Recipes/RecipeBody"
import BannerTwo from "./BannerTwo/BannerTwo"
import InstagramData from "./InstagramData/InstagramData"
import RecipesTwo from "./RecipesTwo/RecipesTwo"
import Subscribe from "./Subscribe/Subscribe"





function Home() {
  return (
    <div>
      <div className=" container mx-auto">
         <Banner />
        <Categories />
        <RecipeBody />
        <BannerTwo /> 
      </div>
      <InstagramData />
      <div className="container mx-auto px-3">
         <RecipesTwo />
        <Subscribe />

      </div>
    
    </div>
  );
}

export default Home