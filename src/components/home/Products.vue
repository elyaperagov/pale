<template>
  <div v-if="data" class="products">
    <div class="container">
      <Filters :filters="filters" />
      <template v-for="(filter, t) in filters">
        <div :key="t">
          <div class="products__content" :class="{ active: filter.active }">
            <div
              v-masonry
              class="products__masonry"
              transition-duration="0.3s"
              item-selector=".products__item"
              fit-width="true"
              gutter="30"
              column-width="346"
            >
              <div
                v-masonry-tile
                class="products__item"
                v-for="(item, index) in data.products"
                v-if="filter.active && (filter.genre === item.genre)"
                :key="index"
                v-show="index < count"
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
                    <p
                      class="products__price"
                      v-html="item.price + currency"
                    ></p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
      <button
        class="button button--show-more"
        @click.prevent="showMore()"
        v-if="count < data.products.length"
      >
        {{ data.show_more }}
      </button>
    </div>
  </div>
</template>

<script>
import Filters from "./Filters.vue";

export default {
  name: "Products",
  components: {
    Filters
  },
  data() {
    return {
      currency: "₽",
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      count: 9
    };
  },

  methods: {
    showMore() {
      this.count = this.data.products.length;
    },
    toggleMobile() {
      if (window.innerWidth <= this.mobileBreakpoint) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    handleResize() {
      this.toggleMobile();
    }
  },

  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.toggleMobile();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
    this.toggleMobile();
  },

  computed: {
    data() {
      return this.$store.state.blocks.products;
    },
    filters() {
      return this.$store.state.blocks.filters;
    }
  }
};
</script>

<style></style>
