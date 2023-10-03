<template>
    <section class="section">
        <header>
            <h1 class="title has-text-centered">{{title}}</h1>
        </header>
    </section>
</template>

<script>

export default {
    name: 'Header',
    props: {
        title: String,
    },

}

</script>

