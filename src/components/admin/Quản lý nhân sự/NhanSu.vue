<template>
  <h2>Quản lý nhân sự</h2>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="row card-header d-flex ">
          <h5 class="col-5">Danh sách nhân sự</h5>
          <router-link to="/admin/quan-ly-nhan-su/them-moi-nhan-su" class="col-2 btn btn-success">+Thêm</router-link>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>
                  STT
                </th>
                <th>
                  Tên giảng viên
                </th>
                <th>
                  Vị trí
                </th>
                <th>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in teacherStore.teacher" :key="item.id">
                <td>{{ index + 1 }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.position }}</td>
                <td>
                  <button @click="handleEdit(item.id)" class="btn btn-warning">Sửa</button>
                  <button @click="handleDelete(item.id)" class="delete-teacher btn btn-danger">Xóa</button>
                  <button @click="handleDetail(item.id)" class="btn btn-primary">Chi tiết</button>
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
import { onMounted } from "vue"; //giống với useEfect chạy sau khi component thực thi song
import { useTeacherStore  } from "../storeAdmin/storeTeacher";
import { useRouter } from 'vue-router';

const router = useRouter();

//  lấy ds nhân sự từ db
const teacherStore = useTeacherStore ();
onMounted(async ()=>{
  try {
    await teacherStore.fetchTeacher();
  } catch (error) {
    console.log("lỗi lấy ra danh sách giảng viên");
  }
})

// Truyền id lên strore
const handleEdit = (id) =>{
  teacherStore.setTeacherId(id);
  router.push(`/admin/quan-ly-nhan-su/chinh-sua-nhan-su`);
}

const handleDetail = (id) =>{
  teacherStore.setTeacherId(id);
  router.push("/admin/quan-ly-nhan-su/chi-tiet-nhan-su")
}



// xóa nhân sự
const handleDelete = async (id) =>{
  try {
    await teacherStore.delete(id)
    alert("Xóa giảng viên thành công");
  } catch (error) {
    console.log("lỗi lấy ra danh sách giảng viên");
  }
}

</script>