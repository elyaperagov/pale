<template>
  <div class="products">
    <div class="products__content">
      <div ref="masonry" class="products__masonry">
        <template
          v-for="(item, index) in catalog_items"
          @mouseenter="$switchActiveReverse(index, catalog_items)"
          @mouseleave="$switchActive(index, catalog_items)"
        >
          <div
            class="products__item"
            :key="index"
            @mouseenter="$switchActive(index, catalog_items)"
            @mouseleave="makeAllItemsActive(index, catalog_items)"
            :class="item.active ? '' : 'products__item--modified'"
          >
            <a class="products__link" :href="item.link">
              <div class="products__image">
                <img
                  :src="item.img"
                  :alt="item.name"
                  :width="item.img_width"
                  :height="item.img_height"
                />
              </div>

              <div class="products__info">
                <p class="products__author" v-html="item.author"></p>
                <p class="products__name-info" v-html="item.name"></p>
                <div class="products__item-info">
                  <p v-html="item.materials"></p>
                  <span>&nbsp;/&nbsp;</span>
                  <span v-html="item.size"></span>
                </div>
                <p class="products__price" v-html="item.price + currency"></p>
              </div>
            </a>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItems",
  data() {
    return {
      currency: "₽",
      count: 9
    };
  },
  methods: {
    makeAllItemsActive(i, arr) {
      for (i in arr) {
        arr[i].active = true;
      }
    },
    initMasonry() {
      if (this.$refs.masonry) {
        const masonry = new Masonry(this.$refs.masonry, {
          itemSelector: ".products__item",
          percentPosition: true,
          transitionDuration: "0.3s",
          fitWidth: "true",
          gutter: 30
        });
      }
    }
  },

  props: {
    catalog_items: Array
  },
  mounted() {
    this.$nextTick(() => {
      this.initMasonry();
    });
  }
};
</script>

<style></style>
