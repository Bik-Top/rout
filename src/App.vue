<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/features">Features</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/video">Video</router-link> |
      <router-link to="/clients">Clients</router-link> |
      <router-link to="/screenshots">Screenshots</router-link> |
      <router-link to="/pricing">Pricing</router-link> |
      <router-link to="/download">Download</router-link> |
      <router-link to="/contact">Contact</router-link> |
    </div>

   <!-- <transition
            name="custom-classes-transition"
            enter-active-class="animated tada"
            leave-active-class="animated slideOutDown"
    ></transition>-->
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>

  </div>
</template>


<script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'app',
  /*  watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }*/
  }
</script>


<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }



  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
