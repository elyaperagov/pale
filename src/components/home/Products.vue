<template>
  <div class="products" v-if="data">
    <div class="container">
      <Filters :filters="filters" v-if="!$root.isTablet" />

      <div class="products__content">
        <CatalogItems
          ref="catalog_items"
          :itemsToShow="itemsToShow"
          :catalog_items="catalog_items"
        />
      </div>
      <button
        class="button button--show-more"
        v-if="this.itemsToShow <= this.catalog_items.length"
        @click.prevent="loadMore()"
      >
        {{ data.show_more }}
      </button>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters.vue";
import CatalogItems from "../catalog/CatalogItems.vue";

export default {
  name: "Products",
  components: {
    Filters,
    CatalogItems
  },
  data() {
    return {
      currency: "₽",
      itemsToShow: 9
    };
  },

  methods: {
    async loadMore() {
      if (this.itemsToShow > this.catalog_items.length) {
        return;
      }

      await this.addItems();
      this.$refs.catalog_items.resizeAllMasonryItems();
    },
    addItems() {
      this.itemsToShow += 9;
    }
  },
  mounted() {},
  beforeDestroy() {},

  computed: {
    data() {
      return this.$store.state.blocks.products;
    },
    filters() {
      return this.$store.state.blocks.filters;
    },
    catalog_items() {
      return this.$store.state.blocks.catalog.products;
    }
  }
};
</script>

<style></style>
