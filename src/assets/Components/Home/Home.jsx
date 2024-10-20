import Header from "./Header/Header"
import Banner from './Banner/Banner'
import Categories from "./Categories/Categories"
import RecipeBody from "./Recipes/RecipeBody"
import BannerTwo from "./BannerTwo/BannerTwo"
import InstagramData from "./InstagramData/InstagramData"
import RecipesTwo from "./RecipesTwo/RecipesTwo"
import Subscribe from "./Subscribe/Subscribe"
import Footer from "../Footer/Footer"




function Home() {
  return (
    <div>
      <div className="container mx-auto px-3">
        <Header />
        <Banner />
        <Categories />
        <RecipeBody />
        <BannerTwo />
      </div>
      <InstagramData />
      <div className="container mx-auto px-3">
        <RecipesTwo />
        <Subscribe />
        <Footer />
      </div>
    
    </div>
  );
}

export default Home