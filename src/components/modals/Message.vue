<template>
  <transition name="fade" v-if="data && messageShow">
    <div class="message message--shown">
      <h6 v-html="data.message.text" class="message__text"></h6>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [],
    };
  },
  props: {
  },
  methods: {},
  created() {

  },
  computed: {
    data() {
      return this.$store.state.blocks.modals;
    },
    messageShow() {
      return this.$store.state.showMessage;
    },
  },
};
</script>
