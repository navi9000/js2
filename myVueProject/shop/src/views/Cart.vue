<template>
  <main>
    <!-- Cart - Shopping Cart -->
    <div class="b-pageTitleBlock">
      <div
        class="
          container
          b-pageTitleBlock__flexWrapper
          b-pageTitleBlock__flexWrapper_noBreadcrumbs
        "
      >
        <h1 class="b-pageTitleBlock__pageTitle">shopping cart</h1>
      </div>
    </div>

    <!-- Cart - Main Content -->
    <form class="container cart-flex">
      <div class="cart-flex-left">
        <CartCard
          v-bind:key="item.id"
          v-bind:item="item"
          v-for="item of cart"
        />
        <div class="cart-flex-left__buttons">
          <button
            type="button"
            class="cart-flex-left__buttons-btn"
            @click="deleteall()"
          >
            Clear shopping cart
          </button>
          <button type="button" class="cart-flex-left__buttons-btn">
            Continue shopping
          </button>
        </div>
      </div>
      <div class="cart-flex-right">
        <div class="cart-flex-right__address">
          <h2 class="cart-flex-right__address-header">shipping address</h2>
          <input
            type="text"
            class="cart-flex-right__address-input"
            placeholder="Bangladesh"
          />
          <input
            type="text"
            class="cart-flex-right__address-input"
            placeholder="State"
          />
          <input
            type="text"
            class="cart-flex-right__address-input"
            placeholder="Postcode / ZIP"
          />
          <button type="button" class="cart-flex-right__address-button">
            Get a quote
          </button>
        </div>
        <div class="cart-flex-right__submit">
          <h2 class="cart-flex-right__submit-subtotal">
            subtotal<span
              >$
              {{
                cart.reduce((acc, item) => item.price * item.quantity + acc, 0)
              }}</span
            >
          </h2>
          <h2 class="cart-flex-right__submit-total">
            grand total<span class="theme-color"
              >${{
                cart.reduce((acc, item) => item.price * item.quantity + acc, 0)
              }}</span
            >
          </h2>
          <hr class="cart-flex-right__submit-hr" />
          <button class="cart-flex-right__submit-btn">
            proceed to checkout
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import CartCard from "../components/Cart_ProductCard.vue";
export default {
  components: {
    CartCard,
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    },
  },
  methods: {
    deleteall() {
      this.$store.dispatch("removeAllFromCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-top {
  @media (max-width: 667px) {
    padding-top: 59px;
  }
}

.cart-flex {
  display: flex;
  margin-top: 96px;
  margin-bottom: 128px;
  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 59px;
  }
  @media (max-width: 667px) {
    margin-top: 39px;
  }

  &-left {
    margin-right: 128.5px;
    flex-basis: 67%;
    @media (max-width: 1024px) {
      margin-right: 0;
      flex-basis: unset;
    }

    &__item {
      margin-bottom: 40px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      position: relative;

      &::after {
        content: "";
        visibility: hidden;
        display: block;
        height: 0;
        clear: both;
      }

      &-img {
        float: left;
        height: 306px;
        margin-right: 31px;
        @media (max-width: 667px) {
          height: 188px;
          margin-right: 17px;
        }
        @media (max-width: 389px) {
          height: 170px;
          margin-right: 10px;
        }
      }

      &-header {
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        text-transform: uppercase;
        box-sizing: border-box;
        padding-top: 22px;
        padding-bottom: 42px;
        color: $background-dark;
        @media (max-width: 667px) {
          font-size: 16px;
          line-height: 19px;
          padding-top: 13.5px;
          padding-bottom: 25px;
        }
        @media (max-width: 389px) {
          padding-top: 10px;
          padding-bottom: 20px;
        }
      }

      p {
        margin-bottom: 6px;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        color: #575757;
        @media (max-width: 667px) {
          font-size: 14px;
          line-height: 17px;
          margin-bottom: 4px;
        }
      }

      &-quantity-input {
        width: 43px;
        margin-left: 24.5px;
        border: 1px solid #eaeaea;
        font-size: 18px;
        line-height: 22px;
        color: #656565;
        box-sizing: border-box;
        padding-left: 14px;
        @media (max-width: 667px) {
          font-size: 10px;
          line-height: 12px;
          width: 24px;
          padding-left: 9px;
        }
      }

      &-close {
        position: absolute;
        top: 28px;
        right: 22px;
        cursor: pointer;
        @media (max-width: 667px) {
          top: 16px;
          right: 14px;
          transform: scale(0.5);
        }
        @media (max-width: 389px) {
          top: 12px;
          right: 9px;
        }
      }
    }

    &__buttons {
      display: flex;
      margin-top: 72.5px;
      justify-content: space-between;
      @media (max-width: 1024px) {
        margin: 62px 84px;
      }
      @media (max-width: 667px) {
        margin: 30px 0 48px;
      }

      &-btn {
        font-weight: 300;
        font-size: 14px;
        line-height: 17px;
        color: $item-dark-text;
        text-transform: uppercase;
        box-sizing: border-box;
        padding: 16px 40px;
        border: 1px solid #a4a4a4;
        background-color: $categories-light;
        cursor: pointer;
        @media (max-width: 667px) {
          width: 100%;
          text-transform: unset;
          padding: 8px;
        }

        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }

  &-right {
    flex-basis: 33%;
    display: flex;
    flex-direction: column;
    @media (max-width: 1024px) {
      flex-basis: unset;
      flex-direction: row;
    }
    @media (max-width: 667px) {
      flex-direction: column;
    }

    &__address {
      margin-bottom: 57.5px;
      @media (max-width: 1024px) {
        flex-basis: 50%;
        margin-right: 16px;
        margin-bottom: 0;
      }
      @media (max-width: 667px) {
        margin-right: 0;
      }

      &-header {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: $background-dark;
        text-transform: uppercase;
        margin-top: 17px;
        margin-bottom: 20px;
      }

      &-input {
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        color: $background-dark;
        box-sizing: border-box;
        padding: 13px 0 16px 17.25px;
        width: 100%;
        border: 1px solid #a4a4a4;
        margin-bottom: 21px;

        &:nth-child(2)::placeholder {
          color: #b1b1b1;
        }
      }

      &-button {
        font-weight: 300;
        font-size: 11px;
        line-height: 13px;
        color: #4a4a4a;
        text-transform: uppercase;
        box-sizing: border-box;
        padding: 10px 15px 12px;
        border: 1px solid #a4a4a4;
        background-color: $categories-light;
        cursor: pointer;
        @media (max-width: 667px) {
          text-transform: unset;
        }
      }
    }

    &__submit {
      background-color: #f5f3f3;
      text-align: right;
      box-sizing: border-box;
      padding: 39px 34px 42px;
      text-transform: uppercase;
      height: 214px;
      @media (max-width: 1024px) {
        flex-basis: 50%;
        transform: translateY(55px);
      }
      @media (max-width: 667px) {
        margin-top: 55px;
        transform: unset;
      }

      &-subtotal {
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        color: #4a4a4a;
        margin-bottom: 12px;

        span {
          margin-left: 30px;
        }
      }

      &-total {
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        color: $background-dark;
        margin-right: 3px;

        span {
          margin-left: 30px;
          font-weight: 700;
        }
      }

      &-hr {
        border: none;
        background-color: #e2e2e2;
        margin: 21px 8px 17px;
        height: 1px;
      }

      &-btn {
        width: 100%;
        background-color: $theme;
        box-sizing: border-box;
        padding-top: 15px;
        padding-bottom: 16px;
        text-align: center;
        color: $categories-light;
        font-weight: 300;
        font-size: 16px;
        line-height: 19px;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
</style>
