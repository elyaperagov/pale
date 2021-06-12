<template>
  <div class="products__content">
    <div class="products__masonry">
      <template
        v-for="(item, index) in catalog_items"
        @mouseenter="$switchActiveReverse(index, catalog_items)"
        @mouseleave="$switchActive(index, catalog_items)"
      >
        <div
          class="products__item"
          v-if="index < itemsToShow"
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
</template>

<script>
export default {
  name: "CatalogItems",
  data() {
    return {
      currency: "₽"
    };
  },
  methods: {
    makeAllItemsActive(i, arr) {
      for (i in arr) {
        arr[i].active = true;
      }
    },

    resizeMasonryItem(item) {
      /* Get the grid object, its row-gap, and the size of its implicit rows */
      var grid = document.getElementsByClassName("products__masonry")[0],
        rowGap = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
        ),
        rowHeight = parseInt(
          window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
        );

      /*
       * Spanning for any brick = S
       * Grid's row-gap = G
       * Size of grid's implicitly create row-track = R
       * Height of item content = H
       * Net height of the item = H1 = H + G
       * Net height of the implicit row-track = T = G + R
       * S = H1 / T
       */
      var rowSpan = Math.ceil(
        (item.querySelector(".products__link").getBoundingClientRect().height +
          rowGap) /
          (rowHeight + rowGap)
      );

      /* Set the spanning as calculated above (S) */
      item.style.gridRowEnd = "span " + rowSpan;
    },
    resizeAllMasonryItems() {
      // Get all item class objects in one list
      var allItems = document.getElementsByClassName("products__item");

      /*
       * Loop through the above list and execute the spanning function to
       * each list-item (i.e. each masonry item)
       */
      for (var i = 0; i < allItems.length; i++) {
        this.resizeMasonryItem(allItems[i]);
      }
    }
  },

  props: {
    catalog_items: Array,
    itemsToShow: Number,
    data: Object
  },
  mounted() {
    let masonryEvents = ["load", "resize"];
    let that = this;
    masonryEvents.forEach(function(event) {
      window.addEventListener(event, that.resizeAllMasonryItems);
    });

    this.resizeAllMasonryItems();
  }
};
</script>

<style></style>
