<template>
  <div class="row d-flex justify-content-center" v-if="news.topic">
    <div class="col-10 text-center pt-5 pl-3">
      <h6>{{ news.topic }}</h6>
      <h5>{{ news.title }}</h5>
    </div>
    <div class="col-10 text-center">
      <img style="width: 400px; object-fit: contain;" height="300px" :src=news.image :alt=news.topic>
    </div>
    <div class="col-10">
      <p>
        {{ news.content }}
      </p>
    </div>

  </div>

</template>


<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { userNews } from "@/components/admin/storeAdmin/storeNews";

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