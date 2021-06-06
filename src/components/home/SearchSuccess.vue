<template>
  <section class="search-success" v-if="data">
    <Breadcrumbs :breadcrumbs="data.breadcrumbs"></Breadcrumbs>
    <div class="search-success__wrapper">
      <div class="container">
        <div class="search-success__inner">
          <h2>{{ data.title }} «{{ data.request }}»</h2>
          <div class="search-success__pages">
            <div
              class="search-success__page"
              v-for="(result, i) in data.results"
              :key="i"
            >
              <div class="search-success__image">
                <img :src="result.img" :alt="result.page_title" />
              </div>
              <div class="search-success__texts">
                <p
                  class="search-success_page-title"
                  v-html="result.page_title"
                ></p>
                <p class="search-success_text" v-html="result.text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";

export default {
  name: "SearchResults",
  components: {
    Breadcrumbs
  },
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.state.blocks.search_page;
    }
  }
};
</script>

<style></style>
