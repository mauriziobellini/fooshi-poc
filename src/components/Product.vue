<template>
    <div class="card">
        <div class="card-content">
            <div class="media-content">
                <p class="title is-4">{{product.name}}</p>
                <p class="subtitle is-6">{{product.price}} €</p>
                <p class="subtitle is-6">Sold by: 
                    <a href="">
                        {{product.Vendor.name}}
                    </a>
                </p>
                <p class="subtitle is-7">Origin {{product.origin}}</p>
                <p class="subtitle is-7"> 
                    <a href="">
                        Category
                    </a>
                </p>
            </div>
            <Button class="product-card" @click="addToCart(product.id)" :text="text" />
        </div>
    </div>
</template>

<script>

import Button from "./Button";

export default {
    name: 'Product',
    props: {
        product: Object,
    },
    components: {
        Button,
    },
    data() {
        return {
            text: 'Add to Cart',
            counter: 0,
        }
    },
    methods: {
        addToCart(productId){
            this.counter = this.counter + 1;
            this.text = 'Added X ' + this.counter;
            this.$emit('add-to-cart', productId);
        }

    }
}

</script>

<style scoped>

.product-card {
    margin-top: 20px;
}

</style>