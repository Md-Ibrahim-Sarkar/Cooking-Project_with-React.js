import Banner_img from '../../../../../public/images/banner.png'
import Banner_logo from '../../../../../public/images/banner-logo.png';

function Banner_image() {
  return (
    <div>
      <div className='relative'>
        <img
          className="w-full max-h-[640px] lg:h-full object-cover overflow-hidden rounded-r-3xl"
          src={Banner_img}
          alt="banner img"
        />
        <img className='absolute top-8 left-1 lg:left-[-40px] max-[640px]:w-[80px]' src={Banner_logo} alt="banner logo" />
      </div>
    </div>
  );
}

export default Banner_image