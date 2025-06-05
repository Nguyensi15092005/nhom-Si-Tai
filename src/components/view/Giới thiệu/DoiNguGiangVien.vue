<template>
    <h2 style="color:#0169BF;">Đội ngủ nhân sự</h2>
    <div class="row teacher d-flex justify-content-center">
        <div class="col-10">
            <img src="/image/doingunhasu.jpg" alt="">
            <div class="row d-flex justify-content-around">
                <div class="col-5 item-teacher" v-for="item in teacherStore.teacher" :key="item.id">
                    <div @click="handleDetail(item.id)" class="image-teacher">
                        <img :src="item.avatar" alt="">
                    </div>
                    <div class="teacher-content">
                        <h4>{{ item.position }}</h4>
                        <h4>{{ item.name }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useTeacherStore } from "@/components/admin/storeAdmin/storeTeacher";
import { onMounted } from "vue"; //giống với useEfect chạy sau khi component thực thi song
import { ref } from "vue";

import { useRouter } from 'vue-router';

const router = useRouter();

//  lấy ds nhân sự từ db
const teacherStore = useTeacherStore();
onMounted(async ()=>{
  try {
    await teacherStore.fetchTeacher();
  } catch (error) {
    console.log("lỗi lấy ra danh sách giảng viên");
  }
})

const handleDetail = (id) =>{
  teacherStore.setTeacherId(id);
  router.push("doi-ngu-giang-vien/chi-tiet-giang-vien")
}
</script>

<style>
h2 {
    text-align: center;
    margin: 20px 0;
    font-size: 35px;
}

.teacher img {
    width: 100%;
}

.teacher .item-teacher{
    border: 3px solid #0169BF;
    border-radius: 10px;
    margin: 15px 0;
    color: #0169BF;
    padding: 10px 0;
    box-shadow: 6px 6px 6px #ddd;
}
.teacher .item-teacher:hover{
    background-color: #0169bf4b;
    transition: all 0.5s;
    color: #fff;
}

.teacher .item-teacher .image-teacher{
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
}
.teacher .item-teacher .image-teacher img{
    width: 60%;
    height: auto;
    border-radius: 10px;
    object-fit: cover;
}
.teacher .item-teacher .teacher-content h4{
    text-align: center;
    font-size: 20px;
    margin: 10px;
}

</style>