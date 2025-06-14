<template>
    <h2>Thêm mới bảng vàng sinh viên</h2>
    <div class="row">
    <div class="col-8">
      <form @submit.prevent="handleAddGoldBoard()" class="frm-create" action="" method="post">
        <div class="form-group">
          <label for="fullName">Họ và tên sinh viên: </label>
          <input class="form-control" id="fullName" v-model="newGoldBoard.fullName" required>
        </div>

        <div class="form-group">
          <label for="class">Lớp: </label>
          <input class="form-control" v-model="newGoldBoard.class" id="class" required>
        </div>

        <div class="form-group">
          <label for="course">Khóa học: </label>
          <input class="form-control" v-model="newGoldBoard.course" id="course" required>
        </div>

        <div class="form-group">
          <label for="point">Điểm: </label>
          <input class="form-control" v-model="newGoldBoard.point" id="point" required>
        </div>

        <div class="form-group">
          <label for="point">Xếp loại: </label>
          <select v-model="newGoldBoard.classification" id="point" class="form-select">
            <option value="" disabled selected>---Chọn xếp loại---</option>
            <option value="Xuất sắc">Xuất sắt</option>
            <option value="Giỏi">Giỏi</option>
          </select>
        </div>

        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary">Thêm</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGoldBoardStore } from '../storeAdmin/storeBangVangSinhVien';

const goldBoardStore = useGoldBoardStore();
const router = useRouter();
const newGoldBoard = ref({
  fullName: "",
  class: "",
  course: "",
  point: "",
  classification: ""
});


const handleAddGoldBoard = async () => {
  if (!newGoldBoard.value.fullName || !newGoldBoard.value.course || !newGoldBoard.value.class || !newGoldBoard.value.point || !newGoldBoard.value.classification) {
    alert('Vui lòng điền đầy đủ thông tin!!!');
    return;
  }

  try {
    await goldBoardStore.addGoldBoard(newGoldBoard);
    alert("Thêm mới sinh viên vào bảng vàng thành công");
    router.push("/admin/quan-ly-bang-vang-sinh-vien/them-moi-bang-vang-sinh-vien");
  } catch (error) {
    console.log(error);
    alert("Thêm mới sinh viên vào bảng vàng thất bại");
  }
}


</script>