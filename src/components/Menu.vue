<template>
    <section class="columns">
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter"></div>
        <div class="column is-one-quarter">
            <Cart :cartCount = "cartCount" :cartList = "cartList" />
        </div>
    </section>
</template>

<script>

import Cart from './Cart';

export default {
    name: 'Menu',
    components: {
        Cart,
    },
    props: {
        //shoppingList: Array,
        cartList: Object,
        cartCount: Number,
       
    },

}

</script>