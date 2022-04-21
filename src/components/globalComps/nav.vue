<template>
    <div id="nav">
    <div id="nav-logo">
      <router-link to="/"><img src="@/assets/EMPLOIS.MA.png" alt="logo" /></router-link>
    </div>
   <div id="nav-links">
      <p><router-link to="/">Home</router-link></p>
      <p><router-link to='/DemandesView.vue'>Demandes</router-link></p>
      <p><router-link to="/">Offres</router-link></p>
    </div>
    <div  id="nav-button">
        <router-link  to="/AuthentificationView.vue"><button @click.prevent="logout()">Log-out</button></router-link>
        <router-link to="/AuthentificationView.vue"><button id="button1">Create Post</button></router-link>
    </div>
    </div>
     <div id="burgerButton">
     <div class="oneLine"></div>
     <div class="oneLine"></div>
     <div class="oneLine"></div>
    </div>
    <div class="container"></div>
</template>

<script>
import { onscroll } from "@/Java Script Modules/scroll";
import {makingNav} from "@/Java Script Modules/burgermenu.js"
    export default {
    props:['setls'],
data(){
    return{
        
    }
},
methods : {
logout(){
  sessionStorage.removeItem('id')
  this.setls(false);
  this.$router.push({name: 'AuthentificationView'})
}
},
mounted(){
//scroll
const button = document.getElementById('button1');
onscroll(button);
//burgerMenu
const el = document.querySelector(".container")
makingNav(el);

}
    }
</script>

<style lang="scss" scoped>
@import "@/sass/mixins.scss";
@import "@/sass/variables.scss";
body{
    margin: 0;
    padding: 0;
}
#nav{
    margin-bottom: 5px;
    background-color:white;
    @include flexing($direction:row,$justify-content:space-between);
    font-family: $secondary-font;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:999;
a{
    text-decoration: none;
    color: $primary-color;
    &:hover{
        text-decoration:underline;

    }
}
#nav-logo{
  flex: 1;
   
}
#nav-links{
    @include flexing($direction:row);
    flex: 2;
    gap: 30px;
}
#nav-button{
  flex: 1;
button{
    float: right;
    @include buttning($horizontal-padding:35px,$border-radius:20px);
    background-color:#7bf9f8;
    color:$primary-color;
    margin-right: 10px;
}
#button1{
 display:none;
}
}
}
.oneLine{
    height: 5px;
    width: 25px;
    background-color: black;
    margin: 5px;
    cursor: pointer;
    display: none;
}
button{
    background: #7bf9f8;
}
@media  (max-width:600px) {
#burgerButton{
    float: right;
.oneLine{
    display: block;
}   
}
#nav{
    display: none;
}
}
</style>