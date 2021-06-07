<template>
  <div id="e404">
    <Breadcrumbs :breadcrumbs="breadcrumbs"></Breadcrumbs>
    <div class="container">
      <div class="e404">
        <h1 class="e404__title">{{ text.title }}</h1>
        <div class="e404__text" v-html="text.text"></div>
        <SearchMain :search="search"></SearchMain>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import SearchMain from "../common/SearchMain.vue";

export default {
  data() {
    return {
      breadcrumbs: [
        {
          link: "/home.html",
          text: "Главная",
        },
        {
          link: "",
          text: "404",
        },
      ],
      text: {
        title: "К сожалению, такой страницы на сайте нет...",
        text: "<p>Возможно, запрашиваемая вами страница была перемещена или удалена.</p><p>Можете перейти в <a href='/catalog.html'>каталог</a> или воспользоваться поиском</p>",
      },
    };
  },
  props: {},
  components: {
    Breadcrumbs,
    SearchMain,
  },
  computed: {
    search() {
      return this.$store.state.blocks.search;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
