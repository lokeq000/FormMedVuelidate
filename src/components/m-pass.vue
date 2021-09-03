<template>
    <div class="m-pass">
      <h2>Удостоверение личности</h2>

          <div class="m-pass__inner">
                     
                 <div class="m-pass__typeDoc"><p>Тип документа*:  <select v-model="formPass.typeDoc" class="selector" name="typeDoc" id="">            
                 <option v-for="item in docValue" :key="item">{{item}}</option>                                    
                 </select></p><p class="errorP" v-if="!$v.formPass.typeDoc.required && dirty" style="margin-left:10px">Поле обязательно для заполнения*</p>
                 </div>
          
                 <div class="m-pass__input">
             <input type="number" class="inputTex" v-model="formPass.series" name="series" placeholder="Серия">
             <input type="number" class="inputTex" v-model="formPass.number" name="number" placeholder="Номер">
             <input type="text" class="inputTex" v-model="formPass.issued" name="issued" placeholder="Кем выдан">
             <input type="date" class="inputTex" v-model="formPass.dateIss" name="dateIss" max="2022-10-01" min="1990-01-01" placeholder="Дата выдачи*">
           
                 </div>
            <p class="errorP" v-if="!$v.formPass.dateIss.required && dirty" style="margin-left:10px">Поле даты выдачи обязательно для заполнения*</p>
                <p class="errorP" v-if="!$v.formPass.issued.alpha && dirty" style="margin-left:10px">Недопустимые значения в поле "Кем выдан"*</p>
          </div>
     
        
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
      },
      },
    
    name:'m-pass',
    data(){
        return {
            formPass:{
                series:'',
                  number:'',
                    issued:'',
                      dateIss:'',
                      typeDoc:''
        },
        docValue:['Паспорт','Свидетельство о рождении','Вод. удостоверение']
        }
        
    },
     validations:{
       formPass:{
          typeDoc:{required},
          dateIss:{required},
          issued:{alpha},
       }
      },
        updated() {
      this.$emit('formPass', this.formPass)
}
}
</script>

<style lang="scss">
    .m-pass{
      h2{
        font-size: 30px;
        text-align: center;
        margin-bottom: 15px;
      }
      &__inner{
        width: 100%;
        display: column;
        input{
       flex: 1 1 20%;
       margin-right: 15px;
        }
      }
      &__input{
        display: flex;
        justify-content: space-between;
      }
      &__typeDoc{
        display: flex;
        margin-bottom: 10px;
       
      }
    }
     @media screen and (max-width:828px){
     .m-pass{
         &__input{
           flex-wrap: wrap;
          input{
            margin-top: 15px;
            flex: 50%;
          }
      }
     }
     }
</style>