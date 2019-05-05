<template>
    <main class="page">
        <h1>All Uploads</h1>
        
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <!--<th>Code</th>-->
                    <th><router-link class="btn btn-success" :to="{ name: 'codeeditor' , query: { userdata:this.userdata }}">+</router-link></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in maindata" :key="data.id">
                    <td>{{data.id}}</td>
                    <td>{{data.title}}</td>
                    <!--<td>{{data.code}}</td>-->
                    <td><button class="btn btn success" @click="showbtnfunc(data.id)">{{btnvalue}}</button></td>
                </tr>
            </tbody>
        </table>
        
        <div class="codeanswer">
            <div class="code">
                <h2>Code</h2>
            <textarea v-model="answercode" rows="10" cols="20"></textarea><br>
            </div>

            <div class="answer">
                <h2>Answer</h2>
                <textarea v-model="answer" rows="10" cols="20"></textarea><br>
            </div>
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
            answer:"click on 'show' to see the answer of that code",
            answercode :"",
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
                        console.log(response.body.code)
                        this.answercode = response.body.code.code
                        
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
    h1{
        margin: 20px;
    }
    .btn{
        padding: 0 10px;
        font-size: 24px;
    }
    .codeanswer{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }
    .code{
        padding: 50px;
    }
    .answer{
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
        padding: 4px 8px;
        resize: none;
        color: #777;
        border-radius: 3px;
    }

</style>
