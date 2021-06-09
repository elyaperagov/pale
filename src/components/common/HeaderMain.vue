<template>
  <header
    class="header"
    v-if="data"
    :class="{
      'header--hidden': $root.window_top < 800 && $root.window_top !== 0,
      'header--fixed': $root.window_top > 800
    }"
  >
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a :href="'/home.html'" class="header__logo-link">
            <img loading="lazy" :src="data.logoSrc" :alt="data.logoAlt" />
          </a>
        </div>
        <ul class="header__menu" v-if="!$root.isTablet">
          <li class="header__menu-item" v-for="(menu, i) in data.menu" :key="i">
            <a :href="menu.link"> {{ menu.name }}</a>
            <ul class="header__dropdown-items" v-if="menu.categories">
              <li
                class="header__dropdown-item"
                v-for="(category, j) in menu.categories"
                :key="j"
              >
                <a :href="category.link">
                  {{ category.text }}
                  <div
                    class="header__right-icon"
                    v-if="category.sub_categories"
                  >
                    <svg class="icon" width="10" height="14" aria-hidden="true">
                      <use xlink:href="#right"></use>
                    </svg>
                  </div>
                  <ul class="header__sub-items" v-if="category.sub_categories">
                    <li
                      class="header__sub-item"
                      v-for="(sub_category, k) in category.sub_categories"
                      :key="k"
                    >
                      <a :href="sub_category.link">
                        {{ sub_category.text }}
                      </a>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <div class="header__right-menu">
          <button class="header__search" @click.prevent="showSearchModal()">
            <div class="header__search-icon">
              <svg class="icon" width="20" height="20" aria-hidden="true">
                <use xlink:href="#search"></use>
              </svg>
            </div>
          </button>
          <a :href="data.cart" class="header__cart">
            <div class="header__cart-icon">
              <svg class="icon" width="20" height="20" aria-hidden="true">
                <use xlink:href="#cart"></use>
              </svg>
            </div>
            <span v-show="counter" class="header__cart-counter"></span>
            <span class="header__cart-total" v-html="data.total"></span>
          </a>
          <div class="header__languages">
            <div
              class="header__language"
              v-for="(language, i) in data.languages"
              :key="i"
              @click="$switchActive(i, data.languages)"
            >
              <a
                class="header__language-link"
                :class="{ 'header__language-link--active': language.active }"
                :href="language.link"
                v-html="language.text"
              ></a>
              <span class="header__language-divider">/</span>
            </div>
          </div>
        </div>
        <button
          class="button button--toggle"
          @click="menuToggle()"
          :class="{ close: !this.$store.state.menuShown }"
        >
          <span></span>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div
        class="header__mobile-wrapper"
        v-if="$root.isTablet"
        v-show="this.$store.state.menuShown"
      >
        <div
          class="header__mobile"
          v-if="$root.isTablet"
          v-show="$store.state.menuShown"
        >
          <div class="container">
            <ul class="header__menu" v-if="$root.isTablet">
              <li
                class="header__menu-item"
                v-for="(menu, i) in data.menu"
                :key="i"
              >
                <a :href="menu.link">
                  {{ menu.name }}
                  <div class="header__right-icon">
                    <svg class="icon" width="12" height="20" aria-hidden="true">
                      <use xlink:href="#right"></use>
                    </svg></div
                ></a>
              </li>
              <li class="header__menu-item" v-if="this.$root.width < 768">
                <div
                  class="header__language"
                  v-for="(language, i) in data.languages"
                  :key="i"
                  :class="{ 'header__language--active': language.active }"
                  @click="switchActiveLang(i, data.languages)"
                >
                  <a
                    class="header__language-link"
                    :class="{
                      'header__language-link--active': language.active
                    }"
                    :href="language.link"
                  >
                    {{ language.text_mobile }}
                    <div class="header__right-icon">
                      <svg
                        class="icon"
                        width="12"
                        height="20"
                        aria-hidden="true"
                      >
                        <use xlink:href="#right"></use>
                      </svg>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <SearchModal />
    </transition>
  </header>
</template>

<script>
import SearchModal from "../modals/SearchModal.vue";

export default {
  components: {
    SearchModal
  },
  data() {
    return {
      active: true,
      showOptions: false,
      duration: 500,
      counter: 0
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.header_main;
    }
  },
  beforeDestroy() {},
  methods: {
    switchActiveLang(i, arr) {
      for (i in arr) {
        arr[i].active = !arr[i].active;
      }
    },
    menuToggle(state = null) {
      if (state === null) {
        state = !this.$store.state.menuShown;
      }
      this.$store.commit("setMenuState", state);
      document.body.classList.toggle("scroll-off");
    },
    menuClose(state) {
      if (this.$store.state.menuShown === true) {
        this.$store.state.menuShown = false;
      }
      this.$store.commit("setMenuClosed", state);
      document.body.classList.remove("scroll-off");
    },
    showSearchModal() {
      this.$store.commit("SearchOpen");
    }
  },
  created() {
    let that = this;
    document.addEventListener("keyup", function(evt) {
      if (evt.keyCode === 27) {
        that.menuClose(true);
      }
    });
  }
};
</script>
