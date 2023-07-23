# Learnify - An Online Learning Platform

Welcome to Learnify, your gateway to boundless learning opportunities! Our platform leverages a powerful combination of cutting-edge technologies to provide an exceptional learning experience. With Next Auth, learners can securely access personalized courses, ensuring a safe and tailored educational journey. Seamlessly communicate with us using Email.js, making it effortless to reach out and send messages. Prisma empowers our platform with robust database management, guaranteeing smooth and efficient data handling.

Simplify course enrollment with Stripe, offering hassle-free and secure payment processing. Elevate the user interface and experience through captivating animations and visually stunning design powered by AOS and Tailwind CSS. Engage with lightning-fast interactions and dynamic content thanks to Axios and React. Stay updated in real-time with React Toastify's notifications. With microservices and Class Variance Authority, Learnify ensures an optimized and efficient learning environment. Join us today, and unlock the full potential of your learning journey!

## Features

Discover Our Platform's Power-Packed Functionality:

- **User Authorization**: Next Auth ensures secure user authentication, granting learners exclusive access to view only their enrolled courses.

- **Seamless Communication**: Email.js integration enables users to effortlessly send messages and connect with the Learnify team.

- **Efficient Data Management**: Prisma facilitates robust database management, ensuring smooth handling of course and user data.

- **Hassle-free Payments**: Stripe integration enables secure and convenient payment processing for course enrollment.

- **Captivating Animations**: AOS enhances the user interface with captivating animations, creating an engaging learning environment.

- **Lightning-fast Interactions**: Axios and React enable lightning-fast interactions, delivering dynamic content and a seamless user experience.

- **Real-time Notifications**: React Toastify provides real-time notifications, keeping users informed about updates and important events.

- **Optimized Learning Environment**: Microservices and Class Variance Authority ensure an optimized and efficient learning platform.

## Tools

Proxima is built using the MERN stack, featuring the following powerful tools:

- [Next.js](https://nextjs.org/): A React framework for building efficient and SEO-friendly web applications.
- [React](https://reactjs.org/): A JavaScript library for building user interfaces and interactive components.
- [MongoDB](https://www.mongodb.com/): A flexible and scalable NoSQL database for managing data efficiently.
- [Prisma](https://www.prisma.io/): A powerful ORM (Object-Relational Mapping) for database management and seamless data handling.
- [Stripe](https://stripe.com/): A secure and reliable platform for processing payments and managing subscriptions.
- [Micro](https://github.com/vercel/micro): A minimalistic microservice framework for Node.js.
- [Google Cloud Platform (GCP)](https://cloud.google.com/): A robust cloud infrastructure for secure, scalable, and reliable services.
- [Axios](https://axios-http.com/): A popular HTTP client for making asynchronous API requests from the browser.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for creating flexible and responsive designs.
- [Email.js](https://www.emailjs.com/): Simplify sending emails directly from your website without the need for a backend.
- [AOS](https://michalsnik.github.io/aos/): Animate On Scroll library for captivating and dynamic page animations.
- [Class Variance Authority](https://cva.style/docs): A tool for optimizing and managing microservices efficiently.
- [clsx](https://github.com/lukeed/clsx): A tiny utility for constructing className strings conditionally.
- [React Toastify](https://fkhadra.github.io/react-toastify/): A library for displaying toast notifications in React applications.
- [Stripe.js](https://stripe.com/docs/js): Stripe's JavaScript library for securely integrating with Stripe services.

## Requirements

> - **Node.js**
> - **npm**
> - **MongoDB**
> - **Stripe** (for payment processing)

## Installation

To install and configuration Learnify, Follow the steps below:

1. Clone the `repository` using:

```
 https://github.com/masudranashawon/learnify.git
```

2. Navigate to the `project` directory using:

```
cd learnify
```

3. Install the required `dependencies` by running:

```
npm install
```

**Or**

```
npm i
```

<br>
4. Create a `.env` file in the root directory and add the following variables:

- `HOST`=for example `http://localhost:3000`
- `DATABASE_URL`=the MongoDB connection string
- `GOOGLE_CLIENT_ID`=a client id string for Google authentication
- `GOOGLE_CLIENT_SECRET`=a secret string for for Google authentication
- `NEXTAUTH_URL`=for example `http://localhost:3000`
- `JWT_SECRET`=a secret string for JWT authentication
- `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`=a public key string for Stripe payment integration
- `STRIPE_SECRET_KEY`=a secret key string for Stripe payment integration
- `STRIPE_SIGNING_SECRET`=the signing string getting after listen Stripe
- `NEXT_PUBLIC_API_URL`=for fetching data in client example `http://localhost:3000`
- `NEXT_PUBLIC_SERVICE_ID`=a public service id string for Email.js integration
- `NEXT_PUBLIC_USER_ID`=a public user id string for Email.js integration
- `NEXT_PUBLIC_TEMPLATE_ID`=a public template id string for Email.js integration

> ### `Note:` Make sure to set up the necessary environment variables in the `.env` file for Learnify to work properly.

## Usage

To run and explore Learnify, Follow a few simple steps below:

1. Start the `development` server by running:

```
npm run dev
```

2. Listen the `stripe` by running:

```
stripe listen --forward-to localhost:3000/api/webhook
```

> #### Note: After listening you will get a secret key for stripe payment processing. Just go to the `.env` file and store it as `STRIPE_SIGNING_SECRET`

These all steps will help you set up Learnify locally and configure the required environment variables for seamless functionality. Happy learning!

## Links

- [Live Demo](https://learnify-pro.vercel.app)

## Contributing

Contributions to Learnify are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## Thank you for checking out Learnify!
