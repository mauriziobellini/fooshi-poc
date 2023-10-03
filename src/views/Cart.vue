<template>
 <div>
    <section>
        <div>
          <router-link to="/shop">Back to shop</router-link>
        </div>
        <Baskets :baskets="baskets" />
        <button class="button is-text" @click="cleanCart()">Remove all carts</button>
    </section>
</div>
</template>

<script>

import Baskets from '../components/Baskets.vue';

export default {
  name: 'Cart',
  components: {
    Baskets,
  },

  data() {
    return {
      baskets: [],
    }
  },

  methods: {
    async fetchData() {
      try {
        const cartList = JSON.parse(localStorage.getItem("cartList"));
        const shoppingList = [];
        const quantities = [];
        for (const item of cartList){
            shoppingList.push(item.productId);
            quantities.push(item.quantity);
        }
        const requestOptions = {
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"shoppingList":shoppingList, "quantities":quantities})
        };
        const res = await fetch('http://localhost:3000/cart', requestOptions);
        const response = await res.json();
        this.baskets = response.baskets;
      } 
      catch (error) {
        console.log(error);
      }
    },

    cleanCart(){
      localStorage.removeItem("cartList");
      localStorage.removeItem("cartCount");
      this.baskets = [];
    }
    
  },

  async mounted() {
    await this.fetchData();
  },
  
}
</script>




