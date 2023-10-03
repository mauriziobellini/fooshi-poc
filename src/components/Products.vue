<template>
    <section class="columns is-multiline">
        <div :key="product.id" v-for="product in products" class="column is-one-quarter">
            <Product @add-to-cart="addToCart($event)" :product="product" />
        </div>
    </section>
</template>

<script>

import Product from './Product';

export default {
    name: 'Products',
    props: {
        products: Array,
    }, 
    components: {
        Product
    },
    data() {
        return {
            //shoppingList: [],
            cartList: [],
            cartCount: 0,
        }
    }, 
    methods:{
        addToCart(productId){
            // this.shoppingList = JSON.parse(localStorage.getItem("shoppingList"));
            // this.shoppingList.push(productId);
            // localStorage.setItem("shoppingList", JSON.stringify(this.shoppingList));
            // this.$emit('shopping-list', this.shoppingList);
            if (JSON.parse(localStorage.getItem("cartList"))){
                this.cartList = JSON.parse(localStorage.getItem("cartList"));
            }
            if (this.cartList.some(cartList => cartList.productId === productId) == false){
                this.cartList.push({productId: productId, quantity: 1});
            }
            else {
                const objIndex = this.cartList.findIndex((obj => obj.productId == productId));
                this.cartList[objIndex].quantity = this.cartList[objIndex].quantity + 1;
            }
            localStorage.setItem("cartList", JSON.stringify(this.cartList));
            this.$emit('cart-list', this.cartList);

            if (localStorage.getItem("cartCount")){
                this.cartCount = JSON.parse(localStorage.getItem("cartCount")) + 1;
            }
            else {
                this.cartCount = this.cartCount + 1;
            }
            localStorage.setItem("cartCount", JSON.stringify(this.cartCount));
            this.$emit('cart-count', this.cartCount);
        }
    }
}

</script>
