import Link from "next/link";

const Navbar = () => {
  return (
    <nav className='navbar bg-black text-gray-400 h-20 flex items-center'>
      <div className='wrapper flex justify-between'>
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
          <Link href='/login' className='hover:text-white transition-colors'>
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
