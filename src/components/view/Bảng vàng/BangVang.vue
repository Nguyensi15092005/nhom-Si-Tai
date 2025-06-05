<template>
  <div class="gold-board">
    <h1 class="category-title">Danh mục: Bảng vàng</h1>
    <div class="row">
      <div class="col">
        <h2>Thành tích giảng viên</h2>
        <img src="https://media.licdn.com/dms/image/v2/D5612AQHcm1XC-Zn2KA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735899366730?e=2147483647&v=beta&t=9IZSvrxQVUQbCkjSiqvC6ONSP0p17nvL6BEtEdpq_qg" alt="Thành tích giảng viên" class="gold-image" />
        <p>
          Ghi nhận những thành tích xuất sắc của giảng viên trong khoa CNTT.
        </p>
        <router-link to="/bang-vang/thanh-tich-gian-vien" class="view-more">Xem thêm >>></router-link>
      </div>

      <div class="col">
        <h2>Thành tích sinh viên</h2>
        <img src="https://www.21kschool.com/sg/wp-content/uploads/sites/3/2024/11/Qualities-of-a-Good-Student.png" alt="Thành tích sinh viên" class="gold-image"/>
        <p>
          Ghi nhận những thành tích xuất sắc của sinh viên trong khoa CNTT.
        </p>
        <router-link to="/bang-vang/thanh-tich-sinh-vien" class="view-more">Xem thêm >>></router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.gold-board {
  text-align: center;
  padding: 40px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
.category-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #0169BF;
}
.row {
  display: flex;
  justify-content: space-around;
  gap: 30px;
}
.col {
  flex: 1;
  max-width: 45%;
  text-align: center;
  border: 1px solid #e0e0e0;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  transition: transform 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.col:hover {
  transform: scale(1.05);
}
.gold-image {
  max-height: 200px;
  max-width: 80%;
  height: auto;
  margin: 15px 0;
  border-radius: 10px;
}
.view-more {
  display: inline-block;
  margin-top: 15px;
  padding: 12px 20px;
  background-color: #ffbb33;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  transition: background-color 0.3s;
}
.view-more:hover {
  background-color: #ffa500;
}
</style>