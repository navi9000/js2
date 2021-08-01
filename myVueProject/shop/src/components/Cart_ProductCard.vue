<template>
  <div class="cart-flex-left__item">
    <img
      :src="'img/item' + item.id + '.jpg'"
      :alt="'Photo ' + item.id"
      class="cart-flex-left__item-img"
    />
    <h2 class="cart-flex-left__item-header">{{ item.title }}</h2>
    <p class="cart-flex-left__item-price">
      Price: <span class="theme-color">$ {{ item.price }}</span>
    </p>
    <p class="cart-flex-left__item-color">Color: Red</p>
    <p class="cart-flex-left__item-size">Size: XI</p>
    <p class="cart-flex-left__item-quantity">
      Quantity:
      <input
        type="number"
        class="cart-flex-left__item-quantity-input"
        v-model.number="item.quantity"
        @change="changeQuantity(item)"
        min="0"
        step="1"
      />
    </p>
    <img
      src="img/close-button.svg"
      alt="Close"
      class="cart-flex-left__item-close"
      :key="item.id"
      :item="item"
      @click="removeFromCart(item)"
    />
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
    },
    changeQuantity(item) {
      this.$store.dispatch("changeQuantity", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-flex-left__item {
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
</style>