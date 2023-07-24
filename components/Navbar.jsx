import { useSession } from "next-auth/react";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Button from "@/components/Button";

const Navbar = () => {
  const { data: session } = useSession();

  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 1023) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("overflow-hidden");
  }, [toggleOpen]);

  return (
    <header
      data-aos='slide-down'
      data-aos-duration='1000'
      data-aos-delay='500'
      data-aos-easing='ease-in-out'
      className='navbar w-full bg-black text-gray-400 h-20 flex items-center z-10 relative'
    >
      <div className='wrapper flex justify-between items-center overflow-hidden'>
        {/* LOGO */}
        <div className='overflow-hidden'>
          <div
            data-aos='slide-right'
            data-aos-duration='1000'
            data-aos-delay='1000'
            data-aos-easing='ease-in-out'
            className='logo'
          >
            <Link href='/' className='text-white font-semibold text-xl'>
              Learnify
            </Link>
          </div>
        </div>

        {/* NAV LINKS */}
        <nav
          data-aos='fade'
          data-aos-duration='1000'
          data-aos-delay='1500'
          data-aos-easing='ease-in-out'
          className='nav-links relative'
          onClick={handleToggle}
        >
          <ul
            className={`${toggleOpen ? "mobile-nav" : "hidden lg:flex gap-5"}`}
          >
            <li>
              <Link href='/' className='hover:text-white transition-colors'>
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/courses'
                className='hover:text-white transition-colors'
              >
                Courses
              </Link>
            </li>
            {session && (
              <li>
                <Link
                  href='/orders'
                  className='hover:text-white transition-colors'
                >
                  Orders
                </Link>
              </li>
            )}
            <li>
              <Link
                href='/about'
                className='hover:text-white transition-colors'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/testimonials'
                className='hover:text-white transition-colors'
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link href='/faqs' className='hover:text-white transition-colors'>
                Faqs
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='hover:text-white transition-colors'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/*SIGN AND USER PROFILE BUTTON */}
        <div className='flex gap-5 items-center overflow-hidden'>
          <div className='overflow-hidden'>
            <div
              data-aos='slide-left'
              data-aos-duration='1000'
              data-aos-delay='1000'
              data-aos-easing='ease-in-out'
            >
              {!session ? (
                <Button
                  href='/users/login'
                  placeholder='Sign in'
                  color='secondary'
                  size='default'
                />
              ) : (
                <Button
                  href='/users/profile'
                  placeholder={session.user.name.split(" ", 1)}
                  color='secondary'
                  size='default'
                />
              )}
            </div>
          </div>

          {/* HAMBURGER ICON*/}
          <span
            data-aos='slide-left'
            data-aos-duration='1000'
            data-aos-delay='1500'
            data-aos-easing='ease-in-out'
            className='z-[999]'
          >
            <FiMenu
              onClick={handleToggle}
              className={`${
                !toggleOpen ? "block" : "hidden"
              } text-2xl lg:hidden`}
            />
            <AiOutlineClose
              onClick={handleToggle}
              className={`${
                toggleOpen ? "block" : "hidden"
              } text-2xl lg:hidden`}
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
