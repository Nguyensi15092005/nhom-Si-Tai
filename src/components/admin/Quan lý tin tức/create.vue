<template>
  <h2>Thêm mới nhân sự</h2>
  <div class="row">
    <div class="col-8">
      <form @submit.prevent="handleAddNews()" class="frm-create" action="" method="post">
        <div class="form-group">
          <label for="topic">Chủ đề:</label>
          <input class="form-control" id="topic" v-model="newNews.topic" required>
        </div>

        <div class="form-group">
          <label for="title">Tiêu đề:</label>
          <input class="form-control" v-model="newNews.title" id="title" required>
        </div>

        <div class="form-group">
          <label for="image">Ảnh:</label>
          <input type="file" class="form-control" @change="handleFileUpload" id="image" required>
        </div>
        <img :class="newNews.image ? 'd-block': 'd-none'" style="width: 200px; object-fit: contain;"  height="300px" :src=newNews.image :alt=newNews.title>

        <div class="form-group">
          <label for="content">Nội dung:</label>
          <input class="form-control" v-model="newNews.content" id="content" required>
        </div>

        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary">Thêm mới</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { userNews } from "@/components/admin/storeAdmin/storeNews";


const newsStore = userNews();
const router = useRouter();
const newNews = ref({
  topic: "",
  title: "",
  image: "",
  content: ""
})

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    newNews.value.image = await newsStore.uploadAvatar(file);
  } catch (error) {
    alert("Tải ảnh lên thất bại: " + error.message);
    console.error(error);
  }
};



const handleAddNews = async () => {
  if (!newNews.value.topic || !newNews.value.title || !newNews.value.content ) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  try {
    await newsStore.addNews(newNews);
    alert("Thêm mới tin tức thành công");
    router.push("/admin/quan-ly-tin-tuc");
  } catch (error) {
    console.log(error);
    alert("Thêm mới giảng viên thất bại");
  }
}


</script>