<template>
<div class="app">
  <header>
    <div class="container">
      <div class="header-container">
        <img src="./assets/images/witcher_logo.png" alt="" style="cursor: pointer" @click="this.$router.push({name: 'MainPage'})">
        <button class="outline-btn" @click="this.$router.push({name: 'RequestPage'})">Подключить подписку</button>
      </div>
    </div>
  </header>
  <div class="main_content"><router-view />  </div>
  
  <footer>
    <div class="container">
      <div class="footer-container">
        <img src="./assets/images/witcher_logo.png" alt="" style="cursor: pointer" @click="this.$router.push({name: 'MainPage'})">
        <div class="a_container"> <a href="#" >Политика обработки персональных данных</a></div>
        <div class="icons_bar">
          <img class="icon" src="./assets/icons/Inst.png" alt="">
          <img class="icon" src="./assets/icons/Facebook.png" alt="">
          <img class="icon" src="./assets/icons/VK.png" alt="">
        </div>
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
  font-family: 'Futura PT';
}

@font-face {
  font-family: 'Futura PT';
  src: url(./assets/fonts/FuturaPT-Book.woff2),
  url(./assets/fonts/FuturaPT-Book.woff);
  font-weight: 400;
  font-display: swap;
  font-style: normal;
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

.main_content{
  flex: 1 0 auto;
}

footer{
  flex: 0 0 auto;
  background-color: #343338;
}

.footer-container{
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container{
  max-width: 1200px;
  margin: 0 120px;
}

.outline-btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  cursor: pointer;
  width: 224px;
  height: 48px;
  background: rgba(236, 63, 63, 0.1);
  border: 1px solid rgba(236, 63, 63, 0.8);
  color: #FFFFFF;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

.btn{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  cursor: pointer;
  width: 224px;
  height: 48px;
  background: #EC3F3F;
  border: 1px solid #EC3F3F;
  color: #FFFFFF;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
}

button:hover{
  background-color: #FF1E1E;
}

.icons_bar{
  display: flex;
  justify-content: space-between;
  width: 136px;
}

.icon:hover{
  cursor: pointer;
}

.a_container{
  width: 183px;
  height: 40px;
  text-align: center;
  text-decoration-line: underline;  
}

a{
  color: #FFFFFF;
  opacity: 0.7;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}




</style>
