<template>
  <!-- <section ref="filters" class="filters">
    <ul class="filters__items">
      <li
        class="filters__item"
        v-for="(item, i) in filters"
        @click="$switchActive(i, filters), filterItems(filter)"
        :key="i"
      >
        <span v-html="item.text"></span>
      </li>
    </ul>
  </section> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    filters: Array,
    catalog_items: Array,
    filtered_items: Array
  },
  computed: {},
  components: {},
  methods: {
    async filterItems(filter) {
      this.filtered_items = [];
      await this.catalog_items.filter(catalog_item => {
        if (catalog_item.genre === filter.genre) {
          this.filtered_items.push(catalog_item);
        }
      });
      this.$refs.catalog_items.resizeAllMasonryItems();
    }
  }
};
</script>

<style></style>
