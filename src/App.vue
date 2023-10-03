<template>
  <div class="container">    
    <section>
      <Header title="Fooshi Shop Page" />
      <router-view></router-view>
    </section>
  </div>
</template>

<script>

// Refactor sidebar filter to post requests instead of quey params
// Add quantity mgm to cart
// Add shipping costs mgm to cart

import Header from './components/Header';


export default {
  name: 'App',
  components: {
    Header,
  },

  data() {
    return {
      shoppingList: [],
    }
  },

  methods: {
    updateCart(shoppingList){
    console.log(shoppingList);
    this.shoppingList = shoppingList;
    },
    
  },

  async mounted() {
    await this.fetchData();
  },
  
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

</style>


