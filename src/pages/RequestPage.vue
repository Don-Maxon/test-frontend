<template>
  <div class="container">
    <h1>Оставьте заявку</h1>
    <div class="request_container">
      <div class="request_form_container">
        <div class="request_form"  action="">
          <select v-model="sity" class="form_item" plaseholder="ijli">
            <option value="moskov">Москва</option>
            <option value="peter">Санкт-Пtтербург</option>
            <option value="kazan">Казань</option>
          </select>
          <input v-model="name" type="name" class="form_item" placeholder="Имя">
          <div class="mail_namber_container">
            <input v-model="mail" type="mail" class="form_item mail_input" placeholder="Email">
            <input v-model="phone" class="form_item" v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']" placeholder="+7 (___)-___-__-__">
          </div>
          <textarea v-model="comment" class="form_item" placeholder="Оставьте пометку к заказу"></textarea>
          <div class="file_input_wrapper">
            <input  type="file" class="form_item hidden"> 

          </div>
          <div class="custom_checkbox_container">
            <input v-model="personalDataCheked" id="personal_data_checkbox" class="custom_checkbox" type="checkbox" name="first"  />
            <label for="personal_data_checkbox">Даю согласие на обработку своих персональных данных</label>
          </div>
          <button class="btn" > Смотреть сериал</button>
    
        </div>
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
  data(){
    return {
      sity: "",
      name: "",
      mail: "",
      phone: "",
      comment: "",
      file: "",
      personalDataCheked: false,

    }
  }

}
</script>

<style>
.request_container{
  display: flex;
  margin-bottom: 88px;
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

select option{
  color: #000;
  background-color: rgba(255, 255, 255, 0.1);
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

textarea{
  height: 156px;
  resize: none;
}

.custom_checkbox{
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.custom_checkbox_container{
  display: flex;
  align-items: center;
  gap: 20px;
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

input[type='file'] {
  opacity: 0; 
}

.file_input_wrapper{
  background: rgba(255, 255, 255, 0.15);

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


</style>