<template>
  <div class="container p-0">
    <IHeader />
    <Menu/>
    <router-view></router-view>
    <Footer />
  </div> 
</template>

<script>
import '../components/css/style.css';
import IHeader from '../components/view/IHeader.vue';
import Menu from '../components/view/Menu.vue';
import Footer from '../components/view/Footer.vue';
export default {
  components: {
    IHeader,
    Menu,
    Footer
  },
};
</script>