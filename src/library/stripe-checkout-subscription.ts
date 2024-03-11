import Stripe from 'stripe'

interface Product {
  id: number
  title: string
  description: string
  price: number
}

if (!import.meta.env.STRIPE_SECRET_KEY) throw new Error('Missing STRIPE_SECRET_KEY.')

export const stripe = new Stripe(import.meta.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
  typescript: true,
})

export const createCheckoutSession = async (product: Product) => {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    success_url: 'https://one.ie/success',
    line_items: [
      {
        price: 'price_0MC6Qlqs14Mpveu1tnacwks1',

        quantity: 1,
      },
    ],
  })

  return session
}
