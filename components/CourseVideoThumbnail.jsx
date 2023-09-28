import { IoLogoYoutube } from "react-icons/io";

const CourseVideoThumbnail = () => {
  return (
    <div
      data-aos='zoom-in'
      data-aos-duration='1000'
      className='course-thumbnail cursor-pointer bg-gray-200 border-2 border-gray-300 xl:h-[10rem] h-[10rem] sm:h-[20rem] md:h-[13rem] flex items-center justify-center rounded-xl'
    >
      <IoLogoYoutube color='red' size={65} />
    </div>
  );
};

export default CourseVideoThumbnail;
