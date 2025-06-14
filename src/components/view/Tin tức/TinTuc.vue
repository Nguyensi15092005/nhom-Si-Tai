<template>
  <h2 style="color:#0169BF;" class="text-center mt-1">Chuyên mục: Tin tức</h2>
  <div class="row introduce d-flex justify-content-center">
    <div class="col-10 inner-introduce" v-for="item in newsStore.news" :key="item.id">
      <div class="image-introduce">
        <img :src=item.image :alt=item.title>
      </div>
      <div class="introduce-content">
        <div class="introduce-topic">{{ item.topic }}</div>
        <h4>
          {{ item.title }}
        </h4>
        <p class="inner-content">
          {{ strcontent(item.content, 100) }}
        </p>
        <div class="view-add" @click="handleDetail(item.id)">
          Xem thêm >>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { userNews } from '@/components/admin/storeAdmin/storeNews';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const newsStore = userNews();

onMounted(async () => {
  try {
    await newsStore.fetchNews();
  } catch (error) {
    console.log("lỗi lấy ra danh sách tin tuc");
  }
})

const strcontent = (text, length) => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}

const handleDetail = (id) =>{
  newsStore.setNewsId(id);
  router.push("/tin-tuc/chi-tiet")
}

</script>



<style>
.introduce .image-introduce {
  width: 450px;
  text-align: center;
}

.introduce img {
  height: 250px;
  width: auto;
  border-radius: 10px;
}

.introduce .inner-introduce {
  display: flex;
  align-items: center;
  padding: 20px 10px;
  border-bottom: 1px solid #ddd;
}

.introduce .inner-introduce:hover {
  background-color: #0169bf4d;
  border-radius: 10px;
  transition: all 0.4s;
}

.introduce .introduce-content {
  padding: 20px;
  float: 1;
}

.introduce .introduce-content p {
  font-size: 18px;
  margin: 10px 0;
}

.introduce .introduce-content h4 {
  margin: 10px 0;
}

.introduce .introduce-topic{
  color: #0169BF;
}
.introduce .view-add{
  color: #0169BF;
  cursor: pointer;
}
</style>