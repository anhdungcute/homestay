<template>
  <div id="header-wrapper">
    <div class="custom-background">
      <div class="row align-items-center">
        <div
          class="col-md-2 col-sm-5 col-4 d-lg-flex d-none justify-content-center"
        >
          <div class="row d-flex align-items-center">
            <div class="col-2 p-0">
              <div class="custom-icon-header">
                <i class="fa-solid fa-house"></i>
              </div>
            </div>
            <div class="col-10">
              <span class="text-contact-header"
                >Số 3,ngõ 25 Quang Tiến, Đại Mỗ, Hà nội</span
              >
            </div>
          </div>
        </div>
        <div
          class="col-md-2 col-sm-5 col-4 d-lg-flex d-none justify-content-center"
        >
          <div class="row d-flex align-items-center">
            <div class="col-2 p-0">
              <div class="custom-icon-header">
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div class="col-10">
              <span class="text-contact-header">Email Us ami@example.com</span>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-10 cus-logo">
          <div id="logo">
            <img
              @click="handlePush('home-first')"
              src="../../assets/logo.png"
            />
          </div>
        </div>
        <div class="col-sm-2 col-2 d-md-none d-flex">
          <div
            class="header-button d-flex justify-content-center align-items-center"
            @click="showMenu"
          >
            <i class="fa-solid fa-list"></i
            ><span class="d-sm-flex d-none">Menu</span>
          </div>
        </div>
        <div
          class="col-lg-2 p-0 col-md-4 d-md-flex d-none justify-content-center"
        >
          <div class="number-phone">
            <h5>(+84) 369 525 971</h5>
          </div>
        </div>
        <div class="col-lg-2 p-0 col-md-4 d-md-flex d-none justify-content-end">
          <div class="booking">Đặt phòng ngay</div>
        </div>
      </div>
    </div>
    <div id="menu" class="d-md-flex d-none">
      <div class="container">
        <div class="mt-1">
          <div id="nav">
            <ul
              class="d-flex justify-content-center align-items-center m-0 p-0"
            >
              <!-- <li class="menu-item">
                <el-popover placement="bottom" :width="400">
                  <template #reference>
                    <i
                      class="fa-solid fa-magnifying-glass fs-6"
                      style="color: white"
                    ></i>
                  </template>
                  <div>
                    <el-input
                      v-model="input3"
                      placeholder="Tìm kiếm..."
                      class="input-with-select"
                    >
                      <template #append>
                        <el-button type="danger">
                          <i class="fa-solid fa-magnifying-glass fs-6"></i
                        ></el-button>
                      </template>
                    </el-input>
                  </div>
                  <div>
                    <div v-for="(item, index) in dataRoom" :key="index">
                      <div
                        class="row search-home"
                        @click="handlePush('detail-home')"
                      >
                        <div class="col-2">
                          <div class="search-home-img">
                            <img :src="item.img" />
                          </div>
                        </div>
                        <div class="col-10">
                          <div>
                            {{ item.description }}
                          </div>
                          <div class="pt-1">
                            <b>{{ item.price }}/đêm</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </el-popover>
              </li> -->
              <li class="menu-item" @click="handlePush('home-first')">
                <a>Trang chủ</a>
              </li>
              <li class="menu-item">
                <a
                  >Giới thiệu
                  <i
                    class="fa-solid fa-chevron-down"
                    style="padding-left: 3px"
                  ></i
                ></a>
                <ul class="sub-menu">
                  <li @click="handlePush('about-us')">Giới thiệu chung</li>
                  <li  @click="handlePush('about-us-homestay')">Giới thiệu homestay</li>
                  <li  @click="handlePush('about-us-apartment-mini')">Giới thiệu chung cư mini</li>
                </ul>
              </li>
              <li class="menu-item" @click="handlePush('management')">
                <a>Quản lý</a>
              </li>
              <!-- <li class="menu-item"><a>Airbnb</a></li> -->
              <li class="menu-item" @click="handlePush('contact')">
                <a>liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="res-mobile">
      <el-drawer
        v-model="drawer"
        size="80%"
        direction="ltr"
        :with-header="true"
      >
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item @click="handlePush('home-first')">
            <span>Trang chủ</span>
          </el-menu-item>
          <el-sub-menu>
            <template #title>
              <span>Giới thiệu</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" @click="handlePush('about-us')"
                >Giới thiệu chung</el-menu-item
              >
              <el-menu-item index="1-2" @click="handlePush('about-us-homestay')"
                >Giới thiệu Homestay</el-menu-item
              >
              <el-menu-item index="1-2" @click="handlePush('about-us-apartment-mini')"
                >Giới thiệu Chung cư mini</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item @click="handlePush('contact')">
            <span>Liên hệ</span> </el-menu-item
          >
        </el-menu>
        <!-- <ul class="m-0 p-0 menu-mobile">
          <li class="menu-mobile-item" @click="handlePush('home-first')">
            <a>Trang chủ</a>
          </li>
          <li class="menu-mobile-item" @click="handlePush('about-us')">
            <a>Giới thiệu</a>
          </li>
          <li class="menu-mobile-item" @click="handlePush('contact')">
            <a>liên hệ</a>
          </li>
        </ul> -->
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const drawer = ref(false);
    const router = useRouter();
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
    function handlePush(i) {
      if (i) {
        router.push({
          name: i,
        });
        drawer.value = false;
      }
    }
    function showMenu() {
      drawer.value = true;
    }
    return { drawer, dataRoom, handlePush, showMenu };
  },
};
</script>

