<template>
    <About/>
    <div class="row d-flex align-items-center justify-content-around my-4">
        <hr class="col-md-5 col-320-4" style="border:2px solid #0169BF ;opacity: 1;">
        <p class="col-md-2 text-center fw-semibold fs-6 fs-md-2 col-320-4" style="color: #0169BF;">
          Bài viết nổi bật
        </p>
        <hr class="col-md-5 col-320-4" style="border:2px solid #0169BF ;opacity: 1;">
    </div>
    <Main />
</template>

<script>
import About from './About.vue';
import Main from './Main.vue';
export default {
  components: {
    About,
    Main,
  }
};
</script>
<style scoped>
/* mobile responsive */
@media only screen and (max-width: 767px){
   /* .custom-fs-sm {
    font-size: 10px !important;
    } */
}
</style>
