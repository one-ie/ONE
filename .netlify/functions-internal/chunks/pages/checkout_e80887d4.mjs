import Stripe from 'stripe';

const stripe = new Stripe("CDbsUJd6B5XTuSIZ0WXBBGcqpQ41zbC0", {
  apiVersion: "2022-11-15",
  typescript: true
});
const createCheckoutSession = async (product) => {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: "http://localhost:3000/success",
    line_items: [{
      price_data: {
        currency: "usd",
        unit_amount: product.price * 100,
        product_data: {
          name: product.title
        }
      },
      quantity: 1
    }]
  });
  return session;
};

const post = async ({
  request
}) => {
  const body = await request.json();
  try {
    const session = await createCheckoutSession(body.product);
    return new Response(JSON.stringify(session), {
      status: 200
    });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 404
    });
  }
};

export { post };
