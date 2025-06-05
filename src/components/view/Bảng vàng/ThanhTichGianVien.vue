<template>
    <div class="lecture-board">
      <h1>Bảng vàng thành tích giảng viên</h1>
      <img src="https://media.licdn.com/dms/image/v2/D5612AQHcm1XC-Zn2KA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735899366730?e=2147483647&v=beta&t=9IZSvrxQVUQbCkjSiqvC6ONSP0p17nvL6BEtEdpq_qg" alt="Bảng vàng" class="gold-image" />
      <p>
        Bảng vàng thành tích giảng viên là nơi ghi nhận những thành tích xuất sắc của giảng viên trong khoa CNTT. Đây là một phần quan trọng trong việc khuyến khích và động viên giảng viên phấn đấu hơn nữa trong công việc giảng dạy và nghiên cứu.
      </p>
      <div class="tags">
        <button>BẢNG VÀNG</button>
        <button>GIẢNG VIÊN</button>
        <button>KHOA CNTT</button>
        <button>THÀNH TÍCH</button>
      </div>
    </div>
</template>


<style scoped>
.lecture-board h1 {
  color: #0169BF;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

.lecture-board {
  text-align: center;
  padding: 20px;
}
.gold-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
}
.tags button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  color: #0169BF;
  cursor: pointer;
  background-color: #fff;
  font-weight: 400;
  border: 1px solid #0169BF;
  border-radius: 6px;
}
.tags button:hover {
  background-color: #0169bf67;
  color: #fff;
}
</style>