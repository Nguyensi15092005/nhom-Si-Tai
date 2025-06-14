<template>
  <ul class="row menu">
    <li class="inner-hover text-center">
      <router-link to="/" class="inner">
        Trang chủ
      </router-link>
    </li>

    <li class="inner-hover hover_Introduce text-center ">
      <router-link to="/gioi-thieu" class="inner">
        Giới thiệu
        <i class="pi pi-angle-down"></i>
      </router-link>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Introduce">
        <li>
          <router-link to="/gioi-thieu/lich-su-hinh-thanh">Lịch sử hình thành</router-link>
        </li>
        <li>
          <router-link to="/gioi-thieu/doi-ngu-giang-vien">Đội ngủ giảng viên</router-link>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_Gold_board text-center">
      <router-link to="/bang-vang" class="inner">
        Bảng vàng
        <i class="pi pi-angle-down"></i>
      </router-link>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Gold_board">
        <li>
          <router-link to="/bang-vang/thanh-tich-gian-vien">Thành tích giảng viên</router-link>
        </li>
        <li>
          <router-link to="/bang-vang/thanh-tich-sinh-vien">Thành tích sinh viên</router-link>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_Support text-center">
      <router-link to="/ho-tro-sinh-vien/thuc-tap-doanh-nghiep" class="inner">
        Hỗ trợ sinh viên
        <i class="pi pi-angle-down"></i>
      </router-link>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Support">
        <li>
          <router-link to="/ho-tro-sinh-vien/thuc-tap-doanh-nghiep">Thực tập doanh nghiệp</router-link>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_News text-center">
      <router-link to="/tin-tuc" class="inner">
        Tin tức
        <i class="pi pi-angle-down"></i>
      </router-link>
      <div class="tia"></div>
    </li>

    <li class="inner-hover hover_Admissions text-center">
      <router-link to="/tuyen-sinh" class="inner">
        Tuyển sinh
        <i class="pi pi-angle-down"></i>
      </router-link>
      <div class="tia"></div>
    </li>

    <li class="inner-hover hover_Link text-center">
      <a href="#" class="inner">
        Liên kết
        <i class="pi pi-angle-down"></i>
      </a>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Link">
        <li>
          <a href="https://www.kthcm.edu.vn/">Website HCE</a>
        </li>
      </ul>
    </li>

    <li class="inner-hover text-center">
      <router-link to="/lien-he" class="inner">
        Liên hệ
      </router-link>
    </li>
  </ul>

</template>


<script>
import { RouterLink } from 'vue-router';
import '../css/menu.css';
 import 'primeicons/primeicons.css';
import router from '@/router';
</script>
<style scoped>
/* mobile responsive */
@media only screen and (max-width: 767px){
  .menu .inner-hover .inner {
    font-size: 10px;
  }
}
 
</style>