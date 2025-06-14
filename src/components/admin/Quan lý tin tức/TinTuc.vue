<template>
  <h2>Quản lý Tin tức</h2>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="row card-header d-flex ">
          <h5 class="col-5">Danh sách tin tức</h5>
          <router-link to="/admin/quan-ly-tin-tuc/them-moi-tin-tuc" class="col-2 btn btn-success">+Thêm</router-link>
        </div>
        <div class="card-body">
          <table class="table">
            <thead>
              <tr>
                <th>
                  STT
                </th>
                <th>
                  Chủ đề
                </th>
                <th>
                  Tiêu đề
                </th>
                <th>
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in newsStore.news" :key="item.id">
                <td>{{ index+1 }}</td>
                <td>{{ item.topic }}</td>
                <td>{{ item.title }}</td>
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
import { onMounted } from "vue"; 
import { userNews  } from "@/components/admin/storeAdmin/storeNews";
import { useRouter } from 'vue-router';

const router = useRouter();

//  lấy ds nhân sự từ db
const newsStore = userNews ();
onMounted(async ()=>{
  try {
    await newsStore.fetchNews();
  } catch (error) {
    console.log("lỗi lấy ra danh sách tin tức");
  }
})

// Truyền id lên strore
const handleEdit = (id) =>{
  newsStore.setNewsId(id);
  router.push(`/admin/quan-ly-tin-tuc/chinh-sua-tin-tuc`);
}

const handleDetail = (id) =>{
  newsStore.setNewsId(id);
  router.push("/admin/quan-ly-tin-tuc/chi-tie-tin-tuc")
}


const handleDelete = async (id) =>{
  try {
    await newsStore.delete(id)
    alert("Xóa tin tức thành công");
  } catch (error) {
    console.log("lỗi lấy ra danh sách tin tức");
  }
}
</script>