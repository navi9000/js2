<template>
  <div class="top-section">
    <div class="top-section__text-structure">
      <p id="top-line">the brand</p>
      <p id="bottom-line">
        of luxurious <span class="theme-color">fashion</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home_TopSection",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.top-section {
  height: 754px;
  background-color: $theme-light;
  background-image: url(#{$imagesPath}/main-top.png);
  background-repeat: no-repeat;
  position: relative;
  margin-bottom: 65px;
  @media (max-width: 1024px) {
    height: 368px;
    background-size: 386px;
    margin-bottom: 20px;
  }
  @media (max-width: 667px) {
    background-image: none;
    margin-bottom: 64px;
  }

  &__text-structure {
    border-left: 12px solid $theme;
    box-sizing: border-box;
    padding-left: 16px;
    margin-left: 63px;
    text-transform: uppercase;
    color: $background-dark;
    position: absolute;
    top: 290px;
    left: 50%;
    @media (max-width: 1024px) {
      top: 138px;
      margin-left: 10px;
    }
    @media (max-width: 667px) {
      top: 50%;
      transform: translate(-50%, -50%);
      margin-left: 0;
    }

    #top-line {
      font-weight: 900;
      font-size: 48px;
      line-height: 58px;
      white-space: nowrap;
      @media (max-width: 1024px) {
        font-size: 44px;
        line-height: 53px;
      }
    }

    #bottom-line {
      font-weight: 700;
      font-size: 32px;
      line-height: 38px;
      white-space: nowrap;
      @media (max-width: 1024px) {
        font-size: 24px;
        line-height: 28.8px;
      }
    }
  }
}
</style>
