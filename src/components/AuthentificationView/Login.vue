<template> 
    <div class="container">
    <form @submit.prevent="login()">
       <h2>Login</h2>
       <!-- email -->
       <label>EMAIL:</label>
       <input type="email" v-model = "email" required />
       <!-- motDePasse -->
       <label>motDePasse:</label>
       <input type="password" v-model="motDePasse" required>
       <div class="errMessage" v-if="motDePasseErr">{{ motDePasseErr }}</div>
       <div class="motDePasseForgot">
        </div>
         <!-- checkbox -->
         <input class= "checkbox" type="checkbox" />
         <label >Forgot motDePasse</label>
       <!-- button -->
       <div class="submit">
         <button>Login</button>
         <a @click="changePage">Create an account</a>
       </div>
    </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['setls','num'],
    data(){
      return{
      email : "",
      motDePasse : "",
      emailErr :null,
      motDePasseErr:null
      }
    },
    methods : {
      login(){
        this.motDePasseErr = this.motDePasse.length >= 8 ? "" 
        : this.motDePasseErr="Invalid motDePasse try Again"
        axios.post("http://127.0.0.1:8000/api/login",{
          "email":this.email,
          "motDePasse":this.motDePasse
        })
        .then((response) =>  {
          if(response.data.user.id){
          console.log(response);
          sessionStorage.setItem('id',response.data.user.id ); 
          this.setls(true)
          this.$router.push({name: 'DemandesView'})
          }else{
            
          }
        })
        .catch((err) => console.log(err))
        this.email=""
        this.motDePasse=""
      },
      changePage(){
       this.$emit('change',false)
      }
    }

}
</script>

<style lang="scss" scoped>
@import '@/sass/modules/authentificationbase.scss';


</style>