<template>
  <div v-if="data">
    <section class="contacts">
      <div class="container container--wide">
        <Breadcrumbs
          :breadcrumbs="data.breadcrumbs"
          :title="data.title"
        ></Breadcrumbs>
        <div class="container container--narrow">
          <div class="contacts__inner">
            <div class="contacts__map">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A0fbec452792bbf09f6fa04ef45908d5c2e0869eca08660e80fc24e597fba7ea8&amp;source=constructor"
                width="724"
                height="300"
                frameborder="0"
              ></iframe>
            </div>
            <div class="contacts__texts">
              <div
                class="contacts__texts-item"
                v-for="(contact, c) in data.contacts_items"
                :key="c"
              >
                <p v-if="contact.name === 'Адрес:'">
                  <span v-html="contact.name"></span>
                  <span v-html="contact.text"></span>
                </p>
                <p v-if="contact.name === 'Телефон:'">
                  <span v-html="contact.name"></span>
                  <a :href="'tel:' + contact.text" v-html="contact.text"></a>
                </p>
                <p v-if="contact.name === 'E-mail:'">
                  <span v-html="contact.name"></span>
                  <a :href="'mailto:' + contact.text" v-html="contact.text"></a>
                </p>
              </div>
            </div>
            <div class="contacts__texts">
              <div
                class="contacts__texts-item"
                v-for="(item, i) in data.info"
                :key="i"
              >
                <p>
                  <span v-html="item.name"></span>
                  <span v-html="item.text"></span>
                </p>
              </div>
            </div>
            <div class="contacts__texts--about">
              <p
                class="contacts__texts-item"
                v-for="(text, t) in data.texts"
                :key="t"
                v-html="text"
              ></p>
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
  name: "Contacts",
  components: {
    Breadcrumbs,
  },
  data() {
    return {};
  },
  props: {},
  computed: {
    data() {
      return this.$store.state.blocks.contacts;
    },
  },
  mounted() {},
  methods: {},
};
</script>
