<template>

  <div class="row header_admin d-flex justify-content-center">
    <div class="col-3 d-flex align-items-center logo p-0">
      <h2>ADMIN</h2>
    </div>
    <div class="col-9 text-center">
      <img class="kcntt" src="https://cntt.kthcm.edu.vn/wp-content/uploads/2024/02/cntt.png" alt="">
    </div>
  </div>

  <!-- main -->
  <div class="row main">
    <div class="col-3 silder p-0">
      <ul>
        <li>
          <router-link to="/admin/trang-chu">
            Trang chủ
          </router-link>
        </li>
        <li>
          <router-link to="/admin/quan-ly-nhan-su">
            Quản lý nhân sự
          </router-link>
        </li>
        <li>
          <router-link to="">
            Bài viết nổi bật
          </router-link>
        </li>
        <li>
          <router-link to="">
            Bài viết mới
          </router-link>
        </li>
      </ul>
    </div>
    <div class="col-9 inner-view mt-2 ml-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "../css/admin.css";
</script>
<style>
* {
  box-sizing: border-box;
}

#app {
  display: block;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
}
</style>