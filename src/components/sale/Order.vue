<template>
  <div>
    <section class="order">
      <div class="container container--wide">
        <Breadcrumbs :breadcrumbs="breadcrumbs" :title="title"></Breadcrumbs>
        <div class="container">
          <div class="order__inner">
            <form
              action="get"
              id="form-order"
              class="form order__form form--order"
            >
              <div class="order__form-wrapper">
                <div class="form__fields">
                  <div class="form__group">
                    <h3 class="order__title" v-html="contacts_title"></h3>
                    <div class="form__field">
                      <div class="form__field-wrapper">
                        <label
                          :for="form.name.id"
                          class="form__label"
                          v-html="form.name.label"
                        ></label>
                        <input
                          :name="form.name.id"
                          :id="form.name.id"
                          :type="form.name.type"
                          v-model="form.name.value"
                          class="form__input"
                          required="required"
                          :class="{
                            'form__input--error': form.name.error,
                            'form__input--filled': form.name.value.length > 0,
                          }"
                        />
                      </div>
                      <template v-if="form.name.error">
                        <span
                          class="form__error"
                          v-html="form.name.error"
                        ></span>
                      </template>
                    </div>
                    <div class="form__field">
                      <div class="form__field-wrapper">
                        <label
                          :for="form.phone.id"
                          class="form__label"
                          v-html="form.phone.label"
                        ></label>
                        <input
                          :name="form.phone.id"
                          :id="form.phone.id"
                          :type="form.phone.type"
                          v-model="form.phone.value"
                          class="form__input"
                          required="required"
                          :class="{
                            'form__input--error': form.phone.error,
                            'form__input--filled': form.phone.value.length > 0,
                          }"
                          v-mask="'+7 (###) ###-##-##'"
                        />
                      </div>
                      <template v-if="form.phone.error">
                        <span
                          class="form__error"
                          v-html="form.phone.error"
                        ></span>
                      </template>
                    </div>
                    <div class="form__field">
                      <div class="form__field-wrapper">
                        <label
                          :for="form.email.id"
                          class="form__label"
                          v-html="form.email.label"
                        ></label>
                        <input
                          :name="form.email.id"
                          :id="form.email.id"
                          :type="form.email.type"
                          v-model="form.email.value"
                          class="form__input"
                          :class="{
                            'form__input--error': form.email.error,
                            'form__input--filled': form.email.value.length > 0,
                          }"
                        />
                      </div>
                      <template v-if="form.email.error">
                        <span
                          class="form__error"
                          v-html="form.email.error"
                        ></span>
                      </template>
                    </div>
                  </div>
                  <div class="form__group">
                    <h3 class="order__title" v-html="delivery_title"></h3>
                    <div class="form__field form__field--radio">
                      <span v-html="delivery_method" class="form__label"></span>
                      <fieldset class="form__fieldset">
                        <div class="form__field-wrapper">
                          <input
                            name="delivery"
                            :id="form.delivery.bypost.id"
                            type="radio"
                            :value="form.delivery.bypost.label"
                            v-model="form.delivery.value"
                            class="form__radio"
                            checked
                          />
                          <label
                            :for="form.delivery.bypost.id"
                            v-html="form.delivery.bypost.label"
                          ></label>
                        </div>
                        <div class="form__field-wrapper">
                          <input
                            name="delivery"
                            :id="form.delivery.pickup.id"
                            type="radio"
                            :value="form.delivery.pickup.label"
                            v-model="form.delivery.value"
                            class="form__radio"
                          />
                          <label
                            :for="form.delivery.pickup.id"
                            v-html="form.delivery.pickup.label"
                          ></label>
                        </div>
                      </fieldset>
                    </div>
                    <div class="form__field form__field--textarea">
                      <div class="form__field-wrapper">
                        <label
                          :for="form.address.id"
                          class="form__label"
                          v-html="form.address.label"
                        ></label>
                        <textarea
                          :name="form.address.id"
                          :id="form.address.id"
                          v-model="form.address.value"
                          :maxlength="form.address.maxlength"
                          cols="34"
                          rows="10"
                          class="form__textarea"
                          :class="{
                            'form__textarea--error':
                              form.address.error ||
                              form.address.value.length ===
                                form.address.maxlength,
                            'form__textarea--filled':
                              form.address.value.length > 0,
                          }"
                        ></textarea>
                      </div>
                      <template v-if="form.address.error">
                        <span
                          class="form__error"
                          v-html="form.address.error"
                        ></span>
                      </template>
                    </div>
                    <div class="form__field form__field--radio">
                      <span v-html="payment_method" class="form__label"></span>
                      <fieldset class="form__fieldset">
                        <div class="form__field-wrapper">
                          <input
                            name="payment"
                            :id="form.payment.card.id"
                            type="radio"
                            :value="form.payment.card.label"
                            v-model="form.payment.value"
                            class="form__radio"
                            checked
                          />
                          <label
                            :for="form.payment.card.id"
                            v-html="form.payment.card.label"
                          ></label>
                        </div>
                        <div class="form__field-wrapper">
                          <input
                            name="payment"
                            :id="form.payment.cash.id"
                            type="radio"
                            :value="form.payment.cash.label"
                            v-model="form.payment.value"
                            class="form__radio"
                          />
                          <label
                            :for="form.payment.cash.id"
                            v-html="form.payment.cash.label"
                          ></label>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div class="order__total">
                  <div
                    class="order__product"
                    v-for="(product, p) in products"
                    :key="p"
                  >
                    <div class="order__product-info">
                      <h5
                        class="order__product-name"
                        v-html="product.name"
                      ></h5>
                    </div>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                name="submit"
                class="button button--big button--submit"
                @click.prevent="sendFrom()"
                v-html="button"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <transition name="fade">
      <OrderSuccess />
    </transition>
  </div>
