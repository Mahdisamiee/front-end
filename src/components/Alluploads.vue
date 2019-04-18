<template>
    <main>
        <h1>All Uploads</h1>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Code</th>
                    <th><router-link class="btn btn-success" :to="{ name: 'codeeditor' , query: { userdata:this.userdata }}">+</router-link></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in maindata">
                    <td>{{data.id}}</td>
                    <td>{{data.title}}</td>
                    <td>{{data.code}}</td>
                    <td><button class="btn btn success" @click="showbtnfunc(data.id)">{{btnvalue}}</button></td>
                </tr>
            </tbody>
        </table>
        
        <div class="answer">
            <h2>Answer</h2>
            <textarea v-model="answer" rows="10" cols="40"></textarea><br>
        </div>

    </main>
</template>

<script>

export default {
    
    data(){
        return{
            //the information that we get theme from server
            maindata:[],
            status:"",
            msg:"",
            answer:"click on show to see the answer of the code",
            //the information about username and password that we need them by send and get request
            userdata:{},
            myfalse:false,
            //
            btnvalue:"show"
        }
    },
    methods:{
        /*   **notice about fetchData()**
        1-check the url 
        2-check that is response.codes true or not
        3- using status && msg for show error message to users
        */
        fetchData(){
            this.$http.get("http://localhost:8000/miniature/uploads/"+this.userdata.username+"/"+this.userdata.password)
                .then((response)=>{
                    console.log(response.body)
                    this.maindata = response.body.codes
                    this.status = response.body.status
                    this.msg = response.body.msg
                });
        },
        showbtnfunc(id){
            this.$http.get("http://localhost:8000/miniature/getanswer/"+this.userdata.username+"/"+this.userdata.password+"/"+id)
                .then((response)=>{
                    console.log(response.status)
                    if(response.body.status == 200){
                        this.answer = response.body.answer.answer
                    }else{
                        console.log(id)
                        console.log(response.body)
                    }
                });
        }
    },
    
    created(){
        //get {{userdata}}
        this.userdata = this.$route.query.userdata
        //call the fetch methods for recieving data from server
        this.fetchData();
    },
    updata(){
        this.fetchData();
    }
}
</script>

<style scoped>
    .btn{
        padding: 0 10px;
        font-size: 24px;
    }
    .answer{
        margin: 20px;
        padding: 50px;
    }
    textarea {
        background-image: linear-gradient(rgb(125, 247, 196) 50%, rgb(241, 212, 255) 50%);
        background-size: 100% 4rem;
        border: 1px solid #CCC;
        width: 100%;
        max-width: 800px;
        height: 400px;
        line-height: 2rem;
        margin: 0 auto;
        padding: 4px 8px;
        resize: none;
        color: #777;
    }
</style>
