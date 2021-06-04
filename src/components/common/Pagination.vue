<template>
  <div class="pagination">
    <div class="pagination__wrapper">
      <paginate
        :page-count="16"
        :page-range="3"
        :margin-pages="3"
        :container-class="'pagination__inner'"
        :prev-text="''"
        :next-text="''"
        :click-handler="clickCallback">
      </paginate>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props: {
  },
  components: {
  },
  directives: {
  },
  methods: {
    clickCallback: function(pageNum) {
      // console.log(pageNum)
    },
  },
  computed: {
  },
  mounted() {},
  watch: {},
};
</script>
