<template>
    <main>
        <header>
            <h1>Send Code</h1>
            <router-link :to="{ name: 'alluploads' , query: { userdata:this.userdata }}">back to Uploads</router-link>
        </header>
        <form>
            <input  class="title" type="text" name="title" v-model="codetitle" placeholder="Enter Title"><br>
            <textarea v-model="codecontent" rows="10" cols="40"></textarea><br>
            <input class="mbtn" type="submit" value="Send Code" @click.prevent="sendInfo()">
        </form>
    </main>
</template>

<script>
export default {
    data(){
        return{
            codetitle:"",
            codecontent:"",
            //username and password are here
            userdata:{}
        }
    },
    methods:{
        sendInfo:function(){
            if(this.codetitle && this.codecontent){
                alert("do you want to send code?")
                //var data = JSON.stringify({'code':this.codecontent});
                this.$http.post("http://localhost:8000/miniature/sendcode" ,{
                    username : this.userdata.username,
                    password : this.userdata.password,
                    code : this.codecontent,
                    title : this.codetitle
                }).then((response) => {
                    if(response.body.status == 200){
                        alert("your code was sent");
                        this.codetitle = "";
                        this.codecontent = "";
                    }else{
                        console.log(response.body)
                    }
                });
            }else{
                alert("please fill in title and enter your code!")
            }
        }
    },
    created(){
        this.userdata = this.$route.query.userdata;
    }
}
</script>

<style scoped>
    main header{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    main header a{
        text-decoration: none;
        padding: 20px;
    }
    main form .title{
        width: 100%;
        max-width: 200px;
        margin-bottom: 10px;
        padding: 5px;
        text-align: center;
    }
    textarea {
        background-image: linear-gradient(rgb(238, 236, 236) 50%, #92fabe 50%);
        background-size: 100% 4rem;
        border: 1px solid #CCC;
        width: 100%;
        max-width: 800px;
        height: 417px;
        line-height: 2rem;
        margin: 0 auto;
        padding: 4px 8px;
        resize: none;
    }
    main .mbtn{
        margin-top: 20px;
        width: 100px;
        height: 35px;
        background-color: #2a7aaf;
        border: 1px solid #2980b9;
        border-radius: 4px;
        color: #fff;
        font-weight: 700;
        font-size: 16px;
        box-shadow: none;
        transition-property: all;
        transition-duration: .3s;
    }
    main .mbtn:hover{
        background-color: #fff;
        color: #2980b9;
        box-shadow: 3px 3px 5px #333;
    }
    
</style>
