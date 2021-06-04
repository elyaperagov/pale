<template>
  <footer class="footer" v-if="data">
    <div class="container">
      <div class="footer__inner">
        <ul class="footer__menu">
          <li class="footer__menu-item" v-for="(item, i) in data.menu" :key="i">
            <a
              @click.prevent="goTo(item.link)"
              :href="item.link"
              v-html="item.name"
            ></a>
          </li>
        </ul>
        <div class="footer__copyright">
          <p v-html="data.text"></p>
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
  methods: {
    async goTo(link) {
      if (!this.$scrollTo(link)) {
        await this.$router.push({ path: "/" });
        setTimeout(() => {
          this.$scrollTo(link);
        }, 500);
      }
    }
  }
};
</script>
