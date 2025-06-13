import { defineStore } from 'pinia';
import supabase from '@/supabase';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(sessionStorage.getItem('user')) || null
  }),
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {

    async login(email, password) {
      console.log('Login with', { email, password });
      const { data, error } = await supabase
        .from('account')
        .select('id, email, password, status')
        .eq('email', email)
        .single();

      if (error || !data) {
        alert("tài khoản không tồn tại");
        return;
      }
      if (data.password !== password) {
        alert("Sai mật khẩu");
        return;
      }

      // Cập nhật trạng thái đăng nhập
      await supabase
        .from('account')
        .update({ status: true })
        .eq('id', data.id);

      this.user = { id: data.id, email: data.email, status: true };
      sessionStorage.setItem('user', JSON.stringify(this.user));
    },

    // Đăng xuất
    async logout() {
      console.log(this.user);
      if (this.user) {
        await supabase
          .from('account')
          .update({ status: false })
          .eq('id', this.user.id);
      }
      this.user = null;
      sessionStorage.removeItem('user');
    }
  }
});
