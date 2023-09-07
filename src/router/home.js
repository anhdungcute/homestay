const home = [
  {
    path: "",
    component: () => import("../layout/home.vue"),
    children: [
      {
        path: "",
        name: "home-first",
        component: () => import("../components/Main/Home/index.vue"),
      },
      {
        path: "",
        name: "detail-home",
        component: () => import("../components/Main/DetailHome/index.vue"),
      },
      {
        path: "",
        name: "about-us",
        component: () => import("../components/Main/AboutUs/index.vue"),
      },
      {
        path: "about-us-homestay",
        name: "about-us-homestay",
        component: () =>
          import("../components/Main/AboutUs/Introduce/index.vue"),
      },
      {
        path: "about-us-apartment-mini",
        name: "about-us-apartment-mini",
        component: () =>
          import("../components/Main/AboutUs/Introduce/index.vue"),
      },
      {
        path: "",
        name: "contact",
        component: () => import("../components/Main/Contact/index.vue"),
      },
      {
        path: "management-homestay",
        name: "management",
        component: () => import("../components/Management/index.vue"),
      },
    ],
  },
];

export default home;
