<template>
    <div class="main page">
        <div class="logo">
            <h1>Miniature</h1>
            <img src="../assets/logo2.png" alt="logo">
            <p>created by <span><router-link to="/about">NanoDesign</router-link></span> groupe. 2019 </p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .main .logo h1{
        color: #034463;
        padding: 40px;
    }
    .main .logo p{
        font-size: 18px;
        color: #777;
        font-weight: 470;
        margin: 140px auto;
    }
    .main .logo p span a{
        color: #034463;
        font-weight: 600;
        transition-property: all;
        transition-duration: 0.4s;
    }
    .main .logo p span a:hover{
        color: #0eac8c;
    }

</style>
