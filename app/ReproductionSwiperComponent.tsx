"use client";
import React, { useEffect, useRef } from "react";
import { SwiperContainer, register } from "swiper/element";
import { Autoplay, EffectCreative } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export default function ReproductionSwiperComponent() {
  const swiperRef = useRef<SwiperContainer>(null);
  useEffect(() => {
    register();

    const options: SwiperOptions = {
      direction: "vertical",
      loop: true,
      speed: 2500,
      slidesPerView: 1,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
      modules: [Autoplay, EffectCreative],
    };

    if (swiperRef.current) {
      Object.assign(swiperRef.current, options);
      swiperRef.current.initialize();
    }
  }, []);

  return (
    <swiper-container init={false} ref={swiperRef} style={{ height: "100%" }}>
      <swiper-slide>test1</swiper-slide>
      <swiper-slide>test2</swiper-slide>
      <swiper-slide>test3</swiper-slide>
    </swiper-container>
  );
}
