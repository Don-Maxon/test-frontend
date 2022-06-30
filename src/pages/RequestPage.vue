<template>
  <div class="container">
    <h1>Оставьте заявку</h1>
    <div class="request_container">
      <div class="request_form_container">
        <div class="request_form"  action="">
          <select v-model="sity" class="form_item" plaseholder="ijli" :class="{'invalid': v$.sity.$error}">
            <option value="moskov">Москва</option>
            <option value="peter">Санкт-Петербург</option>
            <option value="kazan">Казань</option>
          </select>
          <div class="invalid_label_wrapper">
            <label for="" class="invalid_label" v-show="v$.sity.$error">Поле не заполненно</label>
          </div>
          <input v-model="name" type="name" class="form_item" placeholder="Имя" :class="{'invalid': v$.name.$error}">
          <div class="invalid_label_wrapper">
            <label for="" class="invalid_label" v-show="v$.name.$error">Поле не заполненно</label>
          </div>
          <div class="mail_namber_container">
              <input v-model="mail" style="width: 50%" type="mail" class="form_item " placeholder="Email" :class="{'invalid': v$.mail.$error}">
              <input v-model="phone" style="width: 50%" type="tel" class="form_item " v-maska="['+7 (###) ##-##-##', '+7 (###) ###-##-##']" placeholder="+7 (___)-___-__-__" :class="{'invalid': v$.phone.$error}">
          </div>

          <div class="mail_namber_container invalid_label_wrapper">
            <label for="" class="invalid_label" style="width: 50%" v-show="v$.phone.$error">Поле не заполненно</label>
            <label for="" class="invalid_label" style="width: 50%" v-show="v$.mail.$error">Поле не заполненно</label>
          </div>
          <textarea v-model="comment" class="form_item" placeholder="Оставьте пометку к заказу" :class="{'invalid': v$.comment.$error}"></textarea>
          <div class="invalid_label_wrapper">
            <label for="" class="invalid_label" v-show="v$.comment.$error">Поле не заполненно</label>
          </div>
          <div class="file_input_wrapper">
            <input  type="file" class="form_item " id="file" ref="myFiles" @change="previewFiles" :class="{'invalid': v$.file.$error}"> 
          </div>
          <div class="invalid_label_wrapper">
            <label for="" class="invalid_label" v-show="v$.file.$error">Поле не заполненно</label>
          </div>
          <div class="custom_checkbox_container ">
            <input v-model="personalDataCheked"  id="personal_data_checkbox" class="custom_checkbox" :class="{'invalid': v$.personalDataCheked.$error}" type="checkbox" name="first"  />
            <label for="personal_data_checkbox">Даю согласие на обработку своих персональных данных</label>
          </div>
          <div class="invalid_label_wrapper">
            <label for="" class="invalid_label" v-show="v$.personalDataCheked.$error">Поле не заполненно</label>
          </div>
          <button class="btn" @click="submitForm" v-if="!dispatchIsActive"> Отправить заявку </button>
          <button class="disabled_btn" @click="submitForm" disabled v-else> Обработка данных <div> <div class="spinner"></div></div> </button>  
          
    
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
import useVuelidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators'
export default {
  setup(){
       return { v$: useVuelidate() }
  },
  data(){
    return {
      sity: "",
      name: "",
      mail: "",
      phone: "",
      comment: "",
      file: null,
      personalDataCheked: false,
      dispatchIsActive: false
    }
  },
  validations(){
    return {
      sity: {required},
      name: {required },
      mail: {required, email},
      phone: {required, minLength: minLength(18)},
      comment: {required},
      personalDataCheked: {checked: value => value === true}, 
      file: {required}
      
    }
  },
  methods:{
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.dispatchIsActive = true;
        setTimeout(()=>this.$router.push({name: 'SuccessfulRequest'}), 1500);
      }
    },
    previewFiles() {
      this.file = this.$refs.myFiles.files[0];
      
  }
  }
}
</script>

<style scoped src="../styles/RequestPage.css">

</style>