<template>

  <div class="row d-flex justify-content-around">
    <router-link to="/tin-tuc/thong-bao/workshop-ui-ux-hanh-trang-ung-tuyen-vao-cong-ty-tech"
      class="col-3 item1 inner_item">
      <p>Workshop Ui/Ux – Hành trang ứng tuyển vào công ty Tech</p>
      <div class="overlay"></div>
    </router-link>
    <router-link to="/tin-tuc/hoi-thao-chuyen-de/workshop-dinh-huong-nghe-nghiep-cho-sinh-vien-khoa-cntt"
      class="col-2 item2 inner_item"></router-link>
    <router-link to="/tin-tuc/hoi-thao-chuyen-de/hoi-thao-co-hoi-nghe-nghiep-va-tang-ten-mien-cho-tan-sinh-vien-k19"
      class="col-3 item3 inner_item">
      <p>Hội thảo cơ hội nghề nghiệp và tặng tên miền cho Tân sinh viên K19</p>
      <div class="overlay"></div>
    </router-link>
  </div>
  <div class="row">
    <div class="col-12 dot-toggle d-flex justify-content-center">
      <div class="dot mx-4"></div>
      <div class="dot mx-4"></div>
      <div class="dot mx-4"></div>
    </div>
  </div>
  <div class="flex-container row">
    <a href="#" class="col-12 item-flex-row" id="item1">
      <img src="/image/noibat4.png" alt="">
      <div class="inner-item-content">
        <h3>OpenAI ra mắt Sora: Ứng dụng tạo video mới siêu ảo, dùng cực dễ</h3>
        <p>Video có thể là vùng đất tiếp theo đối với AI tạo sinh khi...</p>
      </div>
    </a>
    <a href="#" class="col-12 item-flex-row" id="item2">
      
      <div class="inner-item-content">
        <h3>Những công cụ AI miễn phí giúp sáng tạo video</h3>
        <p>Với sự tiến bộ của nền tảng trí tuệ nhân tạo (AI)...</p>
      </div>
      <img src="/image/noibat5.jpeg" alt="">
    </a>

    <a href="#" class="col-12 item-flex-row" id="item3">
      <img src="/image/noibat6.jpg" alt="">
      <div class="inner-item-content">
        <h3>Những phần mềm có AI giúp hoàn thiện hồ sơ xin việc</h3>
        <p>Với sự hỗ trợ của AI, nội dung của hồ sơ ứng tuyển (CV)...</p>
      </div>
    </a>
    <a href="#" class="col-12 item-flex-row" id="item4">
      
      <div class="inner-item-content">
        <h3>Khoa CNTT tham gia Hội thi Xanh tươi HCE mừng Xuân Giáp Thìn năm 2024</h3>
        <p>Căn cứ vào kế hoạch số 114/KH-CĐKT...</p>
      </div>
      <img src="/image/noibat7.jpg" alt="">
    </a>

  </div>

  <div class="button">
    <button class="display">Hiển thị thêm bài viết</button>
  </div>


  <div class="news">
    <div class="news-inner">
      <span class="new-news">
        Tin mới nhất
      </span>
    </div>
    <div class="row d-flex justify-content-around mt-4">
      <router-link to="/tin-tuc/tin-cong-nghe-AI" class="col-3 item-news p-0 ">
        <img src="/image/item-news2.png" alt="">
        <span class="span">Tin công nghệ</span>
        <h4>AI Agent thay đổi cách tương tác trên Internet thế nào</h4>
        <p>AI Agent, hay Tác nhân AI, hiện có thể tự đặt mua đồ trên Internet …</p>
      </router-link>
      <router-link to="/tin-tuc/tin-cong-nghe" class="col-3 item-news p-0">
        <img src="/image/item-news1.png" alt="">
        <span class="span">Tin công nghệ</span>
        <h4>10 xu hướng công nghệ đình đám trong năm 2025</h4>
        <p>Khi công nghệ tiếp tục phát triển với tốc độ chưa từng có, năm 2025 …</p>
      </router-link>
      <router-link to="/tin-tuc/ho-tro-sinh-vien" class="col-3 item-news p-0">
        <img src="/image/item-news3.png" alt="">
        <span class="span">Hỗ trợ sinh viên</span>
        <h4>Liên thông Đại học</h4>
        <p>Thông báo tuyển sinh Liên thông Đại học năm 2025 dành cho các bạn sinh …</p>
      </router-link>
    </div>
  </div>



  <div class="row d-flex justify-content-around main-tow">
    <div class="col-2 inner-left">
      <h4>
        Chuyên mục
      </h4>
      <ul class="p-0">
        <li>
          <router-link to="/gioi-thieu">Giới thiệu</router-link>
        </li>
        <li>
          <router-link to="/bang-vang">Bảng vàng</router-link>
        </li>
        <li>
          <router-link to="">Hỗ trợ sinh viên</router-link>
        </li>
        <li>
          <router-link to="">Hội thảo chuyên đề</router-link>
        </li>
        <li>
          <router-link to="">Thông báo</router-link>
        </li>
        <li>
          <router-link to="/tin-tuc/tin-cong-nghe">Tin công nghệ</router-link>
        </li>
        <li>
          <router-link to="">Việc làm</router-link>
        </li>
        <li>
          <router-link to="">Truyển sinh</router-link>
        </li>
      </ul>
    </div>
    <div class="col-5 inner-center">
      <div class="partner-container">
        <p>Đối tác</p>
        <div class="partner">
          <div class="partner-logo-one"></div>
          <div class="partner-logo-two"></div>
        </div>
      </div>
      <div class="video-container">
        <video class="video" src="../../../public/video/vd1.mp4" controls></video>
      </div>
    </div>

    <div class="col-4 inner-recruitment">
      <h2>Thực tập - tuyển dụng</h2>
      <div class="recruitment">
        <img src="/image/tuyen-dung-1.png" alt="">
        <p>Tuyển dụng Quản trị hệ thống mạng</p>
      </div>
      <div class="recruitment">
        <img src="/image/tuyen-dung-2.png" alt="">
        <p>Thực tập sinh Thiết kế đồ họa</p>
      </div>
      <div class="recruitment">
        <img src="/image/tuyen-dung-3.jpeg" alt="">
        <p>Thực tập sinh Tư vấn triển khai phần mềm</p>
      </div>
    </div>
    <!-- <div class="col-4 inner-right">
      <div class="login-container">
        <div class="login">
          <i class="fas fa-user"></i>
          <form class="frm" id="frm-login" action="#" method="">
            <div class="input-group-one">
              <input type="text" name="username" class="username" placeholder="User ID" required>
            </div>
            <div class="input-group-two">
              <input type="password" name="password" class="password" placeholder="Password" required>
            </div>
            <div class="btn-submit">
              <button type="submit" class="login-btn">Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const frmLogin = document.querySelector('#frm-login');
  if (frmLogin) {
    frmLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.target.elements.username.value !== "admin") {
        alert("Tên đăng nhận Không đúng!");
      }
      else if (e.target.elements.password.value !== "123") {
        alert("Sai mật khẩu!");
      }
      else {
        alert("Đăng nhập thành công");
      }


    })
  }
})

</script>