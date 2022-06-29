<template>
  <div class="container">
    <div class="request_container">
      <div class="request_form_container">
         <h1>Оставьте заявку</h1>
        <div class="request_form"  action="">
         
          <select class="form_item" placeholder="Выберете город">
            <option value="moskov">Москва</option>
            <option value="peter">Санкт-Пtтербург</option>
            <option value="kazan">Казань</option>
          </select>
          <input type="name" class="form_item" placeholder="Имя">
          <div class="mail_namber_container">
            <input type="mail" class="form_item mail_input" placeholder="Email">
            <!-- <input type="text" class="form_item tel_input" placeholder="+7 (___)-___-__-__" pattern="[+][7]-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"> -->
            <!-- <input type="text" class="form_item tel_input" data-tel-input placeholder="Телефон" maxlength="18"> -->
            <input class="form_item" v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']" placeholder="+7 (___)-___-__-__">
          </div>

        </div>
      </div>
      <div class="contact_info_container">
        <h3>hi</h3>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.request_container{
  display: flex;
}

.request_form_container{
  width: 50%;
}

.request_form{
  display: flex;
  flex-direction: column;
  padding-right: 126px;
  gap: 30px;
}

.contact_info_container{
  width: 50%;
}

.mail_namber_container{
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.mail_input{
  flex-grow: 1;
}

.tel_input{
  flex-grow: 1;

}

.form_item{
  background: rgba(255, 255, 255, 0.1);
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #FFF;
  box-shadow: none;
  outline:none;
  border: none;
  padding:16px 20px;
}




</style>