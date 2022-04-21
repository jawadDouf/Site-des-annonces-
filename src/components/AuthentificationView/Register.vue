<template>
    
    <form @submit.prevent= register()>
       <h2>Register</h2>
       <!-- nom et prenom -->
       <div class = "motDePasses">
       <div class="smallMenu">
       <label class="motDePasses">nom:</label>
       <input type="text" v-model="nom" required>    
       </div>
       <div class="smallMenu">
       <label>prenom:</label>
       <input type="text" v-model="prenom" required>    
       </div>
       </div>
       <!-- email -->
       <label>EMAIL:</label>
       <input type="email" v-model ="email" required />
       <!-- motDePasse -->
       <div class = "motDePasses">
       <div class="smallMenu">
       <label class="motDePasses">motDePasse:</label>
       <input type="password" v-model="motDePasse" required>    
       </div>
       <div class="smallMenu" id="confirmPass">
       <label>Confirm motDePasse:</label>
       <input type="password"  v-model="motDePasse_confirmation" required>    
       </div>
       </div>
       <!-- button -->
       <div class="submit">
        <button>Register</button>
        <a @click.prevent="changePage">Already have an account</a>
       </div>
    </form> 

</template>

<script>
import axios from 'axios';

export default {
    data(){
      return{
      nom : "",
      prenom : "",
      email : "",
      motDePasse : "",
      motDePasse_confirmation : ""   
      }
    },
    methods : {
      changePage(){
       this.$emit('c',true)
      },
      mounted(){
        console.log(this.authCondition);
    },
    register(){
       axios.post("http://127.0.0.1:8000/api/register",{
          "nom":this.nom,
          "prenom":this.prenom,
          "email":this.email,
          "motDePasse":this.motDePasse,
          "motDePasse_confirmation":this.motDePasse_confirmation
       })
        .then((response) => {
          console.log(response.data);
           this.$emit('c',true)
        })
        .catch((err) => console.log(err));
         this.nom = "",
         this.prenom ="",
         this.email="",
         this.motDePasse="",
         this.motDePasse_confirmation=""
    }

}}
</script>

<style lang="scss" scoped>
@import '@/sass/modules/authentificationbase';
.motDePasses{
  @include flexing($direction:row,$justify-content:space-between);
#confirmPass{
  width: 50%;
  
}
}

</style>