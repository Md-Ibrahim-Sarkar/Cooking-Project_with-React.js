/* eslint-disable react/prop-types */


function Button(props) {
  return (
    <>
      <button
        onClick={() => props.onClick()}
        className={` py-3 bg-black text-white rounded-xl font-semibold mt-3 px-6 ${props.className}`}
      >
        {props.children}
      </button>
    </>
  );
}

export default Button