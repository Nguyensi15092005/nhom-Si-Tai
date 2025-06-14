<template>
  <div class="row d-flex justify-content-center">
    <div class="col-10 detail-tintuc">
      <h2 style="color: #0169BF;">{{ news.title }}</h2>
      <img :src=news.image :alt=news.title>
      <p>{{ news.content }}</p>
    </div>
  </div>
</template>

<script setup>
import { userNews } from '@/components/admin/storeAdmin/storeNews';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const newsStore = userNews();

const news = ref({
  topic: "",
  title: "",
  image: "",
  content: ""

});

const fetchNewsDetails = async () => {
  const id = newsStore.NewsId; // <--- LẤY ID TỪ STORE!

  if (!id) {
    alert("Không có ID trong Store!");
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
    console.error("Lỗi khi lấy thông tin:", error);
    alert("Có lỗi xảy ra khi tải thông tin. Vui lòng thử lại.");
    router.push("/admin/quan-ly-tin-tuc");
  }
};
onMounted(() => {
  fetchNewsDetails();
});

</script>

<style>
.detail-tintuc h2{
  margin: 10px 0;
}
.detail-tintuc img{
  border-radius: 10px;
  margin: 10px 0;
}
</style>