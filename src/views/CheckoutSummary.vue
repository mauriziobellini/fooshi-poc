<template>
    <div>
        <CheckoutTable :lineItems="lineItems" />
        <StripeCheckout :checkOutSessionId="checkOutSessionId" />
    </div>
</template>

<script>

import StripeCheckout from '../components/StripeCheckout.vue';
import CheckoutTable from '../components/CheckoutTable.vue';

export default {
  name: 'CheckoutSummary',
  components: {
    StripeCheckout,
    CheckoutTable
  },

  data() {
    return {
      checkOutSessionId: '',
      lineItems: {},
    }
  },

  methods: {
    async fetchData() {
      try {
        const lineItems = JSON.parse(localStorage.getItem("checkout"));
        this.lineItems = lineItems;
        const requestOptions = {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"productIds":lineItems.productIds, "quantities":lineItems.quantities, "vendorId":lineItems.vendorId})
        };
        const res = await fetch('http://localhost:3000/create-checkout-session', requestOptions);
        const response = await res.json();
        this.checkOutSessionId = response.session.id;
       
      } 
      catch (error) {
        console.log(error);
      }
    }
  },

  async mounted() {
    await this.fetchData();
  },

  
}
</script>




