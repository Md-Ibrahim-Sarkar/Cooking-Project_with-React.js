import Left from "./Left"
import Right from "./Right"

function BannerTwo() {
  return (
    <div className="container mx-auto mt-36 max-[800px]:mt-12">
      <div className="flex flex-col lg:flex-row items-center justify-between xl:pt-8  xl:pb-24">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default BannerTwo