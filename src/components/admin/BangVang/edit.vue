<template>
  <h2>Chỉnh sửa bảng vàng sinh viên</h2>
    <div class="row">
      <div class="col-8">
        <form @submit.prevent="handleEdit()" class="frm-create" action="" method="">
          <div class="form-group">
            <label for="fullName">Họ và tên sinh viên: </label>
            <input class="form-control" id="fullName" v-model="goldBoard.fullName" required>
          </div>

          <div class="form-group">
            <label for="class">Lớp: </label>
            <input class="form-control" v-model="goldBoard.class" id="class" required>
          </div>

          <div class="form-group">
            <label for="course">Khóa học: </label>
            <input class="form-control" v-model="goldBoard.course" id="course" required>
          </div>

          <div class="form-group">
            <label for="point">Điểm: </label>
            <input class="form-control" v-model="goldBoard.point" id="point" required>
          </div>

          <div class="form-group">
            <label for="point">Xếp loại: </label>
            <select v-model="goldBoard.classification" id="point" class="form-select">
              <option value="Xuất sắc">Xuất sắt</option>
              <option value="Giỏi">Giỏi</option>
            </select>
          </div>

          <div class="form-group mt-3">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useGoldBoardStore } from '../storeAdmin/storeBangVangSinhVien';

const goldBoardStore = useGoldBoardStore();
const router = useRouter();
const id = goldBoardStore.GoldBoardId;
const goldBoard = ref({
  id:null,
  fullName: "",
  class: "",
  course: "",
  point: "",
  classification: ""
});

const fetchGoldBoardDetail = async () =>{
  if (!id) {
    alert("Không có ID sinh viên trong Store!");
    router.push("/admin/quan-ly-bang-vang-sinh-vien");
    return;
  }

  try {
    // Sử dụng action fetchTeacherById mới để lấy dữ liệu cụ thể
    const foundGoldBoard = await goldBoardStore.fetchGoldBoardById(id);

    if (foundGoldBoard) {
      goldBoard.value = { ...foundGoldBoard };
    } else {
      alert("Không tìm thấy Sinh viên với ID này trong CSDL!");
      router.push("/admin/quan-ly-bang-vang-sinh-vien");
    }
  } catch (error) {
    console.error("Lỗi khi lấy thông tin giáo viên:", error);
    alert("Có lỗi xảy ra khi tải thông tin giáo viên. Vui lòng thử lại.");
    router.push("/admin/quan-ly-bang-vang-sinh-vien");
  }
};


// Hàm xử lý khi form được submit để cập nhật
const handleEdit = async () => {
  if (!goldBoard.value.fullName || !goldBoard.value.course || !goldBoard.value.class || !goldBoard.value.point || !goldBoard.value.classification) {
    alert('Vui lòng điền đầy đủ thông tin!!!');
    return;
  }

  try {

    const dataGoldBoard = {
      fullName: goldBoard.value.fullName,
      course: goldBoard.value.course,
      class: goldBoard.value.class,
      point: goldBoard.value.point,
      classification: goldBoard.value.classification,
      updated_at: new Date().toISOString()
    };

    await goldBoardStore.editGoldBoard(id, dataGoldBoard);

    alert("Cập nhật sinh viên trong bảng vàng thành công!");
    router.push("/admin/quan-ly-bang-vang-sinh-vien"); // Chuyển hướng sau khi cập nhật thành công
  } catch (error) {
    console.error("Lỗi khi cập nhật sinh viên:", error);
    alert("Cập nhật sinh viên viên trong bảng vàng thất bại: " + error.message);
  }
};

// Gọi fetchTeacherDetails khi component được mount
onMounted(() => {
  fetchGoldBoardDetail();
});
</script> 