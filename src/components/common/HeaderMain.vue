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
            <a :href="menu.link" @click.prevent="goTo(menu.link)">
              {{ menu.name }}</a
            >
          </li>
        </ul>
        <a href="#" class="">
          <svg
            class="icon icon--pink"
            width="16"
            height="20"
            aria-hidden="true"
          >
            <use xlink:href="#cart"></use>
          </svg>
          <span v-show="counter" class="header__cart-counter"></span>

          <span class="header__cart-total" v-html="data.total"></span>
        </a>

        <!-- <nav class="header__menu" v-if="!isMobile">
          <a
            class="header__menu-item"
            v-for="(menu, i) in data.menu_payment"
            :key="i"
            @click.prevent="goTo(menu.link)"
            :href="menu.link"
            v-html="menu.name"
          ></a>
        </nav> -->
      </div>
      <!-- <div
        class="header__menu-toggle"
        @click="menuToggle()"
        :class="{ close: !$store.state.menuShown }"
      >
        <span></span>
      </div> -->
    </div>

    <!-- <transition name="fade">
      <div
        class="header__mobile"
        v-if="isMobile"
        v-show="$store.state.menuShown"
      >
        <nav class="header__menu header__menu--mobile">
          <a
            class="header__menu-item"
            v-for="(menu, i) in data.menu_payment"
            :key="i"
            @click.prevent="goTo(menu.link)"
            :href="menu.link"
            v-html="menu.name"
          ></a>
        </nav>
      </div>
    </transition> -->
  </header>
</template>

<script>
export default {
  components: {},
  data() {
    return {
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
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        await this.$router.push({ path: "/" });
        setTimeout(() => {
          this.$scrollTo(link);
        }, 500);
      }
    },
    menuToggle(state = null) {
      if (state === null) {
        state = !this.$store.state.menuShown;
      }
      this.$store.commit("setMenuState", state);
    },
    menuClose(state) {
      if (this.$store.state.menuShown === true) {
        this.$store.state.menuShown = false;
      }
      this.$store.commit("setMenuClosed", state);
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
