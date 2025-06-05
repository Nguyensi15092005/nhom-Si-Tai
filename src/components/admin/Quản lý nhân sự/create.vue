<template>
  <h2>Thêm mới nhân sự</h2>
  <div class="row">
    <div class="col-8">
      <form @submit.prevent="handleAddTeacher()" class="frm-create" action="" method="post">
        <div class="form-group">
          <label for="fullName">Họ và tên:</label>
          <input class="form-control" id="fullName" v-model="newTeacher.name" required>
        </div>

        <div class="form-group">
          <label for="position">Vị trí:</label>
          <input class="form-control" v-model="newTeacher.position" id="position" required>
        </div>

        <div class="form-group">
          <label for="avatar">Ảnh:</label>
          <input type="file" class="form-control" @change="handleFileUpload" id="avatar" required>
        </div>
        <img :class="newTeacher.avatar ? 'd-block': 'd-none'" style="width: 200px; object-fit: contain;"  height="300px" :src=newTeacher.avatar :alt=newTeacher.name>

        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// import { postTeacher } from '@/servise/Teacher';

import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTeacherStore } from "../storeAdmin/storeTeacher";


const teacherStore = useTeacherStore();
const router = useRouter();
const newTeacher = ref({
  name: "",
  position: "",
  avatar: "",
})

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    newTeacher.value.avatar = await teacherStore.uploadAvatar(file);
  } catch (error) {
    alert("Tải ảnh lên thất bại: " + error.message);
    console.error(error);
  }
};



const handleAddTeacher = async () => {
  if (!newTeacher.value.name || !newTeacher.value.position) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  try {
    await teacherStore.addTeacher(newTeacher);
    alert("Thêm mới giảng viên thành công");
    router.push("/admin/quan-ly-nhan-su");
  } catch (error) {
    console.log(error);
    alert("Thêm mới giảng viên thất bại");
  }
}



// const formCreate = document.querySelector(".frm-create");
// if (formCreate) {
//   formCreate.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     const option = {
//       name: e.target.elements.name.value,
//       position: e.target.elements.position.value,
//       avatar: e.target.elements.avatar.value,
//     }
//     await postTeacher(option);
//     alert("Thêm mới thành công");
//     formCreate.reset();
//     router.push("/admin/quan-ly-nhan-su");
//   })
// }

</script>