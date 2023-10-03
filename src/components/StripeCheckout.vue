<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      :pk="publishableKey"
      :session-id="checkOutSessionId"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <Button @click="submit" text="Continue" />
  </div>
</template>

<script>

import { StripeCheckout } from '@vue-stripe/vue-stripe';
import Button from "./Button";

export default {
  components: {
    StripeCheckout,
    Button,
  },

  props:{
    checkOutSessionId: String,
  },

  data () {
    this.publishableKey = 'pk_test_51KCUj1Apl5w3GwAbF1INiCBPWvwc0YqEEScvcXFFPYTiOuej29M5AAjsjjThBbUWkB4x4FMXMP7yvXBNKBfV1MDJ000hzpwhJD';
    return {
      loading: false,
      //sessionId: 'cs_test_a1Jc3E3xzBEbo7HC3bWltXlZckGWTiutTGovcfaP6bRoqZwntypzWDYDKU', // session id from backend
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/',
    };
  },
  methods: {
    submit () {
      // If remove checkout summary then 1 Create a session in back end
      // ...

      // 2 Go to stripe check out
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>