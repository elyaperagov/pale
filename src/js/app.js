import Vue from "vue"
import VueTheMask from 'vue-the-mask'
import SlideUpDown from 'vue-slide-up-down'
import Bowser from 'bowser'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'
import 'swiper/css/swiper.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
import VueLazyload from 'vue-lazyload'
import VueImg from 'v-img';
import Cookies from 'js-cookie';
import {
  VueMasonryPlugin
} from 'vue-masonry';
import Paginate from 'vuejs-paginate'



import store from "../store"
import axios from 'axios'
import Helpers from '../lib/Helpers.js'

import Sprite from '../components/common/Sprite.vue'
import HeaderMain from '../components/common/HeaderMain.vue'
import FooterMain from '../components/common/FooterMain.vue'
import Banners from '../components/home/Banners.vue'
import Products from '../components/home/Products.vue'
import Filters from '../components/home/Filters.vue'
import NewsMain from '../components/home/NewsMain.vue'
import SearchMain from '../components/common/SearchMain.vue'
import SearchSuccess from '../components/home/SearchSuccess.vue'
import SearchEmpty from '../components/home/SearchEmpty.vue'
import ProductSimple from '../components/product/ProductSimple.vue'
import ProductFull from '../components/product/ProductFull.vue'
import Catalog from '../components/catalog/Catalog.vue'
import CatalogItems from '../components/catalog/CatalogItems.vue'
import VirtualGallery from '../components/catalog/VirtualGallery.vue'
import Artists from '../components/info/Artists.vue'
import Artist from '../components/info/Artist.vue'
import News from '../components/info/News.vue'
import Post from '../components/info/Post.vue'
import Contacts from '../components/info/Contacts.vue'
import Cart from '../components/sale/Cart.vue'
import Order from '../components/sale/Order.vue'
import E404 from '../components/common/E404.vue'

Vue.component('slide-up-down', SlideUpDown)
Vue.component('v-select', vSelect)
Vue.component('VueSlider', VueSlider)
Vue.component('paginate', Paginate)
Vue.use(VueMasonryPlugin)

Vue.use(VueImg);
Vue.use(VueTheMask)
Vue.use(Helpers)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('../img/loading_1.svg'),
  attempt: 1
})

Vue.config.comments = true
Vue.config.ignoredElements = [
  'noindex',
  /^ion-/
]

Vue.config.productionTip = false;

window.Bowser = Bowser
window.axios = axios

new Vue({
  el: '#app',
  store,
  data() {
    return {
      window_top: 0,
      header_top: 0,
      header_height: 90,
      offsetLeft: 0,
      width: null,
      height: null,
      timeout_stick: null,
      bowser: {},
      ym_counter: null,
      recaptcha_key: null,
      tabletBreakpoint: 1025,
      mobileBreakpoint: 768,
    }
  },
  watch: {
    window_top: {
      handler(new_v, old_v) {
        let header_top;

        if (old_v < new_v && new_v > this.header_height) {
          header_top = -this.header_height;
        } else {
          header_top = 0;
        }

        if (this.timeout_stick !== null) {
          return;
        }

        this.timeout_stick = setTimeout(() => {
          this.header_top = header_top;
          this.timeout_stick = null;
        }, 100);
      },
      deep: true
    }
  },
  computed: {
    isTablet() {
      return this.width <= this.tabletBreakpoint;
    },
    isMobile() {
      return this.width <= this.mobileBreakpoint;
    }
  },
  async created() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.bowser = Bowser.parse(window.navigator.userAgent);

    const data = await this.getDataAjax('/data.json');
    this.$store.commit('setData', data);
  },
  mounted() {
    this.addListeners();
  },
  methods: {
    addListeners() {
      window.addEventListener('scroll', this.onScroll);
      window.addEventListener('resize', this.onResize);
      window.onload = () => {
        setTimeout(() => {
          this.getOffsetLeft();
        }, 500);
      }
    },
    onScroll(e) {
      this.window_top = window.pageYOffset;
    },
    onResize(state) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.$store.commit("setMenuClosed", state);
      document.body.classList.remove("scroll-off");
      this.getOffsetLeft();
    },
    getOffsetLeft() {
      try {
        this.offsetLeft = document.querySelector('footer .container').offsetLeft + document.querySelector('footer .container').offsetWidth;
      } catch (error) {}
    },
    reachGoal(goal) {
      if (typeof ym !== 'undefined') {
        ym(this.ym_counter, 'reachGoal', goal);
        console.log(goal);
      }
    },
    getRecaptchaToken(action) {
      return new Promise((resolve, reject) => {
        if (typeof grecaptcha === 'undefined') {
          return resolve(false);
        }
        grecaptcha.ready(() => {
          grecaptcha.execute(this.recaptcha_key, {
            action: action
          }).then((token) => {
            return resolve(token);
          }, (error) => {
            console.log(error);
            return resolve(false);
          });
        })
      })
    },
    async getDataAjax(route = '/', config = {}) {
      const response = await axios.get(route, config).catch(function (error) {
        console.log(error);
        return error.response;
      });

      return Promise.resolve(response.data);
    }
  },
  components: {
    Sprite,
    HeaderMain,
    FooterMain,
    Banners,
    ProductSimple,
    Products,
    Filters,
    ProductFull,
    NewsMain,
    SearchMain,
    SearchSuccess,
    Artists,
    Artist,
    News,
    Post,
    Contacts,
    Cart,
    Order,
    SearchEmpty,
    Catalog,
    VirtualGallery,
    CatalogItems,
    E404
  }
}).$mount("#app");
