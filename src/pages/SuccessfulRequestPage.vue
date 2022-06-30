<template>
  <div class="container">
    <div class="request_container">
      <div class="request_answer_container">
        <h1>Заявка отправлена!</h1>
        <h4>Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее время, чтобы уточнить все детали заказа.</h4>
        <button class="btn" @click="this.$router.push({name: 'MainPage'})"> Вернуться на главную </button>
      </div>
      <div class="contact_info_container">
        <h4>Наша горячая линия</h4>
        <h2>8 800 38 23 112</h2>

        <h4>Главный офис</h4>
        <h2>г. Москва, Садовническая ул., 80</h2>

        <h4>Часы работы</h4>
        <h2>Пн-Пт с 10:00 до 22:00</h2>

      </div>

    </div>
    
  </div>

</template>

<script>

export default {

}
</script>

<style scoped>
.request_container{
  display: flex;
  margin-bottom: 88px;
}

.request_answer_container{
  width: 50%;
  padding-right: 126px;
}

.request_answer_container h4{
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
}

.request_answer_container h1{
 font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-size: 56px;
  line-height: 56px;
}

.request_form{
  display: flex;
  flex-direction: column;
  padding-right: 126px;
}


.contact_info_container h4{
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  opacity: 0.6;
  margin: 0;
}

.contact_info_container h2{
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #FFFFFF;
  margin: 8px 0 32px 0;
}


.contact_info_container{
  width: 50%;
}


</style>