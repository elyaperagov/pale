<template>
  <div class="modal" v-if="data && modalVisible">
    <div class="modal__overlay">
      <div class="modal__body modal__body--success" @click.self="$store.commit('ModalClose')">
        <div class="modal__wrapper">
          <div class="modal__close" @click="$store.commit('ModalClose')">
            <svg class="icon" width="20" height="20" aria-hidden="true">
              <use xlink:href="#cancel"></use>
            </svg>
          </div>
          <div class="modal__content">
            <div class="success">
              <h2 class="success__title" v-html="data.success.title"></h2>
              <a class="success__tlink" href="/catalog.html" v-html="data.success.text"></a>
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
    data() {
      return this.$store.state.blocks.modals;
    },
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