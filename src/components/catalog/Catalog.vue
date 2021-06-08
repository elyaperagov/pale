<template>
  <section class="catalog" v-if="data">
    <Breadcrumbs
      :breadcrumbs="data.breadcrumbs"
      :title="data.title"
    ></Breadcrumbs>
    <div class="container">
      <div class="catalog__products">
        <CatalogItems :catalog_items="catalog_items"/>
        <Pagination class="pagination--catalog"/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import Pagination from "../common/Pagination.vue";
import CatalogItems from "./CatalogItems.vue";

export default {
  name: "Catalog",
  components: {
    Breadcrumbs,
    Pagination,
    CatalogItems
  },
  data() {
    return {
      currency: "₽"
      // count: 9
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.catalog;
    },
    catalog_items() {
      return this.$store.state.blocks.catalog.products;
    },
  }
};
</script>

<style></style>
