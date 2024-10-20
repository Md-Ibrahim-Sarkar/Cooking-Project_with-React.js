

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg  ">
        <div className="w-full max-w-screen-xl mx-auto  md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="#"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap font-lobster">
                Foodieland <span className="w-[1000px] text-orange-400">.</span>
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Recipes
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <p className=" mt-3">
            Lorem ipsum dolor sit amet, consectetuipisicing elit,{' '}
          </p>
          <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span className="block text-sm  sm:text-center ">
            © 2024{' '}
            <a href="https://flowbite.com/" className="hover:underline">
              Foodieland.
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer