<template>
  <footer class="footer" v-if="data">
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__menu">
          <li class="footer__menu-item" v-for="(item, i) in data.menu" :key="i">
            <a :href="item.link" v-html="item.name"></a>
          </li>
        </ul>
        <div class="footer__copyright">
          <a href="/home.html" v-html="data.text"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    data() {
      return this.$store.state.blocks.footer;
    }
  },
  components: {},
  methods: {}
};
</script>
