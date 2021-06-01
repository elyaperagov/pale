<template>
  <div v-if="data" class="banners">
    <section
      class="banners__wrapper"
    >
      <div class="container">
        <div class="banners__inner">
          <div class="banners__promo">
            <h1 v-html="data.title"></h1>
            <p v-html="data.text"></p>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>
export default {
  data() {
    return {
      mobileBreakpoint: 768,
      windowWidth: window.innerWidth,
      isMobile: false,
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.banners;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
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
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
  components: {
  },
};
</script>