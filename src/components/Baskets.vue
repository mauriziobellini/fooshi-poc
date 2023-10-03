<template>
    <section class="is-multiline baskets">
        <div :key="basket.vendorId" v-for="basket in baskets">
            <Basket :basket="basket" />
        </div>
    </section>
</template>

<script>

import Basket from './Basket';

export default {
    name: 'Baskets',
    props: {
        baskets: Array,
    }, 
    components: {
        Basket
    },
    methods:{
        
    }
}

</script>

<style scoped>

.baskets {
    margin-bottom: 20px;
}

</style>
