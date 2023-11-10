<script>

</script>

<template>
    <div class="headerContainer">
        <h1>Vue App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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
        color: #efefef;
        font-size: 20px;
    }
}

</style>