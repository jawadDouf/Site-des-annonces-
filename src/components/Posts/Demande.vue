<template>
    <div id="post">
      <div id="post-image">
          <img src='@/assets/postPic1.jpg' alt="" >
      </div>
      <div id="post-title">
       <h4>Looking for Fullstack fullstack fullstack Programmers </h4>
      </div>
      <div id="post-description">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quod a consectetur labore, laboriosam eveniet repellendus reprehenderit aliquam praesentium ipsum placeat iure voluptatem aliquid ratione? Sunt, dolorem? Totam, tempora ducimus.
         </p>
      </div>
      <div id="post-user-date">
         <h4>Jawad Doufare</h4>
         <p>Lundi,2020/12/32</p>
      </div>
      <div id="post-compétances">

      </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import "@/sass/mixins.scss";
@import "@/sass/variables.scss";
#post{
    @include flexing();
    width: 350px;
    height: 98vh;
    border: 1px solid grey;
    border-radius: 12px;
    margin-top:30px;
    font-family:$third-font;
#post-image{
    width: 90%;
    border-radius:6px;
    border: 1px solid grey;
img{
    width:100%;
    height:100%;
}
}
#post-title{
    width:90%;

}
#post-description{
     width: 90%;
}
#post-user-date{
    width:90%;
}
}
</style>