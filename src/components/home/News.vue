<template>
  <section class="news" v-if="data">
    <div class="container">
      <div class="news__inner">
        <div class="news__image">
          <img
            :src="data.img"
            :alt="data.title"
            :width="data.width"
            :height="data.height"
          />
        </div>
        <div class="news__texts">
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
  name: "News",
  computed: {
    data() {
      return this.$store.state.blocks.news;
    }
  }
};
</script>

<style></style>
