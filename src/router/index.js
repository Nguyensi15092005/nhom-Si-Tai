import { createRouter, createWebHistory } from 'vue-router';
import {useAuthStore} from '../components/admin/storeAdmin/storeAuth';


import defaultLayout from '@/layout/defaultLayout.vue';
import Home from '@/components/view/Home.vue';
import Gioithieu from '@/components/view/Giới thiệu/Gioithieu.vue';
import Lichsuhinhthanh from '@/components/view/Giới thiệu/lichsuhinhthanh.vue';
import DoiNguGiangVien from '@/components/view/Giới thiệu/DoiNguGiangVien.vue';
import BangVang from '@/components/view/Bảng vàng/BangVang.vue';
import ThanhTichGianVien from '@/components/view/Bảng vàng/ThanhTichGianVien.vue';
import ThanhTichSinhVien from '@/components/view/Bảng vàng/ThanhTichSinhVien.vue';
import TinCongNghee from '@/components/view/Tin mới nhất/TinCongNghee.vue';
import TinCongNgheAI from '@/components/view/Tin mới nhất/TinCongNgheAI.vue';
import HoTroSinhVien from '@/components/view/Tin mới nhất/HoTroSinhVien.vue';
import Workshop from '@/components/view/Bài viết nổi bật/Workshop.vue';
import WorkshopDinhHuongNN from '@/components/view/Bài viết nổi bật/WorkshopDinhHuongNN.vue';
import HoiThaoCoHoiNN from '@/components/view/Bài viết nổi bật/HoiThaoCoHoiNN.vue';
import Admin from '@/components/admin/Admin.vue';
import TrangChu from '@/components/admin/TrangChu.vue';
import NhanSu from '@/components/admin/Quản lý nhân sự/NhanSu.vue';
import ThemMoi from '@/components/admin/Quản lý nhân sự/create.vue';
import ChinhSua from '@/components/admin/Quản lý nhân sự/update.vue';
import ChiTiet from '@/components/admin/Quản lý nhân sự/detail.vue';
import ChiTietGiangVien from '@/components/view/Giới thiệu/ChiTietGiangVien.vue';
import LienHe from '@/components/view/liên hệ/LienHe.vue';
import Login from '@/components/admin/Login.vue';
import BangVangSinhVien from '@/components/admin/BangVang/BangVangSinhVien.vue';
import TheMoiBangVangSinhVien from '@/components/admin/BangVang/create.vue';
import SuaSinhVienTrongBangVang from "@/components/admin/BangVang/edit.vue";
import QuanLyTinTuc from "@/components/admin/Quan lý tin tức/TinTuc.vue";
import ThemMoiTinTuc from "@/components/admin/Quan lý tin tức/create.vue";
import ChinhSuaTinTuc from "@/components/admin/Quan lý tin tức/update.vue";
import ChiTietTinTuc from "@/components/admin/Quan lý tin tức/detail.vue";
import TinTuc from "@/components/view/Tin tức/TinTuc.vue";
import ChiTietTinTucClient from "@/components/view/Tin tức/ChiTietTinTuc.vue";
import TuyenSinh from '@/components/view/Tuyển sinh/TuyenSinh.vue';
import ThucTapDoanhNgiep from '@/components/view/Hỗ trợ sinh viên/ThucTapDoanhNgiep.vue';

const routes = [
    {
        path: "/",
        component: defaultLayout,
        children: [
            {
                path: "",
                component: Home
            },
            {
                path: "gioi-thieu",
                component: Gioithieu
            },
            {
                path: "gioi-thieu/lich-su-hinh-thanh",
                component: Lichsuhinhthanh
            },
            {
                path: "gioi-thieu/doi-ngu-giang-vien",
                component: DoiNguGiangVien
            },
            {
                path: "gioi-thieu/doi-ngu-giang-vien/chi-tiet-giang-vien",
                component: ChiTietGiangVien
            },
            {
                path: "bang-vang",
                component: BangVang
            },
            {
                path: "bang-vang/thanh-tich-gian-vien",
                component: ThanhTichGianVien
            },
            {
                path: "bang-vang/thanh-tich-sinh-vien",
                component: ThanhTichSinhVien
            },
            {
                path: "tin-tuc/tin-cong-nghe",
                component: TinCongNghee
            },
            {
                path: "tin-tuc",
                component: TinTuc
            },
            {
                path: "tin-tuc/chi-tiet",
                component: ChiTietTinTucClient
            },
            {
                path: "tin-tuc/tin-cong-nghe-AI",
                component: TinCongNgheAI
            },
            {
                path: "tin-tuc/ho-tro-sinh-vien",
                component: HoTroSinhVien
            },
            {
                path: "tin-tuc/thong-bao/workshop-ui-ux-hanh-trang-ung-tuyen-vao-cong-ty-tech",
                component: Workshop
            },
            {
                path: "tin-tuc/hoi-thao-chuyen-de/workshop-dinh-huong-nghe-nghiep-cho-sinh-vien-khoa-cntt",
                component: WorkshopDinhHuongNN
            },
            {
                path: "tin-tuc/hoi-thao-chuyen-de/hoi-thao-co-hoi-nghe-nghiep-va-tang-ten-mien-cho-tan-sinh-vien-k19",
                component: HoiThaoCoHoiNN
            },
            {
                path: "lien-he",
                component: LienHe
            },

            {
                path: "tuyen-sinh",
                component: TuyenSinh
            },
            {
                path: "ho-tro-sinh-vien/thuc-tap-doanh-nghiep",
                component: ThucTapDoanhNgiep
            },
        ]
    },
    {
        path: "/admin-login",
        component: Login,
    },

    {
        path: "/admin",
        component: Admin,
        meta: { requiresAuth: true },
        children: [
            {
                path: "",
                component: TrangChu,
            },
            {
                path: "quan-ly-nhan-su",
                component: NhanSu,
            },
            {
                path: "quan-ly-nhan-su/them-moi-nhan-su",
                component: ThemMoi
            },
            {
                path: "quan-ly-nhan-su/chinh-sua-nhan-su",
                component: ChinhSua
            },
            {
                path: "quan-ly-nhan-su/chi-tiet-nhan-su",
                component: ChiTiet
            },
            {
                path: "quan-ly-bang-vang-sinh-vien",
                component: BangVangSinhVien
            },
            {
                path: "quan-ly-bang-vang-sinh-vien/them-moi-bang-vang-sinh-vien",
                component: TheMoiBangVangSinhVien
            },
            {
                path: "quan-ly-bang-vang-sinh-vien/sua-sinh-vien-bang-vang",
                component: SuaSinhVienTrongBangVang
            },
            {
                path: "quan-ly-tin-tuc",
                component: QuanLyTinTuc
            },
            {
                path: "quan-ly-tin-tuc/them-moi-tin-tuc",
                component: ThemMoiTinTuc
            },
            {
                path: "quan-ly-tin-tuc/chinh-sua-tin-tuc",
                component: ChinhSuaTinTuc
            },
            {
                path: "quan-ly-tin-tuc/chi-tie-tin-tuc",
                component: ChiTietTinTuc
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});


router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return next('/admin-login');
  }

  next();
});

export default router;
