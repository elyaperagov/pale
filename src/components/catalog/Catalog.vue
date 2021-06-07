<template>
  <section class="catalog" v-if="data">
    <Breadcrumbs
      :breadcrumbs="data.breadcrumbs"
      :title="data.title"
    ></Breadcrumbs>
    <div class="container">
      <div class="catalog__products">
        <div class="products">
          <div class="products__content">
            <div
              v-masonry
              class="products__masonry"
              item-selector=".products__item"
              fit-width="true"
              gutter="30"
            >
              <div
                v-masonry-tile
                class="products__item"
                v-for="(item, index) in data.products"
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
        <Pagination class="pagination--catalog"/>
      </div>
    </div>
  </section>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import Pagination from "../common/Pagination.vue";

export default {
  name: "Catalog",
  components: {
    Breadcrumbs,
    Pagination
  },
  data() {
    return {
      currency: "₽",
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      // count: 9
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.catalog;
    }
  }
};
</script>

<style></style>
