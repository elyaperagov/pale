<template>
  <header class="header" v-if="data" :style="{ top: $root.header_top + 'px' }">
    <div class="container">
      <div class="header__top">
        <div class="header__logo">
          <a :href="'/home'" class="header__logo-link">
            <img loading="lazy" :src="data.logoSrc" :alt="data.logoAlt" />
          </a>
        </div>
        <ul class="header__menu" v-if="!isMobile">
          <li class="header__menu-item" v-for="(menu, i) in data.menu" :key="i">
            <a :href="menu.link"> {{ menu.name }}</a>
          </li>
        </ul>
        <div class="header__right-menu">
          <button class="header__search">
            <div class="header__search-icon">
              <svg class="icon" width="20" height="20" aria-hidden="true">
                <use xlink:href="#search"></use>
              </svg>
            </div>
          </button>
          <a href="#" class="header__cart">
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
        v-if="isMobile"
        v-show="this.$store.state.menuShown"
      >
        <div
          class="header__mobile"
          v-if="isMobile"
          v-show="$store.state.menuShown"
        >
          <div class="container">
            <ul class="header__menu" v-if="isMobile">
              <li
                class="header__menu-item"
                v-for="(menu, i) in data.menu"
                :key="i"
              >
                <a :href="menu.link" v-html="">
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

                <!-- <li
                  class="faq__item"
                  v-for="(item, index) in faqItems"
                  :key="index"
                  @click="toggleBlock(index)"
                  :class="{ 'faq__item--active': item.showOptions}"
                >
                  <div class="faq__item-content">
                    <p class="faq__item-question">{{ item.text }}</p>

                  </div>
                  <slide-up-down
                    :active="item.showOptions"
                    v-bind:class="{ show: item.show }"
                  >
                    <div class="faq__item-text">
                      <p>{{ item.answer }}</p>
                    </div>
                  </slide-up-down>
                </li> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: true,
      showOptions: false,
      duration: 500,
      mobileBreakpoint: 1024,
      windowWidth: window.innerWidth,
      isMobile: false,
      counter: 0
    };
  },
  computed: {
    data() {
      return this.$store.state.blocks.header_main;
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
