<template>
  <footer class="footer p-0">
    <div class="row footer-content">
      <div class="footer-left col-4 footer-col footer-about p-0">
        <div class="text-about">
          <h4 class="title-left">Trường cao đẳng kinh tế Hồ Chí Minh</h4>
        </div>
        <ul class="left">
          <li><h6>Cơ sở: 33 Đ. Vĩnh Viễn, Phường 2, Quận 10, Hồ Chí Minh</h6></li>
          <li><h6>Hotline: 028 3833 0731</h6></li>
        </ul>
      </div>

      <div class="footer-center col-4 footer-col footer-links p-0">
        <div class="text-about">
          <h4 class="title-center">Thông tin</h4>
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
          <h4 class="title-right">Các liên kết mạng xã hội</h4>
        </div>
        <ul class="right">
          <li><a href="#" class="text-icon"><i class="icon-footer fab fa-facebook"></i>Facebook</a></li>
          <li><a href="#" class="text-icon"><i class="icon-footer fab fa-whatsapp"></i>Zalo</a></li>
          <li><a href="#" class="text-icon"><i class="icon-footer fab fa-facebook-messenger"></i>Messenger</a></li>
          <li><a href="#" class="text-icon"><i class="icon-footer fas fa-envelope"></i>Email</a></li>
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
<style scoped>
@media only screen and (max-width: 1024px){
  .footer li{
    font-size: 20px;
  }
}
/* tablet responsive */

@media only screen and (max-width: 1024px){
  .text-icon{
    font-size: 95%;
    margin-right: auto;
    padding-right: 400px;
  }

  .text-about{
    width: 100%;
    height: auto;
    
  }
  [class*="title-left"], [class*="title-center"], [class*="title-right"]{
    font-size: 85%;
  }
   #frm-email{
    
    width: 100%;
    height: auto;
    margin: 0 auto;
    gap: 10px;
    
  
  }
   #frm-email input.email-text{
    width: 80%;
    height: auto;
    
  }
  .icon-footer{
    size: 70px;
  }
  .footer-contact ul.right li {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Căn trái */
    gap: 10px;                   /* Khoảng cách giữa icon và chữ */
    margin-bottom: 10px;
  }
  .footer .footer-contact .right{
    padding-left: 80px;
  }
}
/* chinh form email o dien thoai */
@media only screen and (max-width: 770px){
   #frm-email{
    
    width: 100%;
    height: auto;
    margin: 0 auto;
    gap: 10px;
    margin-bottom: 5%;
    
  
  }
   #frm-email input.email-text{
    width: 80%;
    height: auto;
    
  }
  #frm-email .send-btn{
    width: 30%px;
    height: 66%;
    font-size: 60%;
  }
}
 @media only screen and (max-width: 767px){
  .text-icon{
    font-size: 70%;
    margin-right: auto;
    /* padding-right: 2px; */
    margin-right: 400px;
    padding-left: 2px;
  }
  [class*="title-left"], [class*="title-center"], [class*="title-right"]{
    font-size: 7px;
    padding: 5%;
    /* margin: auto; */
  }
  .footer-left .left li h6{
    font-size: 70%;
  }
   .footer-center .text-center li{
    font-size: 70%;
  }
   .icon-footer{
    font-size: medium;
  }
  .footer-contact ul.right li {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Căn trái */
    gap: 10px;                   /* Khoảng cách giữa icon và chữ */
    margin-bottom: 10px;
  }
  .footer .footer-contact .right{
    padding-left: 8px;
  }
 }
/* mobile responsive */
@media only screen and (max-width: 578px){
   .text-icon{
    font-size: 70%;
    margin-right: auto;
    /* padding-right: 2px; */
    margin-right: 400px;
    padding-left: 2px;
  }
  .text-about{
    width: 100%;
    height: auto;
    
  }
  [class*="title-left"], [class*="title-center"], [class*="title-right"]{
    font-size: 8px;
  }
   #frm-email{
    
    width: 100%;
    height: auto;
    margin: 0 auto;
    gap: 10px;
    
  
  }
   #frm-email input.email-text{
    width: 80%;
    height: auto;
    
  }
  .icon-footer{
    font-size: medium;
  }
  .footer-contact ul.right li {
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Căn trái */
    gap: 10px;                   /* Khoảng cách giữa icon và chữ */
    margin-bottom: 10px;
  }
  .footer .footer-contact .right{
    padding-left: 8px;
  }
  .footer-left .left li h6{
    font-size: 80%;
  }
   .footer-center .text-center li{
    font-size: 80%;
  }
  .footer .footer-bottom p{
    font-size: 80%;
  }
}
@media only screen and (max-width: 483px){
  [class*="title-left"], [class*="title-center"], [class*="title-right"]{
    font-size: 7px;
    padding: 5%;
    /* margin: auto; */
  }
}
@media only screen and (max-width: 439px){
  [class*="title-left"], [class*="title-center"], [class*="title-right"]{
    font-size: 5px;
    padding: 5%;
    /* margin: auto; */
    font-size: 6px;
  }
@media only screen and (max-width: 519px){
  .footer-left .left li h6{
    font-size: 60%;
  }
   .footer-center .text-center li{
    font-size: 60%;
  }
}
@media only screen and (max-width: 424px){
   .footer .footer-bottom p{
    font-size: 60%;
  }
   .text-icon{
    font-size: 60%;
    margin-right: auto;
    /* padding-right: 2px; */
    margin-right: 400px;
    padding-left: 2px;
  }
}


}

  
</style>
