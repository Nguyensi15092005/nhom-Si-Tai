<template>
  <h2>Tổng quát</h2>
  <div class="row">
    <div class="col-4">
      <div class="card">
        <div class="card-header">
          <h3 class="m-0">
            Nhân sự
          </h3>
        </div>
        <div class="card-body">
          <ul>
            <li>
              Số lượng: {{ count }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-4">
      <div class="card">
        <div class="card-header">
          <h3 class="m-0">
            bảng vàng sinh viên
          </h3>
        </div>
        <div class="card-body">
          <ul>
            <li>
              Số lượng Sinh viên trong bảng vàng: {{ countGoldBoard }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-4">
      <div class="card">
        <div class="card-header">
          <h3 class="m-0">
            Tin tức
          </h3>
        </div>
        <div class="card-body">
          <ul>
            <li>
              Số lượng: {{ countNews }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue"; //giống với useEfect chạy sau khi component thực thi song
import { ref } from "vue";
import { useTeacherStore } from "./storeAdmin/storeTeacher";
import { useGoldBoardStore } from "./storeAdmin/storeBangVangSinhVien";
import { userNews } from "./storeAdmin/storeNews";
const count = ref(0);
const countGoldBoard =ref(0);
const countNews =ref(0);
const teacherStore = useTeacherStore();
const goldBoardStore = useGoldBoardStore();
const newsStore = userNews();


const fetchCount = async () => {
  count.value = await teacherStore.countTeacher();
}

const fetchCountGoldBoard = async () => {
  countGoldBoard.value = await goldBoardStore.countGoldBoard();
}

const fetchCountNews= async () => {
  countNews.value = await newsStore.countNews();
}
onMounted(() => {
  fetchCount();
  fetchCountGoldBoard();
  fetchCountNews();
})
</script>