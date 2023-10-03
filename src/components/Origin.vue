<template>
    <div class="field">
        <label class="label">Product origin</label>
        <div class="control">
            <div class="select">
                <select @change="filterOrigin()" v-model="country">
                    <option :key="country.id" v-for="country in countries">{{country.countryName}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Origin',
    props: {
        countries: Array
    },
    methods: {
        filterOrigin(){
            this.$emit('filter-origin', this.country);
        }
    }

}

</script>
