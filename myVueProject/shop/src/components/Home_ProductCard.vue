<template>
  <div class="items-grid-item">
    <div class="items__image-div" :id="'item-' + item.id">
      <img
        :src="'img/item' + item.id + '.jpg'"
        :alt="'Item ' + item.id"
        class="items-grid-img"
      />
      <div class="items-grid__hover-background"></div>
      <img
        src="img/add-to-cart.svg"
        alt="Add to Cart"
        class="items-grid__add-button"
        @click="addToCart"
      />
    </div>
    <h2 class="items-grid-header">{{ item.title }}</h2>
    <p class="items-grid-text">{{ item.desc }}</p>
    <p class="items-grid-price">${{ item.price.toFixed(2) }}</p>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ["item"],
  methods: {
    addToCart() {
      this.$store.dispatch("loadToCart", this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
.items-grid-item {
  background-color: #f8f8f8;
  max-width: 360px;
  @media (max-width: 1024px) {
    max-width: 720px;
  }

  &:nth-child(9) {
    @media (max-width: 1024px) {
      display: none;
    }
    @media (max-width: 667px) {
      display: initial;
    }
  }

  .items__image-div {
    position: relative;

    .items-grid-img {
      width: 100%;
      display: block;
    }

    .items-grid__hover-background {
      display: none;
    }

    .items-grid__add-button {
      display: none;
    }

    &:hover {
      .items-grid__hover-background {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(58, 56, 56, 0.86);
        z-index: 1;
        animation-name: backgroundAnimation;
        animation-duration: 1s;
        animation-timing-function: ease;
      }

      .items-grid__add-button {
        display: inline;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        cursor: pointer;
        animation-name: addAnimation;
        animation-duration: 1s;
        animation-timing-function: ease;
      }
    }
  }

  .items-grid-header {
    margin: 24px 16px 13px 16px;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: $item-dark-text;
  }

  .items-grid-text {
    margin: 0 16px 18px 16px;
    font-weight: 300;
    font-size: 14px;
    line-height: 17px;
    color: #5d5d5d;
  }

  .items-grid-price {
    margin: 0 16px 20px 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: $theme;
  }
}

@keyframes addAnimation {
  from {
    opacity: 0;
    top: 10%;
  }

  to {
    opacity: 1;
    top: 50%;
  }
}

@keyframes backgroundAnimation {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
