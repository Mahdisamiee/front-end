<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/miniature/login">Login</router-link> |
      <router-link to="/miniature/signup">Sign Up</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
      <router-view/>
    
  </div>
</template>

<style scoped>
  #nav{
    background-image: linear-gradient(to bottom right ,#0eac8c, #2a7aaf);
    color: #fff;
  }
  #nav a{
    color: #fff;
    text-decoration: none;
  }
</style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #591e70;
}
</style>
