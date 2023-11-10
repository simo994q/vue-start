<script>

</script>

<template>
    <div class="headerContainer">
        <h1>Vue App</h1>
        <ul>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </ul>
    </div>
</template>

<style lang="scss">

.headerContainer {
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;

    h1 {
        color: #efefef;
    }
    ul {
        display: flex;
        list-style: none;
        gap: 10px;
        font-size: 20px;
        
        a {
            color: #efefef;
            text-decoration: none;
        }
    }
}

</style>