<template>
    <div class="m-client-wrapper">
        <div class="m-client-wrapper__test">
            
        </div>
         <m-client
        :dirty="$v.$dirty"
         :isBtnACtive="isBtnActiveWrap"
         @formClient="addToClient"
         />
        <m-adress
        :dirty="$v.$dirty"
        @formAdress='addToAdress'
         />
        <m-pass
        :dirty="$v.$dirty"
        @formPass='addToPass'
        />
        <div class="btn"><button class="btn__cl" @click="addToAllInfoClient">Создать клиента</button></div>
        <popup @click="hidePopup" v-if="showPopup"/>
    </div>
</template>

<script>
 import {required, helpers, minLength } from 'vuelidate/lib/validators'
 const alpha = helpers.regex('alpha', /^[a-zA-Zа-яёА-ЯЁ]*$/)
import mAdress from './m-adress.vue'
import MClient from './m-client.vue'
import MPass from './m-pass.vue'
import Popup from './popup.vue'
export default {
  components: { mAdress, MClient, MPass, Popup },
    name:'m-client-wrapper',
    data(){
        return{
            showPopup:false,
            testInput:'',
            isBtnActiveWrap: false,
            formClient:{},
            formAdress:{},
            formPass:{},
            allInfoClient: {},
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
         },
       formClient: {
       surname:{
        required, 
        alpha
        },
        name:{required, alpha},
        birthday:{required},
        telephone:{minLength:minLength(12)},
        group:{required},
        patronymic:{alpha}
       },
       formPass:{
              typeDoc:{required},
          dateIss:{required},
          issued:{alpha},
       }
  },
    methods:{
        hidePopup(){
            this.showPopup = !this.showPopup
        },
        testFunk(){
             if (this.$v.$invalid){
                this.$v.$touch()
                return
            } console.log('Нажалось')
        },
        addToClient(obj){
            this.formClient = Object.assign({}, obj)
        },
        addToAdress(obj){
            this.formAdress = Object.assign({}, obj)
        },
        addToPass(obj){
            this.formPass = Object.assign({}, obj)
        },
        addToAllInfoClient(){
            if (this.$v.$invalid){
                this.$v.$touch()
                return
            }
            this.isBtnActiveWrap = !this.isBtnActiveWrap
            console.log(this.isBtnActiveWrap)
                this.allInfoClient = Object.assign({},this.formPass, this.formAdress, this.formClient)  
         this.showPopup  = ! this.showPopup       
         
        }
    },
    
}

</script>

<style lang="scss">
    .m-client-wrapper{
       border: 1px solid black;
       padding: 30px;
    }
    .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        &__cl{
            background-color: rgb(184, 184, 184);
            border-radius: 3px;
            font-size: 12px;
            width: 130px;
            height: 50px;
            padding: 5px;
            transition: .2s linear;
                &:hover{
            background-color: seagreen;
        }
        }
    
    }
</style>