<template>
    <h2 style="color:#0169BF;" class="text-center mt-1">Chuyên mục: Giới thiệu</h2>
    <div class="row introduce d-flex justify-content-center">
        <div class="col-10 inner-introduce">
            <router-link to="/gioi-thieu/lich-su-hinh-thanh" class="image-introduce">
                <img src="/image/lichsuht.jpg" alt="anh lich-su-hinh-thanh">
            </router-link>
            <div class="introduce-content">
                <router-link to="/gioi-thieu/lich-su-hinh-thanh">Giới thiệu</router-link>
                <h4>
                    lịch sử hình thành
                </h4>
                <p class="inner-content">
                    LỊCH SỬ HÌNH THÀNH Năm 1989: Tổ Tin học được hình thành với 3 thành …
                </p>
                <router-link to="/lich-su-hinh-thanh">
                    Xem thêm >>
                </router-link>
            </div>
        </div>
        <div class="col-10 inner-introduce">
            <router-link to="/gioi-thieu/doi-ngu-giang-vien" class="image-introduce">
                <img src="/image/doingunhasu.jpg" alt="anh doi ngu nhan su">
            </router-link>
            <div class="introduce-content">
                <router-link to="/gioi-thieu/doi-ngu-giang-vien">Giới thiệu</router-link>
                <h4>
                    Đội ngủ nhân sự
                </h4>
                <p class="inner-content">
                    LỊCH SỬ HÌNH THÀNH Năm 1989: Tổ Tin học được hình thành với 3 thành …
                </p>
                <router-link to="/doi-ngu-giang-vien">
                    Xem thêm >>
                </router-link>
            </div>
        </div>
        <div class="col-10 inner-introduce">
            <router-link to="/" class="image-introduce">
                <img src="/image/lienhe.jpg" alt="anh lien he">
            </router-link>
            <div class="introduce-content">
                <router-link to="/">Giới thiệu</router-link>
                <h4>
                    Liên hệ
                </h4>
                <p class="inner-content">
                    LỊCH SỬ HÌNH THÀNH Năm 1989: Tổ Tin học được hình thành với 3 thành …
                </p>
                <router-link to="/">
                    Xem thêm >>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style>
.introduce .image-introduce{
    width: 450px;
    text-align: center;
}
.introduce img{
    height: 250px;
    width: auto;
}
.introduce .inner-introduce{
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
.introduce .introduce-content{
    padding: 20px;
    float: 1;
}
.introduce .introduce-content p{
    font-size: 18px;
    margin: 10px 0;
}
.introduce .introduce-content h4{
    margin: 10px 0;
}
</style>