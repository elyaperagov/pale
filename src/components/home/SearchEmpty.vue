<template>
  <section class="search-page" v-if="data">
    <Breadcrumbs :breadcrumbs="data.breadcrumbs"></Breadcrumbs>
    <div class="search-page__wrapper">
      <div class="container">
        <div class="search-page__inner">
          <h2>{{ data.title }} «{{ data.request }}»</h2>
          <div class="search-page__pages">
            <p class="search-page__empty-result" v-html="data.results"></p>
          </div>
        </div>
        <SearchMain :search="search"/>
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
      return this.$store.state.blocks.search_empty;
    },
    search() {
      return this.$store.state.blocks.search;
    }
  }
};
</script>

<style></style>
