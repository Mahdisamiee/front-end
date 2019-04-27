<template>
    <main>
        <!--<div class="codeeditor">
            <h2>Code</h2>
            <textarea v-model="maindata.codecontent" rows="10" cols="40"></textarea><br>
        </div>-->
        <div class="answer">
            <h2>Answer</h2>
            <button class="btn btn-success" @click="clickfunc">see code</button>
            <textarea v-model="maindata.codeanswer" rows="10" cols="40"></textarea><br>
        </div>
    </main>
</template>


<script>
//TODO
    /*
    1-make a method to get data from server with url :miniature/getanswer/username/password/id
    2-using lifecycle hook "created()" to call the method an before that get username and password
    3-should using "this.$router.go(-1)" to make "back" btn
    */
export default {
    props:{
        userdata:{
            type:Object,
            required:true
        }
    },
    data(){
        return{
            maindata:{
                codecontent:"",
                codeanswer:""
            },
            
        }
    },
    methods:{
        fetchData(){
            console.log("here is before send response")
            console.log(this.userdata.username+" hello " + this.userdata.password)
            this.$http.get("http://192.168.1.10:8000/miniature/getanswer/"+this.userdata.username+"/"+this.userdata.password+"/"+this.$route.params.id)
                .then((response)=>{
                    //here we get some data that i don't know them
                    console.log(response)
                    if(response.body.status == 200){
                        //this.maindata.codecontent = this.$route.query.maindata;
                        this.maindata.codeanswer = response.body.answer;
                    }else{
                        alert("Something went Wrong.we are sorry.")
                    }
                });
        },
        clickfunc(){
            console.log("here "+ this.userdata)
            //this.fetchData();
        }
    },
    created(){
        //get {{userdata}}
        //this.userdata = this.$route.query.userdata;
        //call fetchData()
        //this.fetchData();
    }
}
</script>

<style scoped>
    main{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 20px;
        grid-gap: 1em;
    }
    textarea {
        background-image: linear-gradient(#F1F1F1 50%, #F9F9F9 50%);
        background-size: 100% 4rem;
        border: 1px solid #CCC;
        width: 100%;
        max-width: 800px;
        height: 400px;
        line-height: 2rem;
        margin: 0 auto;
        padding: 4px 8px;
        resize: none;
    }
</style>
