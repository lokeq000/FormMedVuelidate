<template >
    <div class="popup">
        <div class="popup__inner">
            <div class="popup__desc">
                Клиент создан
            </div>
               <button class="popup__btn" @click="$emit('click')">Ok</button>
        </div>
     
    </div>
</template>
<script>
export default {
    name:'popup'
}
</script>
<style lang="scss">
    .popup{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
    &__inner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
        
        width: 300px;
        height: 200px;
        background-color: rgb(233, 233, 233);
        
    }
    &__btn{
        position: absolute;
        bottom: 20px;
        background-color: seagreen;
        width: 50px;
        height: 25px;
    }
    
    }
</style>