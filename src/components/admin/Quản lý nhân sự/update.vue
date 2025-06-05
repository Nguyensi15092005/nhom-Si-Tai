<template>
  <h2>Chỉnh sửa nhân sự</h2>
  <div class="row">
    <div class="col-8">
      <form v-if="teacher.name" @submit.prevent="handleUpdateTeacher()" class="frm-update" action="" method="">
        <div class="form-group">
          <label for="fullName">Họ và tên:</label>
          <input type="text" class="form-control" name="name" id="fullName" v-model="teacher.name">
        </div>

        <div class="form-group">
          <label for="position">Vị trí:</label>
          <input type="text" class="form-control" name="position" id="position" v-model="teacher.position">
        </div>

        <div class="form-group">
          <label for="avatar">Ảnh:</label>
          <input type="file" class="form-control" @change="handleFileUpload" id="avatar" required>
        </div>
        <img style="width: 200px; object-fit: contain;"  height="300px" :src=teacher.avatar :alt=teacher.name>

        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary">Chỉnh sửa</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { getTeacherId, updateTeacher } from '@/servise/Teacher';
import { useTeacherStore } from "../storeAdmin/storeTeacher";
import { onMounted, ref, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// [GET] Lấy để vẻ ra giao diện
const teacherStore = useTeacherStore();
const route = useRoute();
const router = useRouter();
const id = teacherStore.TeacherId;
const teacher = ref({
  id: null,
  name: "",
  position: "",
  avatar: ""

});

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    teacher.value.avatar = await teacherStore.uploadAvatar(file);
  } catch (error) {
    alert("Tải ảnh lên thất bại: " + error.message);
    console.error(error);
  }
};

const fetchTeacherDetails = async () => {
  const teacherId = teacherStore.TeacherId; // <--- LẤY ID TỪ STORE!

  if (!teacherId) {
    alert("Không có ID giáo viên trong Store!");
    router.push("/admin/quan-ly-nhan-su");
    return;
  }

  try {
    // Sử dụng action fetchTeacherById mới để lấy dữ liệu cụ thể
    const foundTeacher = await teacherStore.fetchTeacherById(teacherId);

    if (foundTeacher) {
      teacher.value = { ...foundTeacher };
    } else {
      alert("Không tìm thấy giáo viên với ID này trong CSDL!");
      router.push("/admin/quan-ly-nhan-su");
    }
  } catch (error) {
    console.error("Lỗi khi lấy thông tin giáo viên:", error);
    alert("Có lỗi xảy ra khi tải thông tin giáo viên. Vui lòng thử lại.");
    router.push("/admin/quan-ly-nhan-su");
  }
};


// Hàm xử lý khi form được submit để cập nhật
const handleUpdateTeacher = async () => {
  if (!teacher.value.name || !teacher.value.position || !teacher.value.avatar) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  try {

    const dataTeacherUpdate = {
      name: teacher.value.name,
      position: teacher.value.position,
      avatar: teacher.value.avatar,
      updated_at: new Date().toISOString()
    };

    // Gọi action updateTeacher từ store, truyền ID và dữ liệu cần cập nhật
    await teacherStore.updateTeacher(id, dataTeacherUpdate);

    alert("Cập nhật giảng viên thành công!");
    router.push("/admin/quan-ly-nhan-su"); // Chuyển hướng sau khi cập nhật thành công
  } catch (error) {
    console.error("Lỗi khi cập nhật giảng viên:", error);
    alert("Cập nhật giảng viên thất bại: " + error.message);
  }
};

// Gọi fetchTeacherDetails khi component được mount
onMounted(() => {
  fetchTeacherDetails();
});







// const fetchAPI = async () => {
//   try {
//     const response = await getTeacherId(id);
//     teacher.value = response;

//     // [PUTCH] thay đổi 
//     await nextTick();
//     const frmUpdate = document.querySelector(".frm-update");
//     if(frmUpdate){
//       frmUpdate.addEventListener("submit", async (e)=>{
//         e.preventDefault();
//         const option = {
//           name: e.target.elements.name.value,
//           position: e.target.elements.position.value,
//           avatar: e.target.elements.avatar.value,
//         }
//         await updateTeacher(id, option);
//         alert("Chỉnh sửa thành công");
//       })
//     }
//   } catch (error) {
//     alert("Lỗi!!!");
//   }
// }

// onMounted(() => {
//   fetchAPI();
// })



</script>