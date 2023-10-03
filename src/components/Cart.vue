<template>
    <div class="box">
        <div class="columns">
            <div class="column is-one-third">
                <router-link to="/cart"> Cart </router-link>
            </div>
            <div class="column is-two-third">
                {{ cartCount }} items | Value
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Cart',
    props: {
        //shoppingList: Array,
        cartCount: Number
        
    },
    data() {
        return {
            //cartCount: '',
        }
    },
    mounted(){
        //this.cartCount = JSON.parse(localStorage.getItem("shoppingList")).length;
    },
    methods:{

    }

}

</script>