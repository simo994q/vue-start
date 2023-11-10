<script>
export default {
    props: {
        desc: String
    },
    data() {
        return {
            descClassName: 'descClass'
        }
    }
}
</script>
<template>
    <p :class="descClassName">{{ desc }}</p>
</template>
<style>
    .descClass {
        font-style: italic;
    }
</style>