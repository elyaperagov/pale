<template>
  <div v-if="data">
    <section class="other">
      <div class="container">
        <div class="other__inner">
          <h3 class="other__title" v-html="title"></h3>
          <div class="other__items">
            <div v-for="(work, w) in data" :key="w" class="other__item">
              <div class="other__item-image">
                <img
                  :src="work.image"
                  :alt="work.name"
                  v-img="{
                    group: 'other-works',
                    src: work.image,
                  }"
                />
              </div>
              <h4 class="other__item-author" v-html="author"></h4>
              <a class="other__item-link" :href="work.link">
                <p v-html="work.name" class="other__item-name"></p>
              </a>
              <p
                class="other__item-description"
                v-for="(option, o) in work.options"
                :key="o"
                v-html="option"
              ></p>
              <h4 class="other__item-price" v-html="work.price"></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OtherWorks",
  components: {},
  data() {
    return {};
  },
  props: {
    title: String,
    author: String,
  },
  computed: {
    data() {
      return this.$store.state.blocks.other_works;
    },
  },
  mounted() {},
  methods: {},
};
</script>
