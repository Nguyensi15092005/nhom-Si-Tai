<template>
  <div class="container p-0">
    <HeaderBaoCao/>
    <IHeader />
    <Menu/>
    <router-view></router-view>
    <Footer />
  </div> 
</template>

<script>
import '../components/css/style.css';
import HeaderBaoCao from '@/components/view/HeaderBaoCao.vue';
import IHeader from '../components/view/IHeader.vue';
import Menu from '../components/view/Menu.vue';
import Footer from '../components/view/Footer.vue';
export default {
  components: {
    HeaderBaoCao,
    IHeader,
    Menu,
    Footer
  },
};
</script>