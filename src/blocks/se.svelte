<script>
  import { loadStripe } from '@stripe/stripe-js'
  import { Elements } from 'svelte-stripe'
  import { onMount } from 'svelte'
  import { PUBLIC_STRIPE_KEY } from '$env/static/public'

  let stripe = null

  onMount(async () => {
    stripe = await loadStripe(PUBLIC_STRIPE_KEY)
  })
</script>

<Elements {stripe}>
  <!-- this is where your Stripe components go -->
</Elements>