<template>
  <div class="items-section">
    <div class="container">
      <h1 class="items-header">Featured Items</h1>
      <p class="items-subheader">
        Shop for items based on what we featured in this week
      </p>
      <div class="items-grid"></div>
      <button type="button" class="items-button">Browse All Products</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_FeaturedItems",
};
</script>

<style lang="scss" scoped>
.items-header {
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: $background-dark;
  text-align: center;
  margin-bottom: 6px;
}

.items-subheader {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #9f9f9f;
  margin-bottom: 48px;
  @media (max-width: 667px) {
    margin-bottom: 65px;
  }
}

.items-button {
  display: block;
  margin: 0 auto 65px;
  border: 1px solid #ff6a6a;
  background-color: transparent;
  box-sizing: border-box;
  padding: 14.5px 38.5px 13.5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f26376;
  cursor: pointer;
  transition: all 1s ease;
  @media (max-width: 667px) {
    margin-bottom: 96.5px;
  }

  &:hover {
    border: 1px solid $theme;
    background-color: $theme;
    color: $categories-light;
  }
}
</style>
