<script>
import PageDescription from '../../components/PageDescription.vue';

export default {
    components: {
        PageDescription
    }
}
</script>

<template>
    <main>
        <h1>About page</h1>
        <p>Lavet for at prøve Vue</p>
        <PageDescription desc="The about page" />
    </main>
</template>

<style lang="scss">
main {
    max-width: 800px;
    margin: auto;

    h1 {
        border-bottom: 2px solid #333;
        padding: 10px 0;
        color: #333;
    }

    p {
        color: #333;
        margin: 10px 0;
    }
}
</style>
