<template>
  <div class="row">
    <div class="col-12 p-0">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active position-relative">
            <img src="/image/ảnh baner 1.jpg" class="d-block w-100" alt="...">
            <div class="banner-overlay">
              <div class="inner-about">
                <h2>
                  Giới thiệu khoa CNTT HCE
                </h2>
                <p>Khoa Công nghệ thông tin đào tạo sinh viên với nền tảng vững chắc trong các lĩnh vực như lập trình,
                  mạng máy tính, cơ sở dữ liệu và an ninh mạng. Chúng tôi cam kết cung cấp kiến thức chuyên môn
                  và kỹ năng thực tế, giúp sinh viên sẵn sàng đối mặt với những thách thức trong ngành công nghệ.
                  Với đội ngũ giảng viên giàu kinh nghiệm, khoa luôn nỗ lực tạo ra môi trường học tập sáng tạo và năng
                  động.
                </p>
              </div>
            </div>
          </div>
          
          <div class="carousel-item position-relative">
            <img src="/image/ảnh banner 2.jpg" class="d-block w-100" alt="...">
            <div class="banner-overlay">
              <div class="inner-about">
                <h2>
                  Giới thiệu khoa CNTT HCE
                </h2>
                <p>Khoa Công nghệ thông tin đào tạo sinh viên với nền tảng vững chắc trong các lĩnh vực như lập trình,
                  mạng máy tính, cơ sở dữ liệu và an ninh mạng. Chúng tôi cam kết cung cấp kiến thức chuyên môn
                  và kỹ năng thực tế, giúp sinh viên sẵn sàng đối mặt với những thách thức trong ngành công nghệ.
                  Với đội ngũ giảng viên giàu kinh nghiệm, khoa luôn nỗ lực tạo ra môi trường học tập sáng tạo và năng
                  động.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="/image/anh_banner_3.jpg" class="d-block w-100" alt="...">
            <div class="banner-overlay">
              <div class="inner-about">
                <h2>
                  Giới thiệu khoa CNTT HCE
                </h2>
                <p>Khoa Công nghệ thông tin đào tạo sinh viên với nền tảng vững chắc trong các lĩnh vực như lập trình,
                  mạng máy tính, cơ sở dữ liệu và an ninh mạng. Chúng tôi cam kết cung cấp kiến thức chuyên môn
                  và kỹ năng thực tế, giúp sinh viên sẵn sàng đối mặt với những thách thức trong ngành công nghệ.
                  Với đội ngũ giảng viên giàu kinh nghiệm, khoa luôn nỗ lực tạo ra môi trường học tập sáng tạo và năng
                  động.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="/image/anh_banner_4.png" class="d-block w-100" alt="...">
            <div class="banner-overlay">
              <div class="inner-about">
                <h2>
                  Giới thiệu khoa CNTT HCE
                </h2>
                <p>Khoa Công nghệ thông tin đào tạo sinh viên với nền tảng vững chắc trong các lĩnh vực như lập trình,
                  mạng máy tính, cơ sở dữ liệu và an ninh mạng. Chúng tôi cam kết cung cấp kiến thức chuyên môn
                  và kỹ năng thực tế, giúp sinh viên sẵn sàng đối mặt với những thách thức trong ngành công nghệ.
                  Với đội ngũ giảng viên giàu kinh nghiệm, khoa luôn nỗ lực tạo ra môi trường học tập sáng tạo và năng
                  động.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>

</template>

<style>
.carousel-inner {
  position: relative;
  width: 100%;
  height: 650px;
}

.carousel-inner img {
  width: 100%;
  height: 650px;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-item {
  position: relative;
}

.carousel-inner .banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

.banner-overlay .inner-about {
  padding: 20px;
  text-align: center;
  color: white;
  /* Màu chữ mặc định */
  /* background-color: rgba(0, 0, 0, 0.7); /* Màu nền cho vùng chữ nếu cần */
  border-radius: 5px;
  max-width: 80%;
}

.banner-overlay .inner-about h2 {
  color: white;
  font-size: 40px;
}

.banner-overlay .inner-about p {
  color: white;
  font-size: 20px;
}
</style>