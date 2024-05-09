import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
Swiper.use([Navigation, Pagination]);
import { SwiperOptions } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const infoSwiperWork = function () {
  const SwiperParams: SwiperOptions = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".info__button-next",
      prevEl: ".info__button-prev",
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const infoSwiper = new Swiper(".info__slider", SwiperParams);
};
