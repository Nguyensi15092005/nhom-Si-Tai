import { defineStore } from "pinia";
import supabase from "@/supabase";

export const useGoldBoardStore = defineStore('goldBoard', {
    state: () => ({
        goldBoard: [],
        GoldBoardId: null,
    }),
    actions: {

        // lấy id
        setGoldBoardId(id) {
            this.GoldBoardId = id;
        },

        // lâý số lượng giảng viên 
        async countGoldBoard() {
            const { count, error } = await supabase
                .from('goldBoard')
                .select('*', { count: 'exact', head: true });

            if (error) {
                console.error('Lỗi khi đếm:', error);
                return;
            }
            console.log('Số lượng bản ghi:', count);
            return count
        },

        // lấy theo giảng viên theo id
        async fetchGoldBoardById(id) {
            const { data, error } = await supabase
                .from('goldBoard')
                .select('*')
                .eq('id', id)
                .single(); // Chỉ lấy một bản ghi

            if (error) {
                console.error("Lỗi khi lấy sinh viên trong bảng vàng theo ID:", error);
                alert("Lỗi khi lấy sinh viên trong bảng vàng theo ID");
            }
            return data;
        },


        // thêm mới Sinh viên vào bảng vàng
        async addGoldBoard(goldBoard) {
            const { data, error } = await supabase
                .from('goldBoard')
                .insert([goldBoard.value])
                .select();

            if (error) {
                console.error("Lỗi Supabase khi thêm sinh viên:", error);
                throw error; // Ném lỗi 
            }

            if (data && data.length > 0) {
                this.goldBoard.push(data[0]); 
            }

            return data;
        },

        // Cập nhật sinh viên trong bản vàng
        async editGoldBoard(id, newData) {
            const { data, error } = await supabase
                .from('goldBoard')
                .update(newData)
                .eq('id', id)
                .select('*')
            if (error) {
                console.error("Lỗi khi cập nhật:", error);
                throw error;
            }
            if (data && data.length > 0) {
                const goldBoard = this.goldBoard.findIndex(item => item.id === id);
                if (goldBoard !== -1) {
                    this.goldBoard[goldBoard] = data[0]; // Cập nhật bản ghi trong state
                }
            } else {
                console.warn("Cập nhật thành công");
            }

            return data; // Trả về dữ liệu của bản ghi đã cập nhật
        },

        async fetchGoldBoard() {
            const { data, error } = await supabase
                .from('goldBoard')
                .select('*')
            if (error) {
                alert("lỗi đọc danh sách sinh viên trong bảng vàng");
            }
            this.goldBoard = data
        }
    },
})