import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const mainSwiperWork = function () {
  const SwiperParams:SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   type: "progressbar",
    // },
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mainSwiper = new Swiper(".card__slider", SwiperParams);
};
