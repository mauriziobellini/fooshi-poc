<template>
 <div>
    <section>
        <Menu :cartCount = "cartCount" />
        <Location :countries="countries" />
    </section>
    <section class="columns">
      <div class="column is-one-quarter">
        <Sidebar @filter-origin="fetchData($event)" :countries="countries" :categories="categories"  />
      </div>
      <div class="column">
        <Products @cart-count="updateCart($event)" :products="products"  />
      </div>
    </section>
</div>
</template>

<script>

import Location from '../components/Location.vue';
import Products from '../components/Products';
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

export default {
  name: 'Shop',
  components: {
    Products,
    Location,
    Sidebar,
    Menu
  },

  data() {
    return {
        products: [],
        countries: [],
        categories: [],
        //shoppingList: [],
        cartCount: JSON.parse(localStorage.getItem("cartCount")),
    }
  },

  methods: {
    updateCart(cartCount){
      this.cartCount = cartCount;
    },
    async fetchData(country) {
      try {
        var res;
        if(country){
          res = await fetch('http://localhost:3000/shop?origin=' + country);
        }
        else {
          res = await fetch('http://localhost:3000/shop');
        }
        const response = await res.json();
        this.products = response.products;
        this.countries = response.countries;
        this.categories = response.categories;
      } 
      catch (error) {
        console.log(error);
      }
    },
    
  },

  async mounted() {
    await this.fetchData();
  },
  
}
</script>




