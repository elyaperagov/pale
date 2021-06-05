<template>
  <section class="news-main" v-if="data">
    <div class="container" v-if="!isMobile">
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
    </div>

    <div class="news-main__inner" v-if="isMobile">
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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "NewsMain",
  data() {
    return {
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
    }
  },
  methods: {
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
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
    this.toggleMobile();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
  computed: {
    data() {
      return this.$store.state.blocks.news;
    }
  }
};
</script>

<style></style>
