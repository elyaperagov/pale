<template>
  <div class="products" v-if="data">
    <div class="container">
      <section class="filters" v-if="!$root.isTablet">
        <ul class="filters__items">
          <li
            class="filters__item"
            v-for="(item, i) in filters"
            @click="$switchActive(i, filters), filterItems(item)"
            :key="i"
          >
            <span v-html="item.text"></span>
          </li>
        </ul>
      </section>
      <CatalogItems
        ref="catalog_items"
        :itemsToShow="itemsToShow"
        :catalog_items="filtered_items"
      />
      <button
        class="button button--show-more"
        v-if="this.itemsToShow <= this.filtered_items.length"
        @click.prevent="loadMore()"
      >
        {{ data.show_more }}
      </button>
    </div>
  </div>
</template>

<script>
import CatalogItems from "../catalog/CatalogItems.vue";

export default {
  name: "Products",
  components: {
    CatalogItems,
  },
  data() {
    return {
      currency: "₽",
      itemsToShow: 9,
      filtered_items: [],
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
    },
    async filterItems(filter) {
      this.filtered_items = [];
      await this.catalog_items.filter((catalog_item) => {
        if (catalog_item.genre === filter.genre) {
          this.filtered_items.push(catalog_item);
        }
      });
      this.$refs.catalog_items.resizeAllMasonryItems();
    },
  },
  mounted() {
    setTimeout(() => {
      this.filtered_items = this.catalog_items;
    }, 300);
    setTimeout(() => {
      this.$refs.catalog_items.resizeAllMasonryItems();
    }, 400);
  },
  watch: {
    // filtered_items() {
    //   debugger;
    //   if (this.filtered_items !== []) {
    //     this.$refs.catalog_items.resizeAllMasonryItems();
    //   }
    // }
  },
  beforeDestroy() {},

  computed: {
    data() {
      return this.$store.state.blocks.catalog;
    },
    filters() {
      return this.$store.state.blocks.filters;
    },
    catalog_items() {
      return this.$store.state.blocks.catalog.products;
    },
  },
};
</script>

<style></style>
