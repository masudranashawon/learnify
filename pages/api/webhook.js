import { buffer } from "micro";
import prisma from "@/prisma/prisma";
import "@/preserve.entity.config.json";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
  console.log(`✅ ORDER PLACED SUCCESS: ${session.id}`);

  let user = await prisma.user.findUnique({
    where: { email: session.metadata.email },
  });

  if (!user) {
    user = await prisma.user.create({
      data: {
        email: session.metadata.email,
      },
    });
  }

  await prisma.order.create({
    data: {
      transactionId: session.id,
      amountTotal: session.amount_total / 100,
      name: session.metadata.name,
      mobile: session.metadata.mobile,
      address: session.metadata.address,
      courseTitle: session.metadata.courseTitle,
      courseId: session.metadata.courseId,
      user: {
        connect: { id: user.id },
      },
    },
  });

  return;
};

async function webhook(req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log(`❌ WEBHOOK ERROR`, err.message);
      return res.status(400).send(`WEBHOOK ERROR: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      try {
        await fullfillOrder(session);
      } catch (err) {
        console.log(`❌ DATABASE ERROR`, err.message);
        return res.status(400).send(`DATABASE ERROR: ${err.message}`);
      }

      console.log(`✅ DATA UPLOADED:`, session.id);
      return res.status(200).send(`DATA UPLOADED:${session.id}`);
    }
  }
}

export default webhook;

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
