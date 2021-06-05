<template>
  <div v-if="data">
    <section class="artists">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
        <div class="container">
          <div class="artists__inner">
            <div
              class="artists__section"
              v-for="(section, s) in data.sections"
              :key="s"
            >
              <h3 class="artists__section-title" v-html="section.title"></h3>
              <div class="artists__items">
                <a
                  v-for="(item, i) in section.items"
                  :key="i"
                  class="artists__item"
                  :href="item.link"
                >
                  <div class="artists__item-image">
                    <img :src="item.image" :alt="item.name" />
                  </div>
                  <div class="artists__item-name">
                    <span v-html="item.name"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";

export default {
  name: "Artists",
  components: {
    Breadcrumbs,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.artists;
    },
  },
  mounted() {},
  methods: {},
};
</script>
