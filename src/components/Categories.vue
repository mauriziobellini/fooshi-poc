<template>
    <div class="field">
        <label class="label">Category</label>
        <div class="control">
            <div class="select">
                <select>
                    <option :key="category.id" v-for="category in categories">{{category.thirdLevel}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Categories',
    props: {
        categories: Array
    }

}

</script>
