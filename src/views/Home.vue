<template>
    <div class="home">
      <!--<img alt="Vue logo" src="../assets/logo.png">
       <HelloWorld msg="Welcome to Your Vue.js App"/>-->

        <!--<Home></Home>-->
        <Features></Features>
        <About></About>
        <Video></Video>
        <Clients></Clients>
        <Screenshots></Screenshots>
        <Pricing></Pricing>
        <Download></Download>
        <Contact></Contact>
    </div>
</template>

<script>
// @ is an alias to /src
/*import Home from '@/views/Home.vue'*/
import Features from '@/views/Features.vue'
import About from '@/views/About.vue'
import Video from '@/views/Video.vue'
import Clients from '@/views/Clients.vue'
import Screenshots from '@/views/Screenshots.vue'
import Pricing from '@/views/Pricing.vue'
import Download from '@/views/Download.vue'
import Contact from '@/views/Contact.vue'


// import HelloWorld from '@/components/HelloWorld.vue'




export default {
  name: 'home',
  components: {
  /*  HelloWorld,
      Home,*/
      Features,
      About,
      Video,
      Clients,
      Screenshots,
      Pricing,
      Download,
      Contact
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>

</style>
