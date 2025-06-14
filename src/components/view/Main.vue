<template>

  <div class="row d-flex justify-content-around important-news-main">
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
  <div class="flex-container row ">
    <a href="#" class="col-12 item-flex-row" id="item1">
      <img src="/image/noibat4.png" alt="">
      <div class="inner-item-content">
        <h3>OpenAI ra mắt Sora: Ứng dụng tạo video mới siêu ảo, dùng cực dễ</h3>
        <p>Video có thể là vùng đất tiếp theo đối với AI tạo sinh khi...</p>
      </div>
    </a>
    <a href="#" class="col-12 item-flex-row" id="item2">
      
      <div class="inner-item-content ">
        <h3>Những công cụ AI miễn phí giúp sáng tạo video</h3>
        <p>Với sự tiến bộ của nền tảng trí tuệ nhân tạo (AI)...</p>
      </div>
      <img src="/image/noibat5.jpeg" alt="">
    </a>

    <a href="#" class="col-12 item-flex-row" id="item3">
      <img src="/image/noibat6.jpg" alt="">
      <div class="inner-item-content">
        <!-- d-none d-603-none d-md-block -->
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
    <div class="col-lg-2 inner-left col-md-12 col-12 ">
      <h4 class="d-none d-md-none d-block d-lg-block" >
        Chuyên mục
      </h4>
      <!-- menu hien thi o laptop -->
      <ul class="p-0 d-lg-block d-md-none d-320-none d-none">
        <li>
          <router-link to="/gioi-thieu">Giới thiệu</router-link>
        </li>
        <li>
          <router-link to="/bang-vang">Bảng vàng</router-link>
        </li>
        <li>
          <router-link to="/ho-tro-sinh-vien/thuc-tap-doanh-nghiep">Hỗ trợ sinh viên</router-link>
        </li>
        <li>
          <router-link to="">Hội thảo chuyên đề</router-link>
        </li>
        <li>
          <router-link to="/tin-tuc">Tin tức</router-link>
        </li>
        <li>
          <router-link to="/tin-tuc/tin-cong-nghe">Tin công nghệ</router-link>
        </li>
        <li>
          <router-link to="">Việc làm</router-link>
        </li>
        <li>
          <router-link to="/tuyen-sinh">Truyển sinh</router-link>
        </li>
      </ul>
      <!-- Nut toggler chuyen muc o tablet, mobile -->
      <button class=" d-block d-md-block d-320-block d-lg-none collapse navbar-collapse container-fluid" 
              id="chuyenmuc-btn"
              type="button"
              data-bs-toggle="collapse" data-bs-target="#chuyenmucNavbar" aria-controls="chuyenmucNavbar" aria-expanded="false" aria-label="Toggle navigation"
              >
        <p class="text-button-chuyenmuc">Chuyên mục</p>
        <p class="bonus-text">Bấm vào đây để xem thêm</p>
      </button>
      <!-- menu hien thi o thiet bi nho hon -->
      <ul id="chuyenmucNavbar" class="p-0 d-lg-none">
        <li>
          <router-link to="/gioi-thieu">Giới thiệu</router-link>
        </li>
        <li>
          <router-link to="/bang-vang">Bảng vàng</router-link>
        </li>
        <li>
          <router-link to="/ho-tro-sinh-vien/thuc-tap-doanh-nghiep">Hỗ trợ sinh viên</router-link>
        </li>
        <li>
          <router-link to="">Hội thảo chuyên đề</router-link>
        </li>
        <li>
          <router-link to="/tin-tuc">Tin tức</router-link>
        </li>
        <li>
          <router-link to="/tin-tuc/tin-cong-nghe">Tin công nghệ</router-link>
        </li>
        <li>
          <router-link to="">Việc làm</router-link>
        </li>
        <li>
          <router-link to="/tuyen-sinh">Truyển sinh</router-link>
        </li>
      </ul>
  
    </div>
    <div class="col-lg-5 inner-center col-md-6 col-6 ">
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

    <div class="col-lg-5 inner-recruitment col-md-6 col-6">
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

<style scoped>
@media only screen and (max-width: 1120px){
  .item-news .span{
  padding-left: 16%;
  
}
}
@media only screen and (max-width: 1023px){
#chuyenmuc-btn{
  background: #0c639c;
  color: aliceblue;
  max-height: 50px;
  height: 80%;
  border: 1px solid #007bff;
  margin-bottom: 10px;
}
.text-button-chuyenmuc{
  margin-top: 1%;
  margin-bottom: 0%;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.bonus-text{
  font-size:x-small;
}
.item2{
  width: 200px;
  height: 200px;
    border-radius: 30%;
    border-top-left-radius: 5%;
    border-bottom-right-radius: 5%;
}
.item-news h4{
  font-size: 18px;
  }
  .item-news  p{
  font-size: 12px;
  }
}
/* mobile responsive */
@media only screen and (max-width: 767px){
  /* anh muc tuyen dung - main */
  .recruitment {
  display: flex;
  flex-direction: column;
  align-items: center; /* căn giữa theo chiều ngang nếu cần */
  margin-bottom: 1rem; /* tạo khoảng cách giữa các mục */
  text-align: center;  /* căn giữa chữ */
}
.recruitment img {
  max-width: 100%;
  height: auto;
}
/* end - anh muc tuyen dung - main */
  .partner-logo-one{
    background-size: 100% 140px;
    height: 140px;
  }
   .partner-logo-two{
    background-size: 100% 140px;
    height: 140px;
  }
 #chuyenmuc-btn{
  background: #0c639c;
  color: aliceblue;
  max-height: 50px;
  height: 80%;
  border: 1px solid #007bff;
  margin-bottom: 10px;
}
.text-button-chuyenmuc{
  margin-top: 1%;
  margin-bottom: 0%;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
.bonus-text{
  font-size:x-small;
}
.item2{
  max-width: 200px;
  width: 20%;
  max-height: 90px;
  border-radius: 30%;
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
}
.item1, .item3{
  max-width: 100%;
  max-height: 90px;
}
.item1 p{
 font-size: 45%;
}
.item3 p{
 font-size: 45%;
}
.flex-container .item-flex-row img {
    max-width: 400px;
    width: 70%;
    max-height: 350px;
    height: 70%;
    border-radius: 10px;
}
.flex-container .item-flex-row{
      padding: 10px;
}
.item-news .span{
  padding-left: 15%;
  font-size: 13px;
}
.item-news h4{
  font-size: 20px;
}
}
@media only screen and (max-width: 750px){
  .item-news h4{
  font-size: 13px;
  }
  .item-news  p{
  font-size: 12px;
  }
}
/* responsive cho dien thoai */
@media only screen and (max-width: 454px){
  .item-news h4{
  font-size: 15px;
  }
  .item-news  p{
  font-size: 12px;
  }
}
@media only screen and (max-width: 425px){
  .item-news h4{
  font-size: 13px;
  }
  .item-news  p{
  font-size: 12px;
  }
}
@media only screen and (max-width: 943px){
  .inner-item-content h3{font-size: 12px;}
  .inner-item-content p{font-size: 8px;}
}
@media only screen and (max-width: 477px){
  .item-news .span{
  padding-left: 10%;
  font-size: 13px;
}
@media only screen and (max-width: 544px){
  .item-news .span{
  font-size: 10px;
  }
  .item-news h4{
    padding: 5%;
  }
  .item-news p{
    font-size: 10px;
  }
}
}
</style>