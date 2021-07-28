<template>
  <div class="categories">
    <div class="container categories-grid">
      <div class="categories-item categories-item-1">
        <img src="img/for-women.jpg" alt="For Women" />
        <div class="categories-text">
          <p class="categories-text__top">30% off</p>
          <p class="categories-text__bottom">for women</p>
        </div>
      </div>
      <div class="categories-item categories-item-2">
        <img src="img/for-men.jpg" alt="For Men" />
        <div class="categories-text">
          <p class="categories-text__top">hot deal</p>
          <p class="categories-text__bottom">for men</p>
        </div>
      </div>
      <div class="categories-item categories-item-3">
        <img src="img/for-kids.jpg" alt="For Kids" />
        <div class="categories-text">
          <p class="categories-text__top">new arrivals</p>
          <p class="categories-text__bottom">for kids</p>
        </div>
      </div>
      <div class="categories-item categories-item-4">
        <img src="img/accessories.jpg" alt="Accessories" />
        <div class="categories-text">
          <p class="categories-text__top">luxurious & trendy</p>
          <p class="categories-text__bottom">accessories</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_ForWomenForMen",
};
</script>

<style lang="scss" scoped>
.categories {
  margin-bottom: 96px;
  @media (max-width: 1024px) {
    margin-bottom: 155px;
  }
  @media (max-width: 667px) {
    margin-bottom: 64px;
  }

  &-grid {
    display: grid;
    grid-gap: 30px;
    @media (max-width: 667px) {
      grid-gap: 32px;
    }

    .categories-item {
      position: relative;

      img {
        width: 100%;
        display: block;
      }

      .categories-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        white-space: nowrap;
        text-transform: uppercase;

        &__top {
          font-weight: 400;
          color: $categories-light;
          font-size: 16px;
          line-height: 19px;
        }

        &__bottom {
          font-weight: 700;
          color: $theme;
          font-size: 24px;
          line-height: 29px;
        }
      }
    }

    .categories-item-1 {
      grid-row: 1;
      grid-column: 1;
    }

    .categories-item-2 {
      grid-row: 1;
      grid-column: 2;
      @media (max-width: 667px) {
        grid-row: 2;
        grid-column: 1;
      }
    }

    .categories-item-3 {
      grid-row: 1;
      grid-column: 3;
      @media (max-width: 667px) {
        grid-row: 3;
        grid-column: 1;
      }
    }

    .categories-item-4 {
      grid-row: 2;
      grid-column: 1 / 4;
      @media (max-width: 667px) {
        grid-row: 4;
        grid-column: 1;
      }
    }
  }
}
</style>
