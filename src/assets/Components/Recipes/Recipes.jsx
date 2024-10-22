import { div } from "framer-motion/client"
import RecipeWriter from "./RecipeWriter"



function Recipes() {
  return (
    <div className="container mx-auto mt-20  max-[640px]:mt-8 px-3">
      <div className="grid max-[640px]:grid-cols-1 sm:grid-cols-1 md:grid-cols-5 ">
      <div className="md:col-span-3 max-[640px]:col-span-1 sm:col-span-1">
          <h1 className="text-5xl mb-4 max-[640px]:text-2xl">Health Japanese Fried Rice</h1>
          <RecipeWriter />
      </div>
      <div className="md:col-span-2 max-[640px]:col-span-1 sm:col-span-1">   
  j
      </div>
    </div>
    </div>
  )
}

export default Recipes