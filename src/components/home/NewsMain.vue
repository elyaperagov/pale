<template>
  <section class="news-main" v-if="data">
    <div class="container" v-if="this.$root.width >= 768">
      <div class="news-main__inner">
        <div class="news-main__image">
          <img
            :src="data.img"
            :alt="data.title"
            :width="data.width"
            :height="data.height"
          />
        </div>
        <div class="news-main__texts">
          <h3 v-html="data.title"></h3>
          <p v-html="data.text"></p>
          <button
            class="button button--show-more button--read-more"
            v-html="data.show_more"
          ></button>
        </div>
      </div>
       <SearchMain :search="search"></SearchMain>
    </div>

    <div class="news-main__inner" v-if="this.$root.width < 768">
      <div class="news-main__image">
        <img
          :src="data.img"
          :alt="data.title"
          :width="data.width"
          :height="data.height"
        />
      </div>
      <div class="container">
        <div class="news-main__texts">
          <h3 v-html="data.title"></h3>
          <p v-html="data.text"></p>
          <button
            class="button button--show-more button--read-more"
            v-html="data.show_more"
          ></button>
        </div>
        <SearchMain :search="search"></SearchMain>
      </div>
    </div>
  </section>
</template>

<script>
import SearchMain from "../common/SearchMain.vue";

export default {
  name: "NewsMain",
  components: {
    SearchMain
  },
  data() {
    return {
      mobileBreakpoint: 1024,
      isMobile: false
    };
  },
  methods: {
    toggleMobile() {
      if (this.$root.width <= this.mobileBreakpoint) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    handleResize() {
      this.toggleMobile();
    }
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.handleResize();
  },
  computed: {
    data() {
      return this.$store.state.blocks.news;
    },
     search() {
      return this.$store.state.blocks.search;
    }
  }
};
</script>

<style></style>
