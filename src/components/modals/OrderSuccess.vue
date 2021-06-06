<template>
  <div class="modal" v-if="modalVisible">
    <div class="modal__overlay" @click.self="$store.commit('ModalClose')">
      <div class="modal__body modal__body--review-success">
        <div class="modal__wrapper">
          <div class="modal__close" @click="$store.commit('ModalClose')">
            <svg class="icon" width="60" height="60" aria-hidden="true">
              <use xlink:href="#close-circle"></use>
            </svg>
          </div>
          <div class="modal__content">
            <div class="review-success">
              <h2 class="review-success__title" v-html="data.review_success.title"></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderSuccess",
  data() {
    return {
    };
  },
  props: {
  },
  computed: {
    modalVisible() {
      return this.$store.state.showOrderSuccess;
    },
  },
  mounted() {},
  methods: {
  },
  watch: {
  },
  destroyed() {},
  beforeDestroy() {},
  components: {
  },
};
</script>