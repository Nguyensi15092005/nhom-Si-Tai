<template>
<<<<<<< HEAD
  <div class="container p-3">
    <div class="d-none d-md-none d-lg-block">
     <HeaderBaoCao/>
    </div>
    <div class="container-fluid">
     <IHeader />
    </div>
    <!-- Hiển thị nút 3 gạch thay cho menu -->
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- class="navbar-toggler" : Nút hamburger để bấm mở menu khi thu gọn -->
        <!-- data-bs-toggle="collapse" :	Kích hoạt hiệu ứng hiện/ẩn menu -->
        <!-- data-bs-target="#mainNavbar"	: Chỉ định phần tử menu cần ẩn/hiện (qua ID) -->
        <!-- navbar-toggler-icon :	Hiển thị biểu tượng hamburger mặc định của Bootstrap -->
        <!-- navbar-collapse + collapse	: Phần menu sẽ được ẩn/hiện khi nhấn nút toggler -->
        <!-- aria-controls="mainNavbar"	: Chỉ ra rằng nút này điều khiển phần tử có id="mainNavbar" -->
        <!-- aria-expanded="false"	: Ban đầu menu chưa mở, khi mở thì Bootstrap sẽ cập nhật giá trị thành "true" -->
        <!-- aria-label="Toggle navigation"	: Mô tả bằng văn bản cho chức năng của nút — sẽ đọc lên khi dùng trình đọc màn hình -->
        <button class="navbar-toggler d-xs-none d-xs-block" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <!-- <span class="navbar-toggler-icon"></span> -->
           <i class="bi bi-list fs-3 text-black"></i>
        </button>
      </div>  
     </nav>
    <!-- ẩn navbar ở điện thoại -->
    <div class="d-lg-block collapse navbar-collapse container-fluid" id="mainNavbar">
      <Menu/>
    </div>
=======
  <div class="container p-0">
    <HeaderBaoCao/>
    <IHeader />
    <Menu/>
>>>>>>> b7c1d3f1c5060756c33418ef834af35d129d21c0
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

