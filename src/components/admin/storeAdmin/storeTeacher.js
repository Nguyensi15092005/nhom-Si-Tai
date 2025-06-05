import { defineStore } from "pinia";
import supabase from "@/supabase";

export const useTeacherStore = defineStore('teacher', {
    state: () => ({
        teacher: [],
        TeacherId: null,
    }),
    actions: {

        // tải tệp và trả về URL
        async uploadAvatar(file) {
            if (!file) {
                alert('Bạn chưa chọn ảnh !!!');
                return; 
            }

            const fileName = `${Date.now()}-${file.name}`; //
            const bucketName = 'teacher'; 

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
        setTeacherId(id) {
            this.TeacherId = id;
        },

        // lâý số lượng giảng viên 
        async countTeacher() {
            const { count, error } = await supabase
                .from('teacher')
                .select('*', { count: 'exact', head: true });

            if (error) {
                console.error('Lỗi khi đếm:', error);
                return;
            }
            console.log('Số lượng bản ghi:', count);
            return count
        },

        // lấy theo giảng viên theo id
        async fetchTeacherById(id) {
            const { data, error } = await supabase
                .from('teacher')
                .select('*')
                .eq('id', id)
                .single(); // Chỉ lấy một bản ghi

            if (error) {
                console.error("Lỗi khi lấy giáo viên theo ID:", error);
                throw error;
            }
            return data;
        },


        // thêm mới giảng viên
        async addTeacher(teacher) {
            const { data, error } = await supabase
                .from('teacher')
                .insert([teacher.value])
                .select();

            if (error) {
                console.error("Lỗi Supabase khi thêm giáo viên:", error);
                throw error; // Ném lỗi 
            }

            if (data && data.length > 0) {
                this.teacher.push(data[0]); // Đẩy đối tượng giáo viên đầu tiên vào state
            }

            return data; // Trả về dữ liệu đã chèn
        },

        // Cập nhật Giảng viên 
        async updateTeacher(id, newData) {
            const { data, error } = await supabase
                .from('teacher')
                .update(newData)
                .eq('id', id)
                .select('*')
            if (error) {
                console.error("Lỗi khi cập nhật:", error);
                throw error;
            }
            if (data && data.length > 0) {
                const teacherId = this.teacher.findIndex(item => item.id === id);
                if (teacherId !== -1) {
                    this.teacher[teacherId] = data[0]; // Cập nhật bản ghi trong state
                }
            } else {
                console.warn("Cập nhật thành công");
            }

            return data; // Trả về dữ liệu của bản ghi đã cập nhật
        },

        // Xóa Giảng viên
        async delete(id) {
            const { error } = await supabase
                .from('teacher')
                .delete()
                .eq('id', id);

            if (error) {
                console.error("Lỗi khi xoá", error);
                throw error;
            }

            // Xoá thành công thì cập nhật lại state
            this.teacher = this.teacher.filter(teacher => teacher.id !== id);
        },


        // lấy tất cả giáo viên
        async fetchTeacher() {
            const { data, error } = await supabase
                .from('teacher')
                .select('*')
            if (error) throw error
            this.teacher = data
            // console.log("Dữ liệu teacher trong store:", this.teacher);
        }
    },
})