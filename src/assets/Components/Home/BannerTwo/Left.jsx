import Button from "../../Button/Button";



function Left() {
  return (
    <div className="">
      <div>
        <h2 className="h2 max-[640px]:text-center">
          Everyone can be a <br /> chef in their own kitchen
        </h2>
        <p className="mt-6 max-w-[504px] max-[400px]:pe-5 max-[640px]:text-center">
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqut enim ad minim.
        </p>
        <div className="w-full flex max-[640px]:justify-center max-[640px]:mb-2">
          <Button className="mt-16 max-[640px]:mt-6">Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Left