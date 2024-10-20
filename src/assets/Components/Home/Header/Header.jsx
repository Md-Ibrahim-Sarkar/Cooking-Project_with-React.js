
import Social from '../Socials/Social'
import Toggle from '../Toggle/Toggle'

function Header() {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center px-3">
        <div className="mt-[-10px] cursor-pointer">
          <span className="text-3xl font-lobster ">
            Foodieland <span className="text-orange-500 text-5xl">.</span>
          </span>
        </div>
        <ul className="flex max-[1000px]:hidden text-[18px]">
          <li className=" px-4">
            <a href="#">Home</a>
          </li>
          <li className=" px-4">
            <a href="#">Recipes</a>
          </li>
          <li className=" px-4">
            <a href="#">Blog</a>
          </li>
          <li className=" px-4">
            <a href="#">Contact</a>
          </li>
          <li className=" px-4">
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