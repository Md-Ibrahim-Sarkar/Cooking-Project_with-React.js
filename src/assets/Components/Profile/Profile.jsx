
import two from '../../../../public/images/small-profile-img.png'
function Profile() {
  return (
    <div className="flex gap-5  cursor-pointer ">
              <img
                className="max-[350px]:w-[50px] max-[350px]:h-[50px]"
                src={two}
                alt="profile"
              />
              <span>
                <span className="block max-[350px]:text-[13px] max-[350px]:mt-[3px]">
                  John Smith
                </span>
                <span className="block max-[350px]:text-[13px] max-[350px]:mt-[3px]">
                  15 March 2022
                </span>
              </span>
            </div>
  )
}

export default Profile