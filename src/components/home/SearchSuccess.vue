<template>
  <section class="search-page" v-if="data">
    <Breadcrumbs :breadcrumbs="data.breadcrumbs"></Breadcrumbs>
    <div class="search-page__wrapper">
      <div class="container">
        <div class="search-page__inner">
          <h2>{{ data.title }} «{{ data.request }}»</h2>
          <div class="search-page__pages">
            <div
              class="search-page__page"
              v-for="(result, i) in data.results"
              :key="i"
            >
              <div class="search-page__image">
                <a :href="result.href">
                  <img :src="result.img" :alt="result.page_title" />
                </a>
              </div>
              <div class="search-page__texts">
                <a
                  class="search-page__page-title"
                  :href="result.href"
                  v-html="result.page_title"
                ></a>
                <p class="search-page__text" v-html="result.text"></p>
              </div>
            </div>
          </div>
        </div>
        <SearchMain :search="search" />
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import SearchMain from "../common/SearchMain.vue";

export default {
  name: "SearchResults",
  components: {
    Breadcrumbs,
    SearchMain
  },
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.state.blocks.search_success;
    },
    search() {
      return this.$store.state.blocks.search;
    }
  }
};
</script>

<style></style>
