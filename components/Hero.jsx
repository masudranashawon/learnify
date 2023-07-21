import Image from "next/image";
import Button from "./Button";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className='hero wrapper py-10 md:py-20 sm:h-auto lg:min-h-screen lg:h-screen 2xl:h-[calc(100vh-6rem)]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='hero-left row-start-2 lg:row-start-auto overflow-hidden'>
          <div
            data-aos='fade-right'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <span className='font-semibold text-gray-500 tracking-wider'>
              Join Now
            </span>
            <h1 className='text-4xl text-gray-900 font-bold lg:text-5xl mt-1'>
              Break boundaries with online learning access knowledge anywhere
              easily.
            </h1>
            <p className='text-lg text-gray-700 mt-5 mb-10'>
              Unlock your potential with our online courses. Learn, grow, and
              explore from anywhere. Discover endless possibilities for personal
              and professional development. Join us now!
            </p>

            <Button
              color={"primary"}
              placeholder={"Get Started"}
              href='/courses'
              size={"default"}
            />

            <div className='flex flex-row flex-wrap gap-3 mt-5'>
              <div className='flex flex-row gap-1 items-center'>
                <BsFillCheckCircleFill />
                <h5 className='font-semibold'>Experienced mentor</h5>
              </div>
              <div className='flex flex-row gap-1 items-center'>
                <BsFillCheckCircleFill />
                <h5 className='font-semibold'>Quality videos</h5>
              </div>
              <div className='flex flex-row gap-1 items-center'>
                <BsFillCheckCircleFill />
                <h5 className='font-semibold'>Affordable prices</h5>
              </div>
            </div>
          </div>
        </div>

        <div className='hero-right row-start-1 lg:row-start-auto overflow-hidden'>
          <div
            data-aos='fade-left'
            data-aos-duration='1000'
            data-aos-easing='ease-in-out'
            data-aos-mirror='true'
            data-aos-once='false'
          >
            <Image
              src='https://images.pexels.com/photos/6958520/pexels-photo-6958520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt='Man in Hoodie Sweater Using a Laptop'
              width={1280}
              height={720}
              className='w-full h-full object-cover  border-t-[1rem] border-l-[0.7rem] rounded-t-[35%] rounded-b-[50%] border-t-gray-500 border-l-gray-500'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
