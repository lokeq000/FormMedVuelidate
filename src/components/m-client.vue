<template>
    <div class="m-client">
        
         <div class="m-client__inner">
            <h2>Клиент</h2>
           <div class="m-client__name">
             <!-- Поле Фамилия -->
              <input 
              type="text"
                name="surname"
     
                 :class="{'invalid':(!$v.client.surname.required && dirty)||(!$v.client.surname.alpha && dirty)}"
                            class="inputTex"
                  v-model="client.surname" 
                  placeholder="Введите фамилию*">
              <p class="errorP" v-if="!$v.client.surname.required && dirty">Поле обязательно для заполнения*</p>
                <p class="errorP" v-else-if="!$v.client.surname.alpha && dirty">Недопустимые значения в поле ввода</p>
              
                   <!-- Поле Имя -->
             <input
             type="text" 
             name="name" 
             class="inputTex"
              v-model="client.name" 
              placeholder="Введите имя*">
             <p  class="errorP" v-if="!$v.client.name.required && dirty">Поле обязательно для заполнения*</p>
                     <p class="errorP" v-else-if="!$v.client.name.alpha && dirty">Недопустимые значения в поле ввода</p>
                          <!-- Поле Отчество -->
             <input
              type="text"
               name="patronymic"
                class="inputTex" 
                v-model="client.patronymic" 
                placeholder="Введите отчество">
              <p class="errorP" v-if="!$v.client.patronymic.alpha">Недопустимые значения в поле ввода</p>
     
           </div> <!-- m-client__name -->

            <div class="m-client__date">

            <div class="m-client__Cont">  
              <div class="m-client__Cont__number">

              <div><label for="birthday">Дата рождения*: </label><input type="date" name="birthday" class="inputTex" v-model="client.birthday" placeholder="">
               <p  class="errorP" v-if="!$v.client.birthday.required && dirty">Поле обязательно для заполнения*</p>  </div> 
              <div><label for="telephone">Номер телефона*: </label><input placeholder="+7 (XXX) XXX-XXXX" maxlength=12  onkeyup="this.value = this.value.replace(/[A-Za-zА-Яа-яЁё]/, '');" @input="changeNumber" v-model="client.telephone" type="tel" class="inputTex" id="telephone">
               <p  class="errorP" v-if="!$v.client.telephone.minLength && dirty">Поле обязательно для заполнения*</p> 
              </div>

              </div> 
              <div class="m-client__Cont__gender">
 <div class="m-client__genderInp">
              <p>Пол: </p>
                    <p><input 
            value="man"
            type="radio" 
            v-model="client.gender" 
            name="gender">
             мужской</p> 
               <p><input
               value="woman"
                type="radio"
               v-model="client.gender" 
               name="gender">
                женский</p> 
            </div>
      

           <div>
             <label class="selectGroup" for="group">Группа клиентов*: </label><select multiple  size="3" class="selector"  v-model="client.group" name="group">
                <option v-for='item in groups' :key="item">{{`${item}`}}</option>
              
               </select>
                  <p  class="errorP" v-if="!$v.client.group.required && dirty">Поле обязательно для заполнения*</p> 
             </div>  

               <p>Лечащий врач:  <select name="doctor" class="selector" v-model="client.doctor" id="">
                 <option >Иванов</option>
                   <option >Захаров</option>
                     <option >Чернышева</option>
                 </select></p>
 
           </div>
              </div>
               

      
            </div>
               <div id="SMS"><label for="sms">Не отправлять SMS</label>  <input v-model="client.SMS" type="checkbox" name="sms" id=""></div> 
         </div>

    </div>
</template>

<script>
  // import IMask from 'imask'
 import {required, helpers, minLength } from 'vuelidate/lib/validators'
 const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
