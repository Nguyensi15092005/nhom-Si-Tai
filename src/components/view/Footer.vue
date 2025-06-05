<template>
  <footer class="footer p-0">
    <div class="row footer-content">
      <div class="col-4 footer-col footer-about p-0">
        <div class="text-about">
          <h4>Trường cao đẳng kinh tế Hồ Chí Minh</h4>
        </div>
        <ul class="left">
          <li><h6>Cơ sở: 33 Đ. Vĩnh Viễn, Phường 2, Quận 10, Hồ Chí Minh</h6></li>
          <li><h6>Hotline: 028 3833 0731</h6></li>
        </ul>
        <form action="" id="frm-email" class="pl-30 email d-flex mt-20">
          <input type="email" name="email" class="email-text" placeholder="Email...">
          <button type="submit" class="send-btn">Gửi</button>
        </form>
      </div>

      <div class="col-4 footer-col footer-links p-0">
        <div class="text-about">
          <h4>Thông tin</h4>
        </div>
        <ul class="text-center">
          <li><a href="#">Trang chủ</a></li>
          <li><a href="#">Giới thiệu</a></li>
          <li><a href="#">Tin tức</a></li>
          <li><a href="#">Tuyển sinh</a></li>
          <li><a href="#">Liên kết</a></li>
          <li><a href="#">Liên hệ</a></li>
        </ul>
      </div>

      <div class="col-4 footer-col footer-contact p-0">
        <div class="text-about">
          <h4>Các liên kết mạng xã hội</h4>
        </div>
        <ul class="right">
          <li><a href="#"><i class="fab fa-facebook"></i>Facebook</a></li>
          <li><a href="#"><i class="fab fa-whatsapp"></i>Zalo</a></li>
          <li><a href="#"><i class="fab fa-facebook-messenger"></i>Messenger</a></li>
          <li><a href="#"><i class="fas fa-envelope"></i>Email</a></li>
        </ul>
      </div>
    </div>

    <div class="row">
      <div class="col-12 footer-bottom">
        <p>&copy; 2025 Trường cao đẳng kinh tế Thành Phố Hồ Chí Minh - Khoa CNTT.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const frmGmail = document.querySelector('#frm-email');
  if (frmGmail) {
    frmGmail.addEventListener("submit", (e)=>{
      e.preventDefault();
      if(e.target.elements.email.value !== "nguyenvana@gmail.com"){
        alert("Gửi email thất bại!");
      }
      else{
        alert("Gửi email thành công!")
      }

    })
  }
})
</script>
