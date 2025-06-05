<template>
  <ul class="row menu">
    <li class="inner-hover text-center">
      <router-link to="/" class="inner">
        Trang chủ
      </router-link>
    </li>

    <li class="inner-hover hover_Introduce text-center">
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
      <a href="#" class="inner">
        Hỗ trợ sinh viên
        <i class="pi pi-angle-down"></i>
      </a>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Support">
        <li>
          <a href="">Liên thông đại học</a>
        </li>
        <li>
          <a href="">Học bổng, khuyến khích học tập</a>
        </li>
        <li>
          <a href="">Thực tập doanh nghiệp</a>
        </li>
        <li>
          <a href="">Việc làm</a>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_News text-center">
      <a href="#" class="inner">
        Tin tức
        <i class="pi pi-angle-down"></i>
      </a>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_News">
        <li>
          <a href="">Thông báo</a>
        </li>
        <li>
          <a href="">Tin công nghệ</a>
        </li>
        <li>
          <a href="">Tin hoạt động</a>
        </li>
        <li>
          <a href="">Hội thảo chuyên đề</a>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_Admissions text-center">
      <a href="#" class="inner">
        Tuyển sinh
        <i class="pi pi-angle-down"></i>
      </a>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Admissions">
        <li>
          <a href="">Thông tin tuyển sinh</a>
        </li>
        <li>
          <a href="">Chương trình đào tạo</a>
        </li>
        <li>
          <a href="">Học phí theo tín chỉ</a>
        </li>
        <li>
          <a href="">Chuẩn đầu ra</a>
        </li>
        <li>
          <a href="">Quy trình đào tạo</a>
        </li>
      </ul>
    </li>

    <li class="inner-hover hover_Link text-center">
      <a href="#" class="inner">
        Liên kết
        <i class="pi pi-angle-down"></i>
      </a>
      <div class="tia"></div>
      <ul class="inner-menu inner-menu_Link">
        <li>
          <a href="">Website HCE</a>
        </li>
        <li>
          <a href="">CT TNHH phần mền Nhân Hòa</a>
        </li>
        <li>
          <a href="">Trung tâm đào tạo DPI</a>
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