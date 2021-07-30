<template>
  <header class="b-header">
    <div class="container b-navBar">
      <div class="b-navBar__group">
        <router-link to="/"
          ><img
            src="img/logo.svg"
            alt="Logo"
            class="b-navBar__item b-navBar__item_logo"
        /></router-link>
        <img src="img/search-icon.svg" alt="Search" class="b-navBar__item" />
      </div>
      <div class="b-navBar__group">
        <img
          src="img/menu-icon.svg"
          alt="Menu"
          class="b-navBar__item b-navBar__item_right"
          @click="toggle_menu"
        />
        <img
          src="img/user-icon.svg"
          alt="User"
          class="b-navBar__item b-navBar__item_right b-navBar__item_userIcon"
        />
        <router-link to="/cart"
          ><img
            src="img/cart-icon.svg"
            alt="Cart"
            class="b-navBar__item b-navBar__item_right b-navBar__item_cart"
          />
          <span
            class="b-cart__number"
            v-bind:class="{ 'b-cart__number_hidden': cart_quantity == 0 }"
            >{{ cart_quantity }}</span
          ></router-link
        >
      </div>
    </div>
    <div class="b-header__navMenu b-navMenu b-header__navMenu_hidden">
      <img
        src="img/close-button.svg"
        alt="Close"
        class="b-navMenu__closeBtn"
        @click="hide_menu"
      />
      <h2 class="b-navMenu__header">Menu</h2>
      <h3 class="b-navMenu__subheader">Men</h3>
      <ul>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Accessories</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Bags</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Denim</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">T-Shirts</a>
        </li>
      </ul>
      <h3 class="b-navMenu__subheader">Women</h3>
      <ul>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Accessories</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Jackets & Coats</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Polos</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">T-Shirts</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Shirts</a>
        </li>
      </ul>
      <h3 class="b-navMenu__subheader">Kids</h3>
      <ul>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Accessories</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Jackets & Coats</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Polos</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">T-Shirts</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Shirts</a>
        </li>
        <li class="b-navMenu__listItem">
          <a href="#" class="b-navMenu__link">Bags</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    hide_menu: function () {
      let $navMenu = document.querySelector(".b-header__navMenu");
      $navMenu.classList.add("b-header__navMenu_hidden");
    },
    toggle_menu: function () {
      let $navMenu = document.querySelector(".b-header__navMenu");
      $navMenu.classList.toggle("b-header__navMenu_hidden");
    },
  },
  computed: {
    cart_quantity: function () {
      return this.$store.getters.getCart.reduce(
        (acc, value) => acc + value.quantity,
        0
      );
    },
  },
};
</script>

<style scoped lang="scss">
.b-header {
  height: 75px;
  background-color: #222222;
  position: relative;

  &__navMenu {
    position: absolute;
    right: 0;
    top: 75px;
    z-index: 2;

    &_hidden {
      display: none;
    }
  }
}

.b-navBar {
  display: flex;
  justify-content: space-between;

  &__item {
    cursor: pointer;

    &_right {
      margin-left: 33px;
      margin-top: 26px;
    }

    &_logo {
      margin: 18px 41px 0 1px;
      @media (max-width: 1024px) {
        margin-left: 16px;
      }
      @media (max-width: 667px) {
        margin-left: 0;
      }
    }

    &_cart {
      position: relative;
      margin-right: 1px;
      @media (max-width: 1024px) {
        margin-right: 16px;
      }
      @media (max-width: 667px) {
        display: none;
      }
    }

    &_userIcon {
      @media (max-width: 667px) {
        display: none;
      }
    }
  }
}

.b-cart__number {
  position: absolute;
  text-align: center;
  background-color: $theme;
  z-index: 100;
  font-size: 12px;
  line-height: 21px;
  height: 19px;
  width: 19px;
  color: #ffffff;
  border-radius: 50%;
  top: 21px;
  right: calc(50% - 580px);
  @media (max-width: 1180px) {
    right: calc(50% - 562px);
  }
  @media (max-width: 1140px) {
    right: 8px;
  }
  @media (max-width: 1024px) {
    right: 22px;
  }
  @media (max-width: 667px) {
    display: none;
  }

  &_hidden {
    display: none;
  }
}

.b-navMenu {
  width: 232px;
  height: calc(100vh - 75px);
  background-color: $categories-light;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  @media (max-width: 1024px) {
    height: 680px;
  }

  &__closeBtn {
    margin: 16px 0 9px 203px;
    display: inline-block;
    text-align: right;
    cursor: pointer;
  }

  &__header {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: $item-dark-text;
    margin-left: 34px;
    margin-bottom: 24px;
    text-transform: uppercase;
  }

  &__subheader {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: $theme;
    margin-left: 33px;
    margin-top: 20px;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  &__listItem {
    list-style-type: none;
    margin-bottom: 11px;
  }

  &__link {
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #6f6e6e;
    margin-left: 54.5px;
  }
}
</style>