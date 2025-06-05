<template>
  <div class="row d-flex justify-content-center">
    <div class="col-5 inner-right mt-5">
      <div class="login-container">
        <div class="login">
          <i class="fas fa-user"></i>
          <form class="frm" id="frm-login" @submit.prevent="handleSubmit" action="#" method="post">
            <div class="input-group-one">
              <input type="email" v-model="email" class="username" placeholder="Email" required>
            </div>
            <div class="input-group-two">
              <input type="password" v-model="password" class="password" placeholder="Password" required>
            </div>
            <div class="btn-submit">
              <button type="submit" class="btn-login">Đăng Nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script setup>
import supabase from "@/supabase";
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  try {
    if (!email.value || !password.value) {
      alert('Vui lòng nhập Email và Mật khẩu.');
      return;
    }

    const { data: userData } = await supabase
      .from('account')
      .select('*')
      .eq('email', email.value) 
      .single();
    
    if(email.value !== userData.email){
      alert("Email không tồn tại");
      return;
    }

    if(password.value !== userData.password ){
      alert("Sai mật khẩu");
      return;
    }

    router.push('/admin/trang-chu');

  } catch (err) {
    alert('lỗi .Vui lòng thử lại');
  }
}

</script>




