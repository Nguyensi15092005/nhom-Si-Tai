<template>
    <div class="row d-flex justify-content-center">
        <div class="col-6">
            <div class="box-detail d-flex align-items-center">
                <img style="width: 200px; object-fit: contain;" height="300px" :src=teacher.avatar :alt=teacher.name>
                <div class="text-center p-3 ">
                    <h4>{{ teacher.name }}</h4>
                    <h6>{{ teacher.position }}</h6>
                </div>
            </div>
        </div>
    </div>

</template>
<script setup>
import { useTeacherStore } from '@/components/admin/storeAdmin/storeTeacher';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


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
        router.push("/gioi-thieu/doi-ngu-giang-vien");
        return;
    }

    try {
        // Sử dụng action fetchTeacherById mới để lấy dữ liệu cụ thể
        const foundTeacher = await teacherStore.fetchTeacherById(teacherId);
        console.log(foundTeacher)
        if (foundTeacher) {
            teacher.value = { ...foundTeacher };
        }
    } catch (error) {
        console.error("Lỗi ấy thông tin giáo viên:", error);
        alert("lỗi tải thông tin giáo viên Vui lòng thử lại.");
        router.push("/gioi-thieu/doi-ngu-giang-vien");
    }
};
onMounted(() => {
    fetchTeacherDetails();
});
</script>

<style>
.box-detail {
    border: 3px solid #0169BF;
    padding: 30px;
    border-radius: 20px;
}
</style>