export default {

    name:'m-client',
    props:{
      dirty:{
        type: Boolean,
        default: false
      },
      isBtnACtive:{
        type: Boolean,
        default: false
      },
      vPropsTest:{
        type: Object,
      }
      },
    
    data(){
      return {
        vuelidate: Object.assign({}, this.vPropsTest),
        client:{
           surname:'',
        name:'',
        patronymic:'',
        birthday:'',
        telephone:'+7',
        gender:'',
        group:[],
        doctor:'',
        SMS:false
        },
        groups:['VIP','Проблемные','ОМС']
      }
    },
      validations:{
      //  testVuelidate:{
      //   testValue: {required}
      // },
      client:{
        surname:{
        required, 
        alpha
        },
        name:{required, alpha},
        birthday:{required},
        telephone:{minLength:minLength(12)},
        group:{required},
        patronymic:{alpha}
      }
  },
  methods:{
    changeNumber(){
      if (this.client.telephone <= 2)
      this.client.telephone = '+7'
      let arr = this.client.telephone.split('')
      if(arr[0] != '+' || arr[1] != '7'){
         this.client.telephone = '+7'
      } else {
         this.client.telephone = arr.join('')
         console.log(this.client.telephone)
      }


    }
  },

    updated() {
    

      this.$emit('formClient', this.client)
},
//     mounted(){
//       var elements = document.getElementsByid('telephone');
//       console.log(elements)
//       console.log(IMask)
//         for (var i = 0; i < elements.length; i++) {
//         new IMask(elements[i], {
//         mask: '+{3}(000)000-00-00',
//   });
// }
    // }
}

</script>

<style lang="scss">
 @import '../assets/styles.scss';
  @import '../assets/null.scss';
  .invalid{
             padding: 5px;
      border:1.5px solid rgb(255, 95, 95);
  }
  .selectGroup{
    vertical-align: center;
    margin-right: 10px;
  }
  .m-client{
    margin-bottom: 40px;
    &__inner{
      display: flex;
      flex-direction: column;
      h2{
        text-align: center;
        font-size: 30px;
      }
    }
    
    &__name{
      max-width: 100%;
      display: flex;
      flex-direction: column;
      input{
        width: 100%;
      margin-top: 10px;
      }
  
    }
        &__date{
        display: flex;
        justify-content: space-between;
        
        margin-top: 10px;
      }
       &__Cont{
         flex: 1;
        display: flex;
        justify-content: space-between;
        &__number{
          flex: 0 50%;
          display: flex;
          justify-content: space-between;
        }
        &__gender{
          margin-left: 20px;
          flex: 0 50%;
            display: flex;
          justify-content: space-between;
        }
      }
      &__telephone{
        margin-top: 10px;
      }
    &__genderInp{
      height: 30px;
      border-bottom: 2px solid $inpColorBord;
      display: flex;
      p{
        margin-right: 15px;
      }
    }
  }
    .inputTex{
            padding: 5px;
      border:1.5px solid $inpColorBord;
            &:focus{
         border:1.5px solid $inpColorBordFocus;
 
      }


    }
.selector{ 
display: block; 
color: #444; 
line-height: 1.3; 
padding: .1em 1.9em .1em .2em; width: 100%; 
max-width: 100%; 
box-sizing: border-box; 
margin: 0; 
border: 1px solid #aaa;
 box-shadow: 0 1px 0 1px rgba(0,0,0,.04); 
border-radius: .5em;
 -moz-appearance: none;
 -webkit-appearance: none;
 appearance: none;
 background-color: #fff; 
background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'); 
background-repeat: no-repeat, repeat;
background-position: right .7em top 50%, 0 0;
background-size: .65em auto, 100%; 
} 
 .select-css::-ms-expand { display: none; } 
 .select-css:hover { border-color: #888; } 
 .select-css:focus { border-color: #aaa; 
 box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
 box-shadow: 0 0 0 3px -moz-mac-focusring; 
color: #222;
 outline: none; 
} 
.errorP{
  margin-top: 10px;
  color: rgb(255, 67, 67);
}
  

    @media screen and (max-width:1250px){
      .m-client__Cont{
        display: flex;
        flex-wrap: wrap;
    
             &__number{
          flex: 0 60%;
          display: flex;
          justify-content: space-between;
        }
        &__gender{
          margin-top: 50px;
          margin-left: 20px;
          flex: 0 60%;
            display: flex;
          justify-content: space-between;
        }
      }
    }
    @media screen and (max-width:828px){
      #SMS{
        margin-top: 15px;
      }
        .m-client__Cont{
           &__number{
          flex: 0 80%;
  
        }
          &__gender{
           div{
            margin-bottom: 20px;
           } 
            flex-direction: column;
          }
        }
      }
     @media screen and (max-width:828px){
       .m-client__Cont{
           &__number{
             flex-direction: column;
        div{
          margin-top: 15px;
        }
  
        }}
     }
</style>