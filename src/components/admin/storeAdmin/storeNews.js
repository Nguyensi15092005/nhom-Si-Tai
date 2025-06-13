import { defineStore } from "pinia";
import supabase from "@/supabase";

export const userNews = defineStore('news', {
    state: () => ({
        news: [],
        NewsId: null,
    }),
    actions: {

        // tải tệp và trả về URL
        async uploadAvatar(file) {
            if (!file) {
                alert('Bạn chưa chọn ảnh !!!');
                return; 
            }
            const fileName = `${Date.now()}-${file.name}`; //
            const bucketName = 'news'; 
            try {
                // Tải tệp lên
                const { error: uploadError } = await supabase.storage
                    .from(bucketName)
                    .upload(fileName, file);

                if (uploadError) {
                    alert("Lỗi khi tải ảnh lên!!!");
                    return;
                }

                // Lấy URL công khai public
                const { data: publicUrlData } = supabase.storage
                    .from(bucketName)
                    .getPublicUrl(fileName);

                if (!publicUrlData || !publicUrlData.publicUrl) {
                    alert("Không thể lấy URL công khai sau khi tải lên");
                    return;
                }

                return publicUrlData.publicUrl;
            } catch (error) {
                console.error("Lỗi khi tải lên ảnh giảng viên:", error.messade);
                return;
            }
        },

        // lấy id
        setNewsId(id) {
            this.NewsId = id;
        },

        // lâý số lượng giảng viên 
        async countNews() {
            const { count, error } = await supabase
                .from('news')
                .select('*', { count: 'exact', head: true });

            if (error) {
                console.error('Lỗi khi đếm:', error);
                return;
            }
            console.log('Số lượng bản ghi:', count);
            return count
        },

        // lấy theo giảng viên theo id
        async fetchNewsById(id) {
            const { data, error } = await supabase
                .from('news')
                .select('*')
                .eq('id', id)
                .single(); // Chỉ lấy một bản ghi

            if (error) {
                console.error("Lỗi khi lấy tin tuc theo ID:", error);
                throw error;
            }
            return data;
        },


        // thêm mới giảng viên
        async addNews(news) {
            const { data, error } = await supabase
                .from('news')
                .insert([news.value])
                .select();

            if (error) {
                console.error("Lỗi Supabase khi thêm tin tuc:", error);
                throw error; // Ném lỗi 
            }

            if (data && data.length > 0) {
                this.news.push(data[0]); // Đẩy đối tượng giáo viên đầu tiên vào state
            }

            return data; // Trả về dữ liệu đã chèn
        },

        // Cập nhật Giảng viên 
        async updateNews(id, newData) {
            const { data, error } = await supabase
                .from('news')
                .update(newData)
                .eq('id', id)
                .select('*')
            if (error) {
                console.error("Lỗi khi cập nhật:", error);
                throw error;
            }
            if (data && data.length > 0) {
                const newsId = this.news.findIndex(item => item.id === id);
                if (newsId !== -1) {
                    this.news[newsId] = data[0]; // Cập nhật bản ghi trong state
                }
            } else {
                console.warn("Cập nhật thành công");
            }

            return data; // Trả về dữ liệu của bản ghi đã cập nhật
        },

        // Xóa Giảng viên
        async delete(id) {
            const { error } = await supabase
                .from('news')
                .delete()
                .eq('id', id);

            if (error) {
                console.error("Lỗi khi xoá", error);
                throw error;
            }

            // Xoá thành công thì cập nhật lại state
            this.news = this.news.filter(news => news.id !== id);
        },


        // lấy tất cả giáo viên
        async fetchNews() {
            const { data, error } = await supabase
                .from('news')
                .select('*')
            if (error) {
                alert("lỗi đọc danh sách tin tuc");
            }
            this.news = data
            // console.log("Dữ liệu teacher trong store:", this.teacher);
        }
    },
})