

function SubscribeInput() {
  return (
    <div className="z-50">
      <form className="max-w-md mx-auto max-[640px]:mb-16">
        <label

          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-10/12 mx-auto p-4 ps-4 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-[#E7F9FD] dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-none"
            placeholder="Your email address..."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-11 bottom-2.5 bg-black hover:bg-[#3bc3e1] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 hover:text-black "
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}

export default SubscribeInput