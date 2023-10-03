<template>    
    <section class="sidebar">
        <div class="box">
             <Origin @filter-origin="filterOrigin($event)" :countries="countries" />
             <Categories :categories="categories" />
        </div>
    </section>
</template>

<script>

import Origin from './Origin';
import Categories from './Categories';

export default {
    name: 'Sidebar',
    props: {
        countries: Array,
        categories: Array,

 
    },
    components: {
        Origin,
        Categories
    },

    methods: {
        filterOrigin(country){
            this.$emit('filter-origin', country);
        }

    }

}

</script>
