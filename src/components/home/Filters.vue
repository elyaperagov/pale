<template>
  <section class="filters">
    <ul class="filters__items">
      <li
        class="filters__item"
        v-for="(item, i) in filters"
        @click="$switchActive(i, filters)"
        :key="i"
      >
        <span v-html="item.text"></span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    filters: Array
  },
  computed: {},
  components: {},
  methods: {}
};
</script>

<style></style>
