import { useEffect } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import prisma from "@/prisma/prisma";
import SectionHeader from "@/components/SectionHeader";
import Order from "@/components/order";

const OrdersPage = ({ session, customer }) => {
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session && !customer) {
    return null;
  }

  return (
    <div className='wrapper py-10 min-h-screen 2xl:h-[calc(100vh-6rem)]'>
      <SectionHeader
        subHeading={"orders"}
        heading={`You have enrolled ${customer.orders.length} course${
          customer.orders.length > 1 ? "s" : ""
        }`}
        pera={
          "Welcome to your Orders page, your gateway to instant access to your purchased courses. This page serves as a central hub where you can conveniently navigate to your course videos and start your learning journey. "
        }
      />

      <div className='courses w-full flex flex-wrap gap-10 mt-10'>
        {customer.orders.map((course, i) => (
          <Order key={course.id} course={course} i={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  const customer = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    include: {
      orders: true,
    },
  });

  if (!customer) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  const updatedCustomer = {
    ...customer,
    createdAt: customer.createdAt.toString(),
    updatedAt: customer.updatedAt.toString(),

    orders: customer.orders.map((order) => ({
      ...order,
      createdAt: order.createdAt.toString(),
      updatedAt: order.updatedAt.toString(),
    })),
  };

  return {
    props: {
      session,
      customer: updatedCustomer,
    },
  };
};
