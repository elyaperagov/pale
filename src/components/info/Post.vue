<template>
  <div v-if="data">
    <section class="post">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
        <div class="container container--narrow">
          <div class="post__inner">
            <h2 class="post__title" v-html="data.post_title"></h2>
            <div class="post__image">
              <img :src="data.image" :alt="data.post_title" />
            </div>
            <div class="post__texts">
              <p
                class="post__texts-item"
                v-for="(text, t) in data.texts"
                :key="t"
                v-html="text"
              ></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";

export default {
  name: "Post",
  components: {
    Breadcrumbs,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.post;
    },
  },
  mounted() {},
  methods: {},
};
</script>
