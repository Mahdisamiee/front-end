import Vue from 'vue'
import Router from 'vue-router'
import Home from "./components/Home.vue"
import About from "./components/About.vue"
import CodeEditor from "./components/CodeEditore.vue"
import SignIn from "./components/Signin.vue"
import SignUp from "./components/Signup.vue"
import AllUploads from "./components/Alluploads.vue"
import Answer from "./components/Answer.vue"

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/miniature/codeeditor',
      name: 'codeeditor',
      component: CodeEditor
    },
    {
      path: '/miniature/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/miniature/login',
      name: 'login',
      component: SignIn
    },
    {
      path: '/miniature/answer/:id',
      name: 'answer',
      component: Answer
    },
    {
      path: '/miniature/alluploads',
      name: 'alluploads',
      component: AllUploads
    },
    //its required to place redirect path as the last element of the routes.
    {
      path: '*',
      redirect: '/miniature/login'
    },
  ]
})

//            NOTICE               ******* need to use regeix **********
router.beforeEach((to,from,next)=>{
  if(from.path != "/miniature/alluploads" && (to.path == '/miniature/sendcode' || to.path == "'/miniature/answer/'+'/*'")){
    next('/miniature/login');
  }

  next();
});


export default router;