<template>
    <div>
        <!-- <table class="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tfoot>
                <tr :key="n" v-for="n in lineItems.productIds.length">
                    <th>{{lineItems.productNames[n]}}</th>
                    <th>{{lineItems.productNames[n]}}</th>
                    <th>{{lineItems.productNames[n]}}</th>
                </tr>
            </tfoot>
        </table> -->
        <div class="content">
            <h3>You are buying from: {{lineItems.vendorId}}</h3>
            <p :key="overview" v-for="overview in lineItems.productOverviews">{{overview}}</p>
            <h3>Total to pay: {{lineItems.totalBasket}}</h3>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CheckoutTable',
    props: {
       lineItems: Object,
    }

}

</script>