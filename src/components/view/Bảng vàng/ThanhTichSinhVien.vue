<template>
    <div class="student-achievements">
      <h1>Bảng vàng thành tích sinh viên</h1>
      <img src="https://www.21kschool.com/sg/wp-content/uploads/sites/3/2024/11/Qualities-of-a-Good-Student.png" alt="Bảng vàng sinh viên" class="achievement-image" />
      <p>
        Đây là nơi ghi nhận những thành tích xuất sắc của sinh viên trong khoa CNTT. Những thành tích này là minh chứng cho sự nỗ lực và phấn đấu không ngừng của các bạn sinh viên.
      </p>
      <div class="tags">
        <button>BẢNG VÀNG</button>
        <button>SINH VIÊN</button>
        <button>KHOA CNTT</button>
        <button>THÀNH TÍCH</button>
      </div>

      <h2 style="margin-top: 40px;">DANH HIỆU THỦ KHOA KHÓA HỌC</h2>
      <table class="honor-roll">
        <thead>
          <tr>
            <th>STT</th>
            <th>HỌ TÊN SINH VIÊN</th>
            <th>LỚP</th>
            <th>KHOÁ HỌC</th>
            <th>ĐIỂM TÍCH LŨY</th>
            <th>XẾP LOẠI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in valedictorian"  :key="item.id">
            <td>{{ index +1 }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.class}}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.point }}</td>
            <td>{{ item.classification }}</td>
          </tr>
        </tbody>
      </table>

      <h2 style="margin-top: 40px;">DANH HIỆU TỐT NGHIỆP LOẠI XUẤT SẮC</h2>
      <table class="honor-roll">
        <thead>
          <tr>
            <th>STT</th>
            <th>HỌ TÊN SINH VIÊN</th>
            <th>LỚP</th>
            <th>KHOÁ HỌC</th>
            <th>ĐIỂM TÍCH LŨY</th>
            <th>XẾP LOẠI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in excellentGraduates"  :key="item.id">
            <td>{{ index +1 }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.class}}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.point }}</td>
            <td>{{ item.classification }}</td>
          </tr>
        </tbody>
      </table>

      <h2 style="margin-top: 40px;">DANH HIỆU TỐT NGHIỆP LOẠI GIỎI</h2>
      <table class="honor-roll">
        <thead>
          <tr>
            <th>STT</th>
            <th>HỌ TÊN SINH VIÊN</th>
            <th>LỚP</th>
            <th>KHOÁ HỌC</th>
            <th>ĐIỂM TÍCH LŨY</th>
            <th>XẾP LOẠI</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in good"  :key="item.id">
            <td>{{ index +1 }}</td>
            <td>{{ item.fullName }}</td>
            <td>{{ item.class}}</td>
            <td>{{ item.course }}</td>
            <td>{{ item.point }}</td>
            <td>{{ item.classification }}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script setup>
import { useGoldBoardStore } from "@/components/admin/storeAdmin/storeBangVangSinhVien";
import { computed, onMounted } from "vue"; 

const goldBoardStore = useGoldBoardStore();

const excellentGraduates = computed(() =>
  goldBoardStore.goldBoard.filter(item => item.point >= 3.5 && item.point<3.8)
);

const valedictorian = computed(() =>
  goldBoardStore.goldBoard.filter(item => item.point >=3.8)
);

const good = computed(() =>
  goldBoardStore.goldBoard.filter(item => item.point < 3.5)
);
onMounted(async ()=>{
  try {
    await goldBoardStore.fetchGoldBoard();
  } catch (error) {
    console.log("lỗi lấy ra danh sách sinh viên trong bảng vàng");
  }
});
</script>


<style scoped>
.student-achievements h1 {
  color: #0169BF;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}
.student-achievements {
  text-align: center;
  padding: 20px;
}
.achievement-image {
  max-width: 100%;
  height: auto;
  margin: 20px 0;
}
.tags button {
  margin: 5px;
  padding: 10px 15px;
  border: none;
  background-color: white;
  color: #0169BF;
  cursor: pointer;
  font-weight: 400;
  border-radius: 6px;
  border: 1px solid #0169BF;
}
.tags button:hover {
  background-color: #0169bf67;
  color: #fff;
}

.honor-roll {
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
}
.honor-roll th, .honor-roll td {
  border: 1px solid #dedede;
  padding: 8px;
  text-align: left;
}
.honor-roll th {
  background-color: #f4f4f4;
}
</style>