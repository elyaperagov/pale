<template>
  <section class="news" v-if="data">
    <div class="container container--wide">
      <Breadcrumbs
        :breadcrumbs="data.breadcrumbs"
        :title="data.title"
      ></Breadcrumbs>
      <div class="container">
        <div class="news__inner">
          <div class="news__items">
            <a
              v-for="(item, i) in data.items"
              :key="i"
              class="news__item"
              :href="item.link"
            >
              <div class="news__item-image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="news__item-name">
                <h6 v-html="item.name"></h6>
                <hr />
                <p class="news__item-date" v-html="item.date"></p>
              </div>
            </a>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import Pagination from "../common/Pagination.vue";

export default {
  name: "News",
  components: {
    Breadcrumbs,
    Pagination,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.news;
    },
  },
  mounted() {},
  methods: {},
};
</script>
