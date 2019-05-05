<template>
    <main class="page">
        <h1>About Developer Team</h1>
        <div class="developers">
            <p>BackEnd by:<span id="name"> Mohammad Moradi. </span><span id="nickname">"pgr0101"</span></p>
            <p>Android by:<span id="name"> Milad Nafar. </span> <span id="nickname">"milar_7"</span></p>
            <p>FrontEnd by:<span id="name"> Mahdi Samieenia. </span> <span id="nickname">"md.nano"</span></p>
        </div>
    </main>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .developers{
        width: 400px;
        min-height: 300px;
        color: #777777;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: grid;
        align-content: center;
        line-height: 70px;
    }
    .developers #name{
        font-weight: 400;
        font-size: 20px;
        color: #034463;
    }

</style>
