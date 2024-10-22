

function Social() {
  return (
    <div>
      <div>
        <ul className="flex max-[1140px]:hidden px-4 text-2xl">
          <li className="px-4 rounded-full py-2 hover:text-blue-700">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li className="px-4 rounded-full py-2 hover:text-blue-700">
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li className="px-4 rounded-full py-2 hover:text-rose-500">
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Social