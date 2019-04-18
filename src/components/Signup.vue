<template>
    <div id="signup">
        <!--Header of this site-->

        <!--Main form for Sign up-->
        <div class="main">
            <img src="../assets/avatar.jpg" alt="avatar" class="avatar">
            <h2>Sign UP Here</h2>
            <form>
                <!--Username-->
                <p>Username</p>
                <input v-model="data.username" type="text" name="" placeholder="enter your username">
                <!--Password-->
                <p>Password</p>
                <input v-model="data.password" id="password" type="password" name="" placeholder="enter your password">
                <!--Confrim password-->
                <p>Confrim password</p>
                <input v-model="confrimpass" id="confrimpassword" type="password" name="" placeholder="Repeat your password">
                <!--submit-->
                <input v-on:click.prevent="mysubmit" type="submit" value="SignUp">
                <!--links-->
                <router-link to="/miniature/login">already have an account?</router-link>
            </form>
        </div>
        <!--End Of Login -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            data:{
                username:"",
                password:"",
            },
            confrimpass:"",
        }
    },
    methods:{
        mysubmit:function(){
            if(!this.data.username && !this.data.password && !this.confrimpass){
                alert("you should fill the input tags");
            }else if(this.data.password !== this.confrimpass){
                alert("check your confrim password please!!");
            }else{
                this.$http.post("http://localhost:8000/miniature/signup",this.data)
                .then(response=> {
                    if(response.body.status == 200){
                        this.$router.push({path:"/miniature/alluploads", query:{userdata:this.data}})
                    }else{
                        console.log(response.body)
                    }
                })
                //this.$router.push({path:"/miniature/alluploads", query:{userdata:this.data}})
            }
        }
    }
}
</script>

<style scoped>
#signup{
    padding: 0;
    margin-top: 0;
    width: 100%;
    min-height: 100%;
    background-image: url("../assets/background2.jpg");
    background-position: center;
    background-size: cover;
}
.main{
    width: 320px;
    height: 460px;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50% , -50%);
    background-color: #333;
    padding: 70px 30px;
    box-sizing: border-box;
    border-radius: 3px;
    color: #fff;
}
.main .avatar{
    width: 100px;
    height: 100px;
    border: 1px solid rgb(20, 20, 109);
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
}
.main h2{
    padding: 0;
    text-align: center;    
}
.main p{
    padding: 3px 0;
    margin: 0;
    font-weight: bold;
}
.main input[type="text"] ,input[type="password"]{
    width: 100%;
    margin: 0;
    padding: 3px 0;
    margin-bottom: 20px;
    background-color: transparent;
    color: #fff;
    border: none;
    outline: none;
    border-bottom: 1px solid #fff;
    font-size: 16px;
    transition-property: border;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
}
.main input[type="text"]:hover ,input[type="password"]:hover{
    border-color: tomato;
}
.main input[type="submit"]{
    width: 100%;
    height: 40px;
    padding: 5px;
    border: none;
    outline: none;
    background-color: #016cf7;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    border-radius: 20px;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
    margin-bottom: 20px;
}
.main input[type="submit"]:hover{
    background-color: #fff;
    color: #0143f7;
}
.main a{
    color: #aaa;
    text-decoration: none;
    font-size: 15px;
    margin: 4px;
    display: block;
}
.main a:hover{
    color: #fff;
}
</style>

