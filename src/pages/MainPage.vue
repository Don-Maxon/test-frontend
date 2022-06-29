<template>
  <div>	
    <div class="img_main_container">
      <img class="test_img" src="../assets/images/main_banner_large.png">
      <div class="main_text_container">
        <div class="container">
          <h1>Сериал Ведьмак</h1>
          <div style="max-width: 424px">
              Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, 
              идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются 
              куда коварнее чудовищ.
          </div>
          <button class="btn" style="margin-top: 40px"> Смотреть сериал</button>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Слайдер</h2>
    </div>
    <div class="container">
      <h2>Кадры со съемок</h2>
    </div>
    
    <div>ascsv</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.img_main_container{
  overflow: hidden;
}

.test_img{
  background-image: url('../assets/images/main_banner_large.png');
  max-height: 440px;
  min-height: 360px;
  float: right;
  position: relative;
}

.main_text_container{
  position: absolute;
}

.main_text_container h1{
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
  margin-top: 104px;
}



</style>