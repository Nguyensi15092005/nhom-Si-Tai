<template>
  <div class="support-students">
    <h2>CHUYÊN MỤC: HỖ TRỢ SINH VIÊN</h2>

    <div class="news-item">
      <img src="https://cntt.kthcm.edu.vn/wp-content/uploads/2025/01/lien-thong.jpg" alt="Thông báo tuyển sinh" class="news-image" />
      <div class = "text-item">
        <h3>Thông báo tuyển sinh Liên thông Đại học</h3>
        <p style="font-weight: 200;">March 23, 2025</p>
        <p>Thông báo tuyển sinh Liên thông Đại học năm 2025 dành cho các bạn sinh viên.</p>
        <button class="view-more">Xem thêm >>></button>
      </div>
    </div>

    <div class="news-item">
      <img src="https://cntt.kthcm.edu.vn/wp-content/uploads/2017/07/thuc-tap-sinh-1.png" alt="Tuyển thực tập sinh" class="news-image" />
      <div class = "text-item">
        <h3>Tuyển thực tập sinh</h3>
        <p style="font-weight: 200;">March 22, 2025</p>
        <p>Thông tin tuyển dụng thực tập sinh Thiết kế đồ họa</p>
        <p>Công ty TNHH TAZA GROUP Địa chỉ: 14-16 Bình Lợi, Phường 13, Quận Bình Thạnh.</p>
        <button class="view-more">Xem thêm >>></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupportStudents",
};
</script>

<style scoped>
.support-students {
  text-align: left;
  padding: 20px;
}

.news-item {
  border: 1px solid #dedede;
  margin: 20px 0;
  padding: 15px;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
}

.news-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin-right: 20px;
}

.text-item {
  display: center;
  flex-direction: column; 
  justify-content: space-between; 
}

h2 {
  color: #0169BF;
}

.view-more {
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #0169BF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.view-more:hover {
  background-color: #0169BF;
}
</style>