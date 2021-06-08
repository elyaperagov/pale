<template>
  <section class="virtual">
    <iframe
      v-if="loaded"
      :src="iframe.src"
      :height="height"
      :width="width"
      type="application/pdf"
      frameborder="0"
    ></iframe>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loaded: false,
      width: "100%",
      height: "100%",
      iframe: {
        src:
          "https://kuula.co/share/7zBrt?fs=1&vr=0&zoom=1&thumbs=1&info=1&logo=1",
        style: null,
        wrapperStyle: null
      }
    };
  },
  mounted() {
    this.loaded = true;
  }
};
</script>
