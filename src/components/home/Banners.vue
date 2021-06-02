<template>
  <section class="banners" v-if="data">
    <div class="container">
      <h1 class="banners__page-title visually-hidden" v-html="data.title"></h1>
      <div class="banners__inner">
        <swiper
          class="swiper banners__swiper"
          ref="swiper"
          :options="SliderOptions"
        >
          <swiper-slide
            v-for="(banner, b) in data.items"
            :key="b"
            class="banners__item"
          >
            <div class="banners__wrapper">
              <div class="banners__content">
                <h2 v-html="banner.title"></h2>
                <p class="banners__text" v-html="banner.subtitle"></p>
                <button class="button button--brown button--banner" v-html="banner.button_text"></button>
              </div>

              <div class="banners__image">
                <img loading="lazy" :src="banner.image" :alt="banner.title" />
              </div>
            </div>
          </swiper-slide>
           <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Banners",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      SliderOptions: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      }
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.banners;
    }
  },
  mounted() {},
  methods: {},
  mounted() {},
  beforeDestroy() {}
};
</script>
