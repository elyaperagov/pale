<template>
  <div v-if="data">
    <section class="product">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
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
              <div class="swiper-button-next" slot="button-next">
                <svg class="icon" width="20" height="20" aria-hidden="true">
                  <use xlink:href="#swiper-arrow"></use>
                </svg>
              </div>
              <div class="swiper-button-prev" slot="button-prev">
                <svg class="icon" width="20" height="20" aria-hidden="true">
                  <use xlink:href="#swiper-arrow"></use>
                </svg>
              </div>
            </div>
            <div class="product__info">
              <h2 v-html="data.author"></h2>
              <h5 class="product__name" v-html="data.name"></h5>
              <p class="product__description" v-html="data.options"></p>
              <p
                class="product__description"
                v-for="(desc, d) in data.description"
                :key="d"
                v-html="desc"
              ></p>
              <h4 class="product__price" v-html="data.price"></h4>
              <button
                class="button button--black"
                v-html="data.button"
              ></button>
              <a
                class="product__author-link"
                :href="data.author_link.link"
                v-html="data.author_link.text"
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OtherWorks
      :title="data.other_title" :author="data.author"
    ></OtherWorks>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import OtherWorks from "../common/OtherWorks.vue"

export default {
  name: "ProductFull",
  components: {
    Swiper,
    SwiperSlide,
    Breadcrumbs,
    OtherWorks
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      currency: " ₽",
      swiperOptionTop: {
        loop: true,
        loopedSlides: 3,
        slidesPerView: "auto",
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            spaceBetween: 0,
          },
          768: {
            spaceBetween: 0,
          },
          0: {
            spaceBetween: 0,
          },
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 3,
        slidesPerView: "auto",
        spaceBetween: 30,
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
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
    },
  },
  methods: {},
  computed: {
    data() {
      return this.$store.state.blocks.product_full;
    },
  },
};
</script>

<style></style>
