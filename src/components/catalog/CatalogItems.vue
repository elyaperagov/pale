<template>
  <div class="products">
    <div class="products__content">
      <div
        v-masonry
        class="products__masonry"
        transition-duration="0.3s"
        item-selector=".products__item"
        fit-width="true"
        gutter="30"
      >
        <div
          v-masonry-tile
          class="products__item"
          v-for="(item, index) in catalog_items"
          :key="index"
        >
          <a class="products__link" :href="item.link">
            <img
              :src="item.img"
              :alt="item.name"
              :width="item.img_width"
              :height="item.img_height"
            />
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
    }
  },
  props: {
    catalog_items: Array
  }
};
</script>

<style></style>
