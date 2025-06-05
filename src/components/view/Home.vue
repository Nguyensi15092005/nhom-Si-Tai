<template>
    <About/>
    <div class="row d-flex align-items-center justify-content-around my-4">
        <hr class="col-5" style="border:2px solid #0169BF ;opacity: 1;">
        <p class="col-2 text-center fs-5 fw-semibold" style="color: #0169BF;">
          Bài viết nổi bật
        </p>
        <hr class="col-5" style="border:2px solid #0169BF ;opacity: 1;">
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