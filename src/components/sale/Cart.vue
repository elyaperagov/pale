<template>
  <div v-if="data">
    <section class="cart">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
        <div class="container">
          <div class="cart__inner">
            <div
              class="cart__product"
              v-for="(product, p) in data.products"
              :key="p"
            >
              <div class="cart__product-cancel" @click="removeProduct(p)">
                <svg class="icon" width="10" height="10" aria-hidden="true">
                  <use xlink:href="#cancel"></use>
                </svg>
              </div>
              <div class="cart__product-image">
                <img :src="product.image" :alt="product.name" />
              </div>
              <div class="cart__product-info">
                <a class="cart__product-name" :href="product.link">
                  <h5 v-html="product.name"></h5>
                </a>
                <h6 class="cart__product-price">
                  <span v-html="data.currency"></span
                  ><span v-html="product.price"></span>
                </h6>
              </div>
            </div>
            <div v-show="data.products.length > 0" class="cart__total">
              <h6 class="cart__total-summa">
                <span v-html="data.total"></span>
                <span v-html="data.currency"></span><span v-html="summa"></span>
              </h6>
              <a
                class="button button--black cart__total-button"
                href="/order.html"
                v-html="data.button"
              ></a>
            </div>
            <div v-show="data.products.length < 1" class="cart__empty">
              <h2 v-html="data.empty.title"></h2>
              <a href="/catalog.html" v-html="data.empty.text"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";

export default {
  name: "Cart",
  components: {
    Breadcrumbs,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.cart;
    },
    summa() {
      let sum = 0;
      for (let key in this.data.products) {
        sum += parseFloat(this.data.products[key].price);
      }
      return sum;
    },
  },
  mounted() {},
  methods: {
    removeProduct(p) {
      debugger;
      this.data.products.splice(p, 1);
    },
  },
};
</script>
