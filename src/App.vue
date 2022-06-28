<template>
<div class="app">
  <header>
    <div class="container">
      <div class="header-container">
        <img src="./assets/images/witcher_logo.png" alt="">
        <div>qwer</div>
      </div>
    </div>
  </header>
  <router-view class="main-content"/>  
  <footer>
    <div class="container">
      <div class="footer-container">
        <div>qwer1</div>
        <div>qwer2</div>

      </div>
    </div>
  </footer>
</div>
  
</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
html, body{
  margin: 0;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #fff
}

header{
  flex: 0 0 auto;
}

.header-container{
    height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.main-content{
  flex: 1 0 auto;
}

footer{
  flex: 0 0 auto;
}

.footer-container{
  background-color: #343338;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.container{
  max-width: 1200px;
  margin: 0 auto;
}



</style>