<style lang="scss" scope>
#header-wrapper {
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}
#logo img {
  max-width: 200px;
  max-height: auto;
  cursor: pointer;
}
#menu {
  background-color: #423a36;
}
.menu-item {
  list-style: none;
  margin: 0 10px;
  font-size: 0.9em;
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Quicksand", sans-serif;
  color: #7f7f7f;
  cursor: pointer;
  position: relative;
}
.menu-item {
  ul {
    padding: 0;
    background-color: #423a36;
    z-index: 999;
    li {
      padding: 5px;
      font-size: 0.85em;
      color: #fff;
    }
    li:hover {
      color: #cf9d6c;
    }
  }
  .sub-menu {
    position: absolute;
    display: none;
    width: 200px;
  }
}
.menu-item:hover {
  .sub-menu {
    display: block;
  }
}
.header-button {
  color: #c2c6ca;
  cursor: pointer;
  border: 1px solid;
  padding: 5px 10px;
  border-radius: 5px;
  i {
    font-size: 0.75em;
    padding-top: 2px;
  }
  span {
    padding-left: 5px;
    text-transform: uppercase;
    font-size: 0.85em;
  }
}
#nav ul {
  li {
    list-style: none;
    a {
      position: relative;
      display: block;
      text-transform: uppercase;
      margin: 10px 0;
      padding: 5px 5px;
      text-decoration: none;
      color: #fff;
      font-family: "Quicksand", sans-serif;
      font-size: 0.9em;
      font-weight: 700;
      transition: 0.5s;
      z-index: 1;
      &:hover {
        color: #cf9d6c;
        &:before {
          transform: scaleY(1);
          opacity: 1;
        }
        &:after {
          transform: scaleY(1);
          opacity: 1;
        }
      }
    }
  }
}
.custom-background {
  padding: 10px 0;
  margin: 0 25px;
}
.custom-icon-header {
  width: 35px;
  height: 35px;
  border: 1px solid #cf9d6c;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: #cf9d6c;
  }
}
.text-contact-header {
  font-size: 14px;
}
.number-phone {
  color: #cf9d6c;
}
.booking {
  padding: 8px 20px;
  color: #fff;
  background: #cf9d6c;
  border-radius: 5px;
  cursor: pointer;
}
.res-mobile {
  .el-drawer__body {
    padding: 0 !important;
  }
}
.menu-mobile {
  .menu-mobile-item {
    list-style: none;
    padding: 10px 15px;
    box-shadow: inset 0 -1px #ebebeb;
    text-align: center;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Quicksand", sans-serif;
    color: #7f7f7f;
    cursor: pointer;
    &:hover {
      a {
        color: #cf9d6c;
      }
    }
  }
}
.search-home {
  align-items: center;
  padding: 10px 0;
  cursor: pointer;
  .search-home-img {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
}

@media screen and (min-width: 900px) {
  .cus-logo {
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 560px) {
  #logo {
    img {
      max-width: 150px;
      max-height: auto;
      cursor: pointer;
    }
  }
}
</style>
