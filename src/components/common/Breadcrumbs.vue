<template>
  <section class="breadcrumbs" :class="{'breadcrumbs--title': title}">
    <div class="container">
      <div class="breadcrumbs__inner">
        <h1 v-if="title" v-html="title"></h1>
        <div class="breadcrumbs__list">
        <div
          v-for="(breadcrumb, b) in breadcrumbs"
          v-bind:key="b"
          class="breadcrumbs__item"
        >
          <a
            v-if="breadcrumb.link"
            class="breadcrumbs__link"
            :href="breadcrumb.link"
            v-html="breadcrumb.text"
          ></a>
          <span
            v-else
            class="breadcrumbs__link"
            v-html="breadcrumb.text"
          ></span>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Breadcrumbs",
  data() {
    return {};
  },
  props: {
    title: String,
    breadcrumbs: Array,
  },
};
</script>
