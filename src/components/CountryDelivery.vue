<template>
    <div class="field is-horizontal">
        <div class="field-label is-normal">
            <label class="label">Where do you want to ship your products?</label>
        </div>
        <div class="select">
            <select>
                <option :key="country.id" v-for="country in countries">{{country.countryName}}</option>
            </select>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CountryDelivery',
    props: {
        countries: Array
    }

}

</script>
