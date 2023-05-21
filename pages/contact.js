import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { IoMdSend } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className='contact wrapper py-10'>
      <SectionHeader
        subHeading='Contact'
        heading='Get in Touch'
        pera='Have a question or need assistance? Feel free to reach out to us using the contact form below. We are here to help!'
      />

      <div className='flex flex-col lg:flex-row gap-10 mt-10'>
        <div className='w-full lg:w-1/2 flex justify-center p-5'>
          <Image
            src='https://images.pexels.com/photos/7709296/pexels-photo-7709296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Some man are connected on call in call center'
            width={500}
            height={500}
            className='w-full object-cover rounded-lg'
          />
        </div>

        <div className='w-full lg:w-1/2'>
          <form className='contact-form flex flex-col gap-5'>
            <div className='row grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <div className='form-control w-full flex flex-col gap-2'>
                <label htmlFor='name' className='cursor-pointer'>
                  Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Sarah Parker'
                  className='name border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
                />
              </div>

              <div className='form-control flex flex-col gap-2'>
                <label htmlFor='number' className='cursor-pointer'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  name='number'
                  id='number'
                  placeholder='+88 01XXXXXXXXX'
                  className='number border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
                />
              </div>
            </div>

            <div className='form-control flex flex-col gap-2'>
              <label htmlFor='email' className='cursor-pointer '>
                Email Address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='sara@example.com'
                className='email border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
              />
            </div>

            <div className='form-control flex flex-col gap-2'>
              <label htmlFor='message' className='cursor-pointer'>
                Message
              </label>
              <textarea
                placeholder='Type your message here...'
                name='message'
                id='message'
                rows='1'
                cols='50'
                className='message border border-gray-300 focus:border-gray-600 h-32 rounded-xl outline-none py-3 px-4 resize-none duration-300'
              />
            </div>

            <button
              type='submit'
              className='submit px-4 py-4 rounded-xl text-white bg-black hover:bg-gray-700 duration-300 flex items-center justify-center gap-2 overflow-hidden'
            >
              Send Message
              <span>
                <IoMdSend />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
