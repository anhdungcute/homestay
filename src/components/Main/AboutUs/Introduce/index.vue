<template>
  <div>
    <div class="about-us">
      <div>
        <img src="../../../../assets/aboutus.jpg" />
      </div>
      <div class="text-about-us" data-aos="zoom-in-up">
        <h1>
          Giới thiệu về
          {{
            route.name == "about-us-homestay"
              ? "Homestay Ocean park"
              : "Chung cư mini"
          }}
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="about-us-content">
        <div class="row">
          <div
            class="col-lg-12 col-md-12 elementor"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-mirror="false"
            data-aos-once="true"
            data-aos-duration="1000"
          >
            <div class="welcome">
              <h2>
                Chào mừng đến
                {{
                  route.name == "about-us-homestay"
                    ? "Homestay Ocean park"
                    : "Chung cư mini"
                }}
              </h2>
            </div>
            <div class="mb-4">
              <b>
                {{
                  route.name == "about-us-homestay"
                    ? "Homestay Ocean park"
                    : "Chung cư mini"
                }}
                có vị trí đặc địa , hòa mình vào thiên nhiên.</b
              >
            </div>
            <div>
              <p>
                Thoát khỏi sự hối hả và rắc rối của cuộc sống hàng ngày và đến
                với FHomestay, nơi một thế giới thanh bình đang chờ đón bạn. Hãy
                vứt bỏ mọi lo lắng của bạn và hòa mình vào bầu không khí thư
                thái, tuyệt đẹp và được nuông chiều và trẻ hóa..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row">
          <div
            class="col-lg-4 col-md-4 col-sm-6 col-6"
            v-for="(i, n) in dataRoom"
            :key="n"
          >
            <div>
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-once="true"
                class="hero-text xyz-nested"
              >
                <div class="box-image">
                  <img :src="i.img" />
                </div>
                <div class="box-text-product">
                  <div class="title-wrapper">
                    <p class="m-0">{{ i.description }}</p>
                  </div>
                  <div class="price-wrapper">
                    <span class="amount"
                      >{{ i.price ? i.price : "Liên hệ" }}
                      <u style="font-size: 0.7em; padding-bottom: 2px"
                        >đ</u
                      ></span
                    >
                    <span class="wceb-price-format">/ đêm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const dataRoom = ref([
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "dow",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "dow",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "dow",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "dow",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
      {
        img: "https://upanh123.com/wp-content/uploads/2020/09/f676521b471839e8428f79b94441d641.jpg",
        description:
          "Đặt phòng Zhomestay Trực tuyến (Booking Online) từ nền tảng AirBnb",
        price: "550,000",
        show: "",
      },
    ]);
    const contentItem = ref(false);
    created();
    function created() {
      setTimeout(() => {
        title.value = !title.value;
      }, 0);
      setTimeout(() => {
        contentItem.value = !contentItem.value;
      }, 0);
    }
    function handlePush(i) {
      if (i) {
        router.push({
          name: "home-first",
        });
      }
    }
    return { handlePush, route, dataRoom, contentItem };
  },
};
</script>

<style lang="scss" scope>
.about-us {
  position: relative;
  img {
    width: 100%;
    height: 500px;
  }
  .text-about-us {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 2.5rem;
      color: #fff;
      text-transform: uppercase;
    }
  }
}
.about-us-content {
  padding: 50px 30px;
  img {
    width: 100%;
  }
  .about-us-section {
    padding: 100px 20px 0 20px;
    .about-us-section-title {
      text-align: center;
      h1 {
        font-family: cursive;
      }
      p {
        color: #cf9d6c;
        text-transform: capitalize;
        font-size: 1.1rem;
      }
    }
    .about-us-section-content {
      padding-top: 50px;
      .elementor-widget-container {
        margin: 0 0 30px;
        padding: 0 50px 30px;
        // border-style: solid;
        // border-width: 0 1px 0 0;
        // border-color: #e5e5e5;
        text-align: center;
        .elemetor-widget-img {
          padding-bottom: 20px;
        }
        img {
          width: 100px;
          height: 95px;
        }
        h5 {
          font-weight: 700;
          text-transform: uppercase;
        }
        p {
          margin: 0;
          padding-top: 30px;
          color: #6b6460;
          font-size: 1.1rem;
        }
        &:hover {
          h5 {
            color: #cf9d6c;
          }
        }
      }
    }
  }
}
.elementor {
  padding: 0 100px 20px 20px;
  h2 {
    text-transform: uppercase;
    font-size: 2rem;
  }
  b {
    font-size: 1.2rem;
  }
  p {
    color: #6b6460;
    font-size: 1.2rem;
    line-height: 30px;
  }
  .welcome {
    margin: 40px 0;
  }
}
.elementor-icon {
  .elementor-icon-box {
    display: flex;
    align-items: center;
    i {
      font-size: 3.5rem;
    }
  }
  .elementor-icon-box-content {
    display: flex;
    align-items: center;
    color: #000;
    font-family: cursive !important;
    font-size: 0.95rem;
    font-weight: 700;
  }
  &:hover {
    i {
      color: #cf9d6c;
    }
  }
}
@media screen and (max-width: 750px) {
  .text-about-us {
    h1 {
      font-size: 1.7rem !important;
    }
  }
}
@media screen and (max-width: 560px) {
  .about-us {
    img {
      height: 300px !important;
    }
  }
  .about-us-content {
    padding: 60px 30px;
  }
  .text-about-us {
    h1 {
      font-size: 1.5rem !important;
    }
  }
}
.box-image {
  border-radius: 15px;
  position: relative;
  max-height: 287px;
  margin: 0 auto;
  overflow: hidden;
  img {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    cursor: pointer;
  }
}
.box-text-product {
  padding: 10px;
  font-size: 0.9em;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
}
.title-wrapper {
  p {
    color: #334862;
  }
  &:hover {
    p {
      color: #000;
    }
  }
}
</style>
