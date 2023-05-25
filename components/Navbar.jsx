import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

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
          {session && (
            <Link href='/orders' className='hover:text-white transition-colors'>
              Orders
            </Link>
          )}
          <Link href='/about' className='hover:text-white transition-colors'>
            About
          </Link>
          <Link href='/contact' className='hover:text-white transition-colors'>
            Contact
          </Link>
        </div>

        <div>
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
    </nav>
  );
};

export default Navbar;
