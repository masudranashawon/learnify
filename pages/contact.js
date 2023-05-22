import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import emailjs from "@emailjs/browser";
import { IoMdSend } from "react-icons/io";
import { toast } from "react-toastify";

const ContactPage = () => {
  const formRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    /* EMAILJS INTEGRATION */
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_USER_ID
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        },
        () => {
          toast.error("Oops!Message send failed.", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      );

    /* RESET FORM */
    e.target.querySelector(".name").value = "";
    e.target.querySelector(".number").value = "";
    e.target.querySelector(".email").value = "";
    e.target.querySelector(".message").value = "";
  };

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
            className='w-full object-cover rounded-lg'
            src='https://images.pexels.com/photos/7709296/pexels-photo-7709296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='Some man are connected on call in call center'
            width={500}
            height={500}
          />
        </div>

        <div className='w-full lg:w-1/2'>
          <form
            onSubmit={sendEmail}
            ref={formRef}
            className='contact-form flex flex-col gap-5'
          >
            <div className='row grid grid-cols-1 lg:grid-cols-2 gap-5'>
              <div className='form-control w-full flex flex-col gap-2'>
                <label htmlFor='name' className='cursor-pointer'>
                  Name
                </label>
                <input
                  className='name border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Sarah Parker'
                  required
                />
              </div>

              <div className='form-control flex flex-col gap-2'>
                <label htmlFor='number' className='cursor-pointer'>
                  Phone Number
                </label>
                <input
                  className='number border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
                  type='tel'
                  name='number'
                  id='number'
                  placeholder='+88 01XXXXXXXXX'
                  required
                />
              </div>
            </div>

            <div className='form-control flex flex-col gap-2'>
              <label htmlFor='email' className='cursor-pointer '>
                Email Address
              </label>
              <input
                className='email border border-gray-300 focus:border-gray-600 px-4 py-3 rounded-lg outline-none duration-300'
                type='email'
                name='email'
                id='email'
                placeholder='sara@example.com'
                required
              />
            </div>

            <div className='form-control flex flex-col gap-2'>
              <label htmlFor='message' className='cursor-pointer'>
                Message
              </label>
              <textarea
                className='message border border-gray-300 focus:border-gray-600 h-32 rounded-xl outline-none py-3 px-4 resize-none duration-300'
                placeholder='Type your message here...'
                name='message'
                id='message'
                rows='1'
                cols='50'
                required
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
