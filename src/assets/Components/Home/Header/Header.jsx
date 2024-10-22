
import Social from '../Socials/Social'
import Toggle from '../Toggle/Toggle'

function Header() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center px-3">
        <div className="mt-[-10px] cursor-pointer">
          <span className="text-5xl font-lobster ">
            Foodieland <span className="text-orange-500 text-5xl">.</span>
          </span>
        </div>
        <ul className="flex max-[1039px]:hidden text-[14px]">
          <li className=" px-4 font-semibold text-[18px] hover:text-orange-500">
            <a href="#">Home</a>
          </li>
          <li className=" px-4 font-semibold text-[18px] hover:text-orange-500">
            <a href="#">Recipes</a>
          </li>
          <li className=" px-4 font-semibold text-[18px] hover:text-orange-500">
            <a href="#">Blog</a>
          </li>
          <li className=" px-4 font-semibold text-[18px] hover:text-orange-500">
            <a href="#">Contact</a>
          </li>
          <li className=" px-4 font-semibold text-[18px] hover:text-orange-500">
            <a href="#">About us</a>
          </li>
        </ul>

        <Social />
        <Toggle />

      </div>
    </div>
  );
}

export default Header