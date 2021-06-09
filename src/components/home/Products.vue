<template>
  <div class="products" v-if="data">
    <div class="container">
      <Filters :filters="filters" v-if="!$root.isTablet" />
      <div class="products__content">
        <CatalogItems :catalog_items="catalog_items" />
      </div>
      <button class="button button--show-more" @click.prevent="showMore()">
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
      count: 9
    };
  },

  methods: {
    showMore() {
      // this.count = this.data.products.length;
    },
    makeAllItemsActive(i, arr) {
      for (i in arr) {
        arr[i].active = true;
      }
    },
    initMasonry() {
      if (this.$refs.masonry) {
        const masonry = new Masonry(this.$refs.masonry, {
          itemSelector: ".products__item",

          fitWidth: "true",
          gutter: 30
        });
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initMasonry();
    });
  },
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
