<template>
  <h2>Chỉnh sửa tin tức</h2>
  <div class="row">
    <div class="col-8">
      <form v-if="news.topic" @submit.prevent="handleUpdateNews()" class="frm-update" action="" method="">
        <div class="form-group">
          <label for="topic">Chủ đề:</label>
          <input class="form-control" id="topic" v-model="news.topic" required>
        </div>

        <div class="form-group">
          <label for="title">Tiêu đề:</label>
          <input class="form-control" v-model="news.title" id="title" required>
        </div>

        <div class="form-group">
          <label for="image">Ảnh:</label>
          <input type="file" class="form-control" @change="handleFileUpload" id="image">
        </div>
        <img style="width: 200px; object-fit: contain;" height="300px" :src=news.image :alt=news.title>

        <div class="form-group">
          <label for="content">Nội dung:</label>
          <input class="form-control" v-model="news.content" id="content" required>
        </div>

        <div class="form-group mt-3">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { userNews } from "@/components/admin/storeAdmin/storeNews";
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

// [GET] Lấy để vẻ ra giao diện
const newsStore = userNews();
const router = useRouter();
const id = newsStore.NewsId;
const news = ref({
  id: null,
  topic: "",
  title: "",
  image: "",
  content: ""

});

const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  try {
    news.value.image = await newsStore.uploadAvatar(file);
  } catch (error) {
    alert("Tải ảnh lên thất bại: " + error.message);
    console.error(error);
  }
};

const fetchNewsDetails = async () => {
  if (!id) {
    alert("Không có ID tin tuc trong Store!");
    router.push("/admin/quan-ly-tin-tuc");
    return;
  }

  try {
    const foundNews = await newsStore.fetchNewsById(id);

    if (foundNews) {
      news.value = { ...foundNews };
    } else {
      alert("Không tìm thấy tin tuc với ID này trong CSDL!");
      router.push("/admin/quan-ly-tin-tuc");
    }
  } catch (error) {
    console.error("Lỗi khi lấy thông tin tintuc:", error);
    alert("Có lỗi xảy ra khi tải thông tin tin tuc. Vui lòng thử lại.");
    router.push("/admin/quan-ly-tin-tuc");
  }
};


// Hàm xử lý khi form được submit để cập nhật
const handleUpdateNews = async () => {
  if (!news.value.topic || !news.value.title || !news.value.content) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }

  try {

    const dataNewsUpdate = {
      topic: news.value.topic,
      title: news.value.title,
      image: news.value.image,
      content: news.value.content,
      updated_at: new Date().toISOString()
    };

    await newsStore.updateNews(id, dataNewsUpdate);

    alert("Cập nhật tin tuc thành công!");
    router.push("/admin/quan-ly-tin-tuc");
  } catch (error) {
    console.error("Lỗi khi cập nhật tin tuc:", error);
    alert("Cập nhật tin tuc thất bại: " + error.message);
  }
};

// Gọi fetchTeacherDetails khi component được mount
onMounted(() => {
  fetchNewsDetails();
});


</script>