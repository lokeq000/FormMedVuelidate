<template>
    <div class="m-adress">
        <h2>Адрес</h2>
        <div class="address">
  
             <input type="number" class="inputTex" v-model='formAdress.index' name="index" placeholder="Индекс">
              <input type="text" class="inputTex" v-model='formAdress.country' name="country" placeholder="Страна">
               <input type="text" class="inputTex" v-model='formAdress.region' name="region" placeholder="Область">
              <input type="text" class="inputTex" v-model='formAdress.city' name="city" placeholder="Город*">
                 <input type="text" class="inputTex" v-model='formAdress.street' name="street" placeholder="Улица">
                  <input type="text" class="inputTex" v-model='formAdress.home' name="home" placeholder="Дом">
   
        </div>
          <p class="errorP" v-if="!$v.formAdress.city.required && dirty" style="margin-left:10px">Поле город обязательно для заполнения*</p>
                 <p class="errorP" v-else-if="!$v.formAdress.city.alpha && dirty">Недопустимые значения в поле "Город" </p>
                           <p class="errorP" v-if="!$v.formAdress.region.alpha && dirty">Недопустимые значения в поле "Область"</p>
                              <p class="errorP" v-if="!$v.formAdress.country.alpha && dirty">Недопустимые значения в поле "Страна"</p>
    </div>
</template>

<script>
 import {required, helpers} from 'vuelidate/lib/validators'
  const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {
         props:{
      dirty:{
        type: Boolean,
        default: false
      }
      },
    name:'m-adress',
    data(){
        return{
        formAdress:{
        index:'',
        country:'',
        region:'',
        city:'',
        street:'',
        home:''
    }
        }
    },
     validations:{
        formAdress:{
        index:{},
        country:{alpha},
        region:{alpha},
        city:{required, alpha},
        street:{},
        home:{}
    }
      },
     updated() {
      this.$emit('formAdress', this.formAdress)
}

}
</script>

<style lang="scss">
    .m-adress{
        margin-bottom: 20px;
      h2{
          margin-bottom: 15px;
        font-size: 30px;
        text-align: center;
      }
    }
    .address{
        display: flex;
        justify-content: space-between;
        input{
            flex: 20%;
            margin-right: 15px;
        }
    }
    @media screen and (max-width:1200px){
      .address{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        input{
          flex:45%;
          margin-top: 15px;
        }
      }

    }

</style>