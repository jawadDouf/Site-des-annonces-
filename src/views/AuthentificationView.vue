<template>
  <div class="container"> 
    {{ num }}
    <div class="form-container">
      <div v-if="authCondition">   
        <login @change="authCondition = $event" :num="num" :setls="setls"/>
     </div>
    <div v-else>
       <register @c ="authCondition = $event"/>
    </div>
    </div>
    <div class="img-container">
      <img src="../assets/loginPic2.jpg" alt="">
    </div>
    </div>
</template>
 
<script>
    import login from '../components/AuthentificationView/Login.vue'
    import register from '../components/AuthentificationView/Register.vue'

export default {
   props:{
         setls : Function,
         num:  Number
   }, 
    data(){
      return {
       authCondition : true 
      }
      
    },

     components: {
    login,
    register 
    },
    
    methods : {
      
    },
    }
    
</script>

<style lang="scss" scoped>
@import "@/sass/mixins.scss";
@import "@/sass/variables.scss";
.container{
  @include flexing($direction:row,$justify-content:space-between);
.img-container{
   width: 52%;
   margin: 0;
   height: 99.4vh;
   align-self: flex-end;
img{
  width: 100%;
  height: 100%;
}
}
.form-container{
  width: 40%;
}
}
</style>