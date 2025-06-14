<template>
  <h2>Quản lý bảng vàng Sinh Viên</h2>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="row card-header d-flex ">
          <h5 class="col-5">Danh sách bảng vàng</h5>
          <router-link to="/admin/quan-ly-bang-vang-sinh-vien/them-moi-bang-vang-sinh-vien"
            class="col-2 btn btn-success">+Thêm</router-link>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>
                  STT
                </th>
                <th>
                  Tên sinh viên
                </th>
                <th>
                  lớp
                </th>
                <th>
                  Điểm tích lũy
                </th>
                <th>
                  Xếp Loại
                </th>
                <th>
                  Khóa học
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in goldBoardStore.goldBoard" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.fullName }}</td>
                <td>{{ item.class }}</td>
                <td>{{ item.course }}</td>
                <td>{{ item.point }}</td>
                <td>{{ item.classification }}</td>
                <td>
                  <button @click="handleEdit(item.id)" class="btn btn-warning">Sửa</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useGoldBoardStore } from '../storeAdmin/storeBangVangSinhVien';
import { useRouter } from 'vue-router';
const router = useRouter();
//  lấy ds nhân sự từ db
const goldBoardStore = useGoldBoardStore();
onMounted(async () => {
  try {
    await goldBoardStore.fetchGoldBoard();
  } catch (error) {
    console.log("lỗi lấy ra danh sách sinh viên trong bảng vàng");
  }
});

// Truyền id lên strore
const handleEdit = (id) => {
  goldBoardStore.setGoldBoardId(id);
  router.push(`/admin/quan-ly-bang-vang-sinh-vien/sua-sinh-vien-bang-vang`);
};

</script>