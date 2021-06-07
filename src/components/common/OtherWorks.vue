<template>
  <div v-if="data">
    <section class="other">
      <div class="container">
        <div class="other__inner">
          <h3 class="other__title" v-html="title"></h3>
          <div v-if="!$root.isMobile" class="other__items">
            <swiper class="swiper other__swiper"
                  :options="swiperOption"
                  ref="swiperTop">
              <swiper-slide
              v-for="(work, w) in data.items"
              :key="w"
              class="other__item"
            >
              <div class="other__item-image">
                <img
                  :src="work.image"
                  :alt="work.name"
                />
              </div>
              <h4 class="other__item-author" v-html="author"></h4>
              <a class="other__item-link" :href="work.link">
                <p v-html="work.name" class="other__item-name"></p>
              </a>
              <p
                class="other__item-description"
                v-for="(option, o) in work.options"
                :key="o"
                v-html="option"
              ></p>
              <h4 class="other__item-price" v-html="work.price"></h4>
            </swiper-slide>
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
            </swiper>
          </div>
          <div v-else class="other__items">
            <div v-for="(work, w) in data.items" :key="w" class="other__item">
              <div class="other__item-image">
                <img
                  :src="work.image"
                  :alt="work.name"
                  v-img="{
                    group: 'other-works',
                    src: work.image,
                  }"
                />
              </div>
              <h4 class="other__item-author" v-html="author"></h4>
              <a class="other__item-link" :href="work.link">
                <p v-html="work.name" class="other__item-name"></p>
              </a>
              <p
                class="other__item-description"
                v-for="(option, o) in work.options"
                :key="o"
                v-html="option"
              ></p>
              <h4 class="other__item-price" v-html="work.price"></h4>
            </div>
            <button class="button button--black" v-html="data.all_works"></button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "OtherWorks",
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        breakpoints: {
          1024: {
            loop: true,
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            loop: true,
            slidesPerView: 3,
            spaceBetween: 15,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  props: {
    title: String,
    author: String,
  },
  computed: {
    data() {
      return this.$store.state.blocks.other_works;
    },
  },
  mounted() {},
  methods: {},
};
</script>
