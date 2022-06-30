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

<style scoped src="../styles/SuccessfulRequestPage.css">


</style>