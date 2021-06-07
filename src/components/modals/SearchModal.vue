<template>
  <div class="modal" v-if="modalVisible">
    <div class="modal__overlay">
      <div
        class="modal__body modal__body--success"
        @click.self="$store.commit('ModalClose')"
      >
        <div class="container container--modal">
          <div class="modal__wrapper">
            <div class="modal__close" @click="$store.commit('ModalClose')">
              <svg class="icon" width="20" height="20" aria-hidden="true">
                <use xlink:href="#cancel"></use>
              </svg>
            </div>

            <SearchMain class="search--modal" :search="search"></SearchMain>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchMain from "../common/SearchMain.vue";

export default {
  name: "SearchModal",
  components: {
    SearchMain
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    search() {
      return this.$store.state.blocks.search;
    },
    modalVisible() {
      return this.$store.state.showSearch;
    }
  },
  created() {
    let that = this;
    document.addEventListener("keyup", function(evt) {
      if (evt.keyCode === 27) {
        that.$store.commit("ModalClose");
      }
    });
  },
  mounted() {},
  methods: {},
  watch: {},
  destroyed() {},
  beforeDestroy() {}
};
</script>
