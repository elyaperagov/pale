<template>
  <div v-if="data">
    <section class="artist">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
        <div class="container container--narrow">
          <div class="artist__inner">
            <h2 class="artist__title" v-html="data.author"></h2>
            <div class="artist__image">
              <img :src="data.image" :alt="data.author" />
            </div>
            <div class="artist__texts">
              <p class="artist__texts-item" v-for="(text, t) in data.texts" :key="t" v-html="text"></p>
            </div>
            <div class="artist__list">
              <p
                class="artist__list-title"
                v-html="data.exhibitions.title"
              ></p>
              <ul>
                <li class="artist__list-item"
                  v-for="(item, i) in data.exhibitions.items"
                  :key="i"
                  v-html="item"
                ></li>
              </ul>
            </div>
            <div class="artist__list">
              <p
                class="artist__list-title"
                v-html="data.publications.title"
              ></p>
              <ul>
                <li class="artist__list-item"
                  v-for="(item, i) in data.publications.items"
                  :key="i"
                >
                <a :href="item" v-html="item"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OtherWorks :title="data.other_title" :author="data.author"></OtherWorks>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import OtherWorks from "../common/OtherWorks.vue";

export default {
  name: "Artist",
  components: {
    Breadcrumbs,
    OtherWorks,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.artist;
    },
  },
  mounted() {},
  methods: {},
};
</script>
