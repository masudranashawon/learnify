import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className='navbar bg-black text-gray-400 h-20 flex items-center'>
      <div className='wrapper flex justify-between items-center'>
        <Link href='/' className='text-white font-semibold'>
          Learnify
        </Link>

        <div className='flex gap-5'>
          <Link href='/' className='hover:text-white transition-colors'>
            Home
          </Link>
          <Link href='/courses' className='hover:text-white transition-colors'>
            Courses
          </Link>
          <Link href='/about' className='hover:text-white transition-colors'>
            About
          </Link>
          <Link href='/contact' className='hover:text-white transition-colors'>
            Contact
          </Link>
        </div>

        <div>
          <Button
            href='/login'
            placeholder='Sign in'
            color='secondary'
            size='default'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
