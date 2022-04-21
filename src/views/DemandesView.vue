<template>
   <div class="cover">
     <div class="cover-paragraphs">
         <p class="cover-paragraphs-title">Welcome To Emplois.ma the first<br> Website for finding and offering<br> jobs opportunities</p>
         <p class="cover-paragraphs-paragraph">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br>Impedit earum expedita dicta, voluptatum in labore<br> dolorum sint blanditiis obcaecati sapiente mollitia<br> reiciendis saepe eius quam deserunt! Voluptates, in!</p>
         <button class="cover-paragraphs-button" id="button">Create Post</button>
        
     </div>
     <div class="cover-image">
        <img src="@/assets/coverPic.jpg" alt="" />
     </div>
   </div>
    <div class="posts-container" >  
    <Demande v-for="demande in demandes"/>
    </div>
    
   
</template>

<script>
import Demande from "@/components/Posts/Demande.vue";
import {onscroll, p} from '../Java Script Modules/scroll.js'
    export default {
    components: { Demande },
    data(){
        return{
          demandes : [
              "Jawad",
              "ali",
              "Jawad",
              "ali",
              "ali",
              "fto"
          ]
        }
    },


}

</script>

<style lang="scss" scoped>
@import "@/sass/mixins.scss";
@import "@/sass/variables.scss";
.cover{
    width: 100%;
    height: auto;
    background-color: white;
    @include flexing($direction:row);
    gap:8%;
    
.cover-paragraphs{
    position: relative;
    bottom: 30px;
.cover-paragraphs-title{
  font-size:2em;
  color:$primary-color;
  margin-bottom:20px;
}
.cover-paragraphs-paragraph{
  font-size:0.8em;
  color :$primary-color;
}
.cover-paragraphs-button{
    @include buttning($horizontal-padding:25px,$vertical-padding:10px);
    margin-top:10px;
    background-color:#7bf9f8;
    color:$primary-color;
}
}
.cover-image{
    position: relative;
    bottom: 10px;
     width:50%;   
img{
    width:100%;
}
}
}
.posts-container{
    @include flexing($direction:row);
    flex-wrap : wrap;
    gap:50px;
}
</style>