</template>

<script>
import Breadcrumbs from "../common/Breadcrumbs.vue";
import axios from "axios";
import OrderSuccess from "../modals/OrderSuccess.vue";

export default {
  name: "Order",
  components: {
    Breadcrumbs,
    OrderSuccess,
  },
  data() {
    return {
      breadcrumbs: [
        {
          text: "Главная",
          link: "/home.html",
        },
        {
          text: "Корзина",
          link: "/cart.html",
        },
        {
          text: "Оформление заказа",
          link: "",
        },
      ],
      title: "ОФОРМЛЕНИЕ ЗАКАЗА",
      contacts_title: "Контактные данные",
      delivery_title: "Доставка и оплата",
      delivery_method: "Способ доставки",
      payment_method: "Способ оплаты",
      button: "Перейти к оплате",
      currency: "$",
      products: [
        {
          name: "Всадник без головы в кофтане, на золотом фоне и подставке",
          price: 1200,
        },
        {
          name: "Всадник без головы в кофтане",
          price: 200,
        },
        {
          name: "Всадник без головы в кофтане, на золотом фоне и подставке",
          price: 45400,
        },
      ],
      form: {
        name: {
          value: "",
          label: "Фамилия, имя*",
          type: "text",
          id: "order-name",
          error: "",
        },
        phone: {
          value: "",
          label: "Телефон*",
          type: "tel",
          id: "order-phone",
          error: "",
        },
        email: {
          value: "",
          label: "E-mail",
          type: "email",
          id: "order-email",
          error: "",
        },
        delivery: {
          value: "Почтовым отправлением",
          bypost: {
            label: "Почтовым отправлением",
            id: "order-delivery_bypost",
          },
          pickup: {
            label: "Самовывоз",
            id: "order-delivery_pickup",
          },
        },
        address: {
          value: "",
          label: "Адрес",
          type: "textarea",
          id: "order-address",
          maxlength: 1000,
          error: "",
        },
        payment: {
          value: "Картой на сайте",
          card: {
            label: "Картой на сайте",
            id: "order-payment_card",
          },
          cash: {
            label: "Наложенным платежом",
            id: "order-payment_cash",
          },
        },
      },
    };
  },
  props: {},
  computed: {},
  mounted() {},
  methods: {
    async sendFrom() {
      if (!this.$validate(this.form)) {
        return;
      }

      const data = new FormData();
      for (let key in this.form) {
        if (typeof this.form[key].value !== "undefined") {
          data.append(key, this.form[key].value);
        }
      }
      const token = await this.$root.getRecaptchaToken("discount");
      data.append("recaptcha_response", token);
      data.append("method", "request");

      const response = await axios.post("/api/", data).catch((error) => {
        console.log(error);
      });

      // if (response.data.success) {
      this.$store.commit("OrderSuccessOpen");
      // }
    },
  },
};
</script>
