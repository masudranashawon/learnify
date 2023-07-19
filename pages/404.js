import Button from "@/components/Button";

const NotFoundPage = () => {
  return (
    <section className='not-found wrapper py-10 md:py-20 h-screen min-h-screen w-screen 2xl:h-[calc(100vh-6rem)]'>
      <div className='flex flex-col gap-5 items-center justify-center h-full w-full'>
        <h1 className='text-6xl text-gray-900 font-bold lg:text-8xl'>404</h1>
        <p className='text-xl text-center'>
          {"Oops! The page you are looking for doesn't exist."}
        </p>
        <Button href='/' placeholder='Back to Home' color='danger' />
      </div>
    </section>
  );
};

export default NotFoundPage;
