<template>    
    <section class="location">
        <CountryDelivery :countries="countries" />
    </section>
</template>

<script>

import CountryDelivery from './CountryDelivery';

export default {
    name: 'Location',
    props: {
        text: String,
        countries: Array
    },
    components: {
        CountryDelivery
    }

}

</script>

<style scoped>

.location {
    margin-bottom: 20px;
}

</style>