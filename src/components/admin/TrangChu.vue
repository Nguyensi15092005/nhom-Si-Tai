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
  </div>
</template>

<script setup>
import { onMounted } from "vue"; //giống với useEfect chạy sau khi component thực thi song
import { ref } from "vue";
import { useTeacherStore } from "./storeAdmin/storeTeacher";
const count = ref(0);
const teacherStore = useTeacherStore();

const fetchCount = async () => {
  count.value = await teacherStore.countTeacher();
  console.log(count.value)
}
onMounted(() => {
  fetchCount();
})
</script>