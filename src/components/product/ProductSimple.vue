<template>
  <div v-if="data">
    <section class="product">
      <div class="container container--wide">
        <Breadcrumbs :breadcrumbs="data.breadcrumbs" :title="data.title"></Breadcrumbs>
        <div class="container">
          <div class="product__inner">
          <div class="product__gallery">
            <div class="product__gallery-inner">
              <swiper
                class="swiper product__swiper product__swiper--top"
                :options="swiperOptionTop"
                ref="swiperTop"
              >
                <swiper-slide
                  v-for="(image, i) in data.gallery"
                  :key="i"
                  class="product__item"
                >
                  <div class="product__item-image">
                    <img :src="image" />
                  </div>
                </swiper-slide>
                <div class="swiper-button-next" slot="button-next">
                  <svg class="icon" width="11" height="20" aria-hidden="true">
                    <use xlink:href="#swiper-arrow"></use>
                  </svg>
                </div>
                <div class="swiper-button-prev" slot="button-prev">
                  <svg class="icon" width="11" height="20" aria-hidden="true">
                    <use xlink:href="#swiper-arrow"></use>
                  </svg>
                </div>
              </swiper>
            </div>
            <swiper
              class="swiper product__swiper product__swiper--thumbs"
              :options="swiperOptionThumbs"
              ref="swiperThumbs"
            >
              <swiper-slide
                v-for="(image, i) in data.gallery"
                :key="i"
                class="product__item"
              >
                <div class="product__item-image product__item-image--small">
                  <img :src="image" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="product__info">
            <h2 v-html="data.author"></h2>
            <div class="product__top">
              <p class="product__article" v-html="data.article"></p>

            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "ProductSimple",
  components: {
    Swiper,
    SwiperSlide,
    Breadcrumbs
  },
  directives: {
    swiper: directive
  },
  data() {
    return {
      currency: " ₽",
      swiperOptionTop: {
        breakpoints: {
          768: {
            loop: false,
            slidesPerView: "auto",
            draggable: false,
            spaceBetween: 0
          },
          0: {
            loop: true,
            slidesPerView: "auto",
            spaceBetween: 15
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 30,
        centeredSlides: true,
        slidesPerView: 3,
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {},
  watch: {
    data() {
      if (this.data !== undefined) {
        this.$nextTick(() => {
          const swiperTop = this.$refs.swiperTop.$swiper;
          const swiperThumbs = this.$refs.swiperThumbs.$swiper;
          swiperTop.controller.control = swiperThumbs;
          swiperThumbs.controller.control = swiperTop;
        });
      }
    }
  },
  methods: {
  },
  computed: {
    data() {
      return this.$store.state.blocks.product_simple;
    }
  }
};
</script>

<style></style>
