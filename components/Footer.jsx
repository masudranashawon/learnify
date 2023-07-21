import Link from "next/link";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className='bg-black pt-20 text-gray-400'>
      <div className='wrapper mx-auto'>
        <div className='grid border-b border-gray-500 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-5 items-start w-full pb-10'>
          <div className='company-intro col-span-1 lg:col-span-2'>
            {/* COMPANY INTRO */}
            <div className='logo mb-4'>
              <Link href='/' className='text-white font-semibold text-xl'>
                Learnify
              </Link>
            </div>
            <p className='text-gray-400'>
              Learnify is an innovative learning platform that offers a diverse
              selection of courses to help you enhance your skills and
              knowledge. With a wide range of options to explore and easy
              purchasing capabilities, Learnify empowers you to take control of
              your learning journey and achieve your goals.
            </p>
            {/* SOCIALS */}
            <div className='flex mt-5 gap-5'>
              <Link href='https://www.facebook.com' target='_blank'>
                <FiFacebook
                  size={24}
                  className='hover:text-white duration-300'
                />
              </Link>
              <Link href='https://www.twitter.com' target='_blank'>
                <FiTwitter
                  size={24}
                  className='hover:text-white duration-300'
                />
              </Link>
              <Link href='https://www.instagram.com' target='_blank'>
                <FiInstagram
                  size={24}
                  className='hover:text-white duration-300'
                />
              </Link>
            </div>
          </div>

          {/* PAGES */}
          <div className='pages col-span-1 lg:col-span-1'>
            <h4 className='text-xl font-bold mb-4 text-white'>Quick Links</h4>
            <ul className='text-md font-semibold flex flex-col gap-2'>
              <li>
                <Link
                  href='/'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/courses'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href='/testimonials'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href='/faqs'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href='/contact'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COURSES */}
          <div className='col-span-1 lg:col-span-1'>
            <h4 className='text-xl font-bold mb-4 text-white'>
              Popular Courses
            </h4>
            <ul className='text-md font-semibold flex flex-col gap-2'>
              <li>
                <Link
                  href='/courses/645d337dd9fa203ea8b4aff0'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/645d2ee8d9fa203ea8b4afd6'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Data Entry
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/645d35aed9fa203ea8b4affc'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/6470ea5a696e8e5b452be950'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Blockchain
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/6470ed13696e8e5b452be958'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Cyber Security
                </Link>
              </li>
              <li>
                <Link
                  href='/courses/645d31c8d9fa203ea8b4afe3'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div className='col-span-1 lg:col-span-1'>
            <h4 className='text-xl font-bold mb-4 text-white'>Legal</h4>
            <ul className='text-md font-semibold flex flex-col gap-2'>
              <li>
                <Link
                  href='/'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/'
                  className='hover:text-white duration-300 hover:underline underline-offset-2'
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* COPYRIGHT */}
        <div className='text-md py-10 text-center text-gray-400'>
          <p>
            &copy; {new Date().getFullYear()}, Learnify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
