<template>
    <div class="row d-flex justify-content-center" v-if="teacher.name">
        <div class="col-5 text-center pt-5 pl-3">
            <h4>{{ teacher.name }}</h4>
            <h6>{{ teacher.position }}</h6>
        </div>
        <div class="col-5 text-center">
            <img style="width: 200px; object-fit: contain;"  height="300px" :src=teacher.avatar :alt=teacher.name>
        </div>
    </div>

</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTeacherStore } from '../storeAdmin/storeTeacher';

const router = useRouter();
const teacherStore = useTeacherStore();


const teacher = ref({
    name: "",
    position: "",
    avatar: ""

});

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
onMounted(() => {
  fetchTeacherDetails();
});
</script>