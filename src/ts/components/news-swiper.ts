import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const newsSwiperWork = function () {
  const SwiperParams: SwiperOptions = {
    // spaceBetween: 30,
    // slidesPerView: 3,
    loop: true,
    breakpoints: {
      375: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      400: {
        slidesPerView: 1.2,
        spaceBetween: 50,
      },
      450: {
        slidesPerView: 1.3,
        spaceBetween: 30,
      },

      500: {
        slidesPerView: 1.4,
        spaceBetween: 30,
      },
      550: {
        slidesPerView: 1.6,
        spaceBetween: 40,
      },

      576: {
        slidesPerView: 1.5,
        spaceBetween: 70,
      },

      600: {
        slidesPerView: 1.6,
        spaceBetween: 70,
      },

      700: {
        slidesPerView: 1.8,
        spaceBetween: 70,
      },

      800: {
        slidesPerView: 1.9,
        spaceBetween: 70,
      },

      900: {
        slidesPerView: 2,
        spaceBetween: 70,
      },

      1000: {
        slidesPerView: 2.2,
        spaceBetween: 50,
      },

      1100: {
        slidesPerView: 2.5,
        spaceBetween: 40,
      },

      1250: {
        slidesPerView: 2.8,
        spaceBetween: 20,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".news__button-next",
      prevEl: ".news__button-prev",
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const newsSwiperWork = new Swiper(".news__slider", SwiperParams);
};
