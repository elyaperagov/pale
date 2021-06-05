<template>
  <section class="search" v-if="data">
    <div class="container">
      <div
        class="search__inner"
        @click="SearchInit()"
        :class="{ 'search--active': active }"
      >
        <p class="search__title" v-html="data.title"></p>
        <input
          type="search"
          name="search"
          id="search"
          class="input search__input"
          :class="{ active: active }"
          :placeholder="data.placeholder"
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
    </div>
  </section>
</template>

<script>
export default {
  name: "Search",
  methods: {
    SearchInit(e) {
      if (this.$root.width > 767) {
        this.active = true;
      }
    }
  },
  computed: {
    data() {
      return this.$store.state.blocks.search;
    }
  },
  created() {
    document.addEventListener("click", e => {
      if (!e.target.classList.value.includes("header")) {
        this.active = false;
      }
    });
  }
};
</script>

<style></style>
