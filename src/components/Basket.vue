<template>
    <div class="card basket-card">
        <div class="card-content">
            <div class="media-content">
                <div class="columns">
                    <div class="column is-one-half">
                        <p class="title is-4">Vendor: {{basket.vendorId}}</p>
                        <p class="subtitle is-6">Total: {{basket.totalBasket}} €</p>
                        <router-link to="/checkout-summary">
                            <Button text="Check out for this package" @click="checkout(basket)" />
                        </router-link>
                    </div>
                    <div class="column is-one-half">
                        <p class="subtitle is-6">In this package:</p>
                        <p :key="item" v-for="item in basket.productOverviews">{{item}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>



import Button from "./Button";
import StripeCheckout from './StripeCheckout.vue';

export default {
    name: 'Basket',
    props: {
        basket: Object,
        lineItems: Array,
    },
    components: {
        Button,
        StripeCheckout
   
    },
    methods: {
        checkout(basket){
            localStorage.removeItem("checkout");
            localStorage.setItem("checkout", JSON.stringify(basket));
        }

    }
}

</script>

<style scoped>

.basket-card {
    margin-top: 20px;
}

</style>