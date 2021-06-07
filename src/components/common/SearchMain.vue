<template>
  <section class="search">
    <div
      class="search__inner"
      @click="SearchInit()"
      :class="{ 'search--active': search.active }"
    >
      <p class="search__title" v-html="search.title"></p>
      <input
        type="search"
        name="search"
        id="search"
        class="input search__input"
        :class="{ active: search.active }"
        :placeholder="
          this.$root.width > 768 ? search.placeholder : search.placeholder_mobile
        "
      />
      <button class="search__button">
        <div class="search__icon">
          <svg
            width="30"
            height="30"
            aria-hidden="true"
            class="icon icon--header"
          >
            <use xlink:href="#search" class="icon icon--header"></use>
          </svg>
        </div>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SearchMain",
  data() {
    return {};
  },
  props: {
    search: Object
  },
  methods: {},
  created() {},
  methods: {
    SearchInit(e) {
      if (this.$root.width > 767) {
        this.active = true;
      }
    }
  },
  computed: {
  },
  created() {
    document.addEventListener("click", e => {
      if (!e.target.classList.value.includes("header")) {
        this.active = false;
      }
    });
  },
  mounted() {}
};
</script>

<style></style>
