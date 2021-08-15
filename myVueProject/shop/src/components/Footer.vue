<template>
  <footer>
    <!-- Free Delivery etc. -->
    <div class="b-footerFeatures">
      <div class="container b-footerFeatures__flexWrapper">
        <div class="b-featuresItem">
          <img
            src="img/delivery.svg"
            alt="Delivery"
            class="b-featuresItem__icon b-featuresItem__icon_1"
          />
          <h2 class="b-featuresItem__header">Free delivery</h2>
          <p class="b-featuresItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="b-featuresItem">
          <img
            src="img/sale.svg"
            alt="Sales"
            class="b-featuresItem__icon b-featuresItem__icon_2"
          />
          <h2 class="b-featuresItem__header">Sales & discounts</h2>
          <p class="b-featuresItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="b-featuresItem">
          <img
            src="img/quality.svg"
            alt="Quality Assurance"
            class="b-featuresItem__icon b-featuresItem__icon_3"
          />
          <h2 class="b-featuresItem__header">Quality assurance</h2>
          <p class="b-featuresItem__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </div>

    <!-- Subscribe -->
    <div class="b-footerSubscribe">
      <div class="container b-footerSubscribe__flexWrapper">
        <div class="b-footerSubscribe__flexItem b-photoAndQuote">
          <img
            src="img/bottom-photo.png"
            alt="Photo"
            class="b-photoAndQuote__photo"
          />
          <p class="b-photoAndQuote__text">
            “Vestibulum quis porttitor dui! Quisque<br />viverra nunc mi,
            <span class="b-photoAndQuote__text b-photoAndQuote__text_italic"
              >a pulvinar purus<br />condimentum</span
            >“
          </p>
        </div>
        <div class="b-footerSubscribe__flexItem b-footerFormSection">
          <p class="b-footerFormSection__header">Subscribe</p>
          <p class="b-footerFormSection__subheader">
            for our newsletter and promotion
          </p>
          <form class="b-footerFormSection__form">
            <p class="b-footerFormSection__formLine">
              <input
                type="text"
                class="b-footerFormSection__input"
                placeholder="Enter Your Email"
              />
              <button type="submit" class="b-footerFormSection__submit">
                Subscribe
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer Bottom -->
    <div class="b-footerContacts">
      <div class="container b-footerContacts__flexWrapper">
        <div class="b-footerContacts__flexItem b-footerContacts__flexItem_left">
          <p class="b-footerContacts__copyright">
            &copy; 2021 Brand All Rights Reserved.
          </p>
        </div>
        <div
          class="b-footerContacts__flexItem b-footerContacts__flexItem_right"
        >
          <div class="b-footerContacts__iconField">
            <img
              src="img/facebook-regular.svg"
              alt="Facebook"
              class="b-footerContacts__icon"
            />
          </div>
          <div class="b-footerContacts__iconField">
            <img
              src="img/instagram-regular.svg"
              alt="Instagram"
              class="b-footerContacts__icon"
            />
          </div>
          <div class="b-footerContacts__iconField">
            <img
              src="img/pinterest-regular.svg"
              alt="Pinterest"
              class="b-footerContacts__icon"
            />
          </div>
          <div class="b-footerContacts__iconField">
            <img
              src="img/twitter-regular.svg"
              alt="Twitter"
              class="b-footerContacts__icon"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped lang="scss">
.b-footerContacts {
  min-height: 79px;
  background-color: #222222;
  @media (max-width: 667px) {
    min-height: 143px;
  }

  &__flexWrapper {
    display: flex;
    justify-content: space-between;
    @media (max-width: 667px) {
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  &__flexItem {
    &_left {
      @media (max-width: 1024px) and (min-width: 668px) {
        margin-left: 16px;
      }
    }

    &_right {
      @media (max-width: 1024px) and (min-width: 668px) {
        margin-right: 16px;
      }
    }
  }

  &__copyright {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #fbfbfb;
    margin-top: 30px;
    @media (max-width: 667px) {
      margin-top: 40px;
      box-sizing: border-box;
      padding-bottom: 9px;
    }
  }

  &__iconField {
    display: inline-block;
    margin: 24px 0 0 7.29px;
    height: 32px;
    width: 31.45px;
    background-color: #ffffff;
    position: relative;
    cursor: pointer;
    transition: background-color 1s ease;
    @media (max-width: 667px) {
      margin-top: 43px;
    }

    &:hover {
      background-color: #f16d7f;

      .b-footerContacts__icon {
        filter: invert(90%) sepia(100%) saturate(12%) hue-rotate(344deg)
          brightness(115%) contrast(100%);
      }
    }
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: filter 0.5s ease;
  }
}

.b-footerFeatures {
  min-height: 341px;
  background-color: #222222;
  @media (max-width: 1024px) {
    min-height: 610px;
  }

  &__flexWrapper {
    display: flex;
    justify-content: space-around;
    text-align: center;
    color: #fbfbfb;
    gap: 30px;
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 0;
      box-sizing: border-box;
      padding-bottom: 48px;
    }
  }
}

.b-footerFormSection {
  &__header {
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    color: #222222;
    text-transform: uppercase;
    margin-top: 150px;
    @media (max-width: 1024px) {
      margin-top: 48px;
    }
  }

  &__subheader {
    font-weight: 400;
    font-size: 18px;
    line-height: 30.1px;
    color: #222222;
    text-transform: uppercase;
  }

  &__formLine {
    white-space: nowrap;
  }

  &__input {
    display: inline-block;
    background-color: #e1e1e1;
    border-radius: 50px 0 0 50px;
    border: none;
    margin-top: 32px;
    width: 256px;
    box-sizing: border-box;
    padding-top: 7px;
    padding-bottom: 6px;
    padding-left: 22px;
    transform: translateX(2px);
    @media (max-width: 667px) {
      width: 178px;
      white-space: nowrap;
    }
  }

  &__submit {
    display: inline-block;
    background-color: #f16d7f;
    color: #ffffff;
    border: none;
    border-radius: 0 50px 50px 0;
    padding-top: 7px;
    padding-bottom: 6px;
    width: 100px;
    cursor: pointer;
    transform: translateX(-2px);
    transition: background-color 1s ease;

    &:hover {
      background-color: #e05c6e7a;
    }
  }
}

.b-footerSubscribe {
  background-image: url(#{$imagesPath}/bottom-background.jpg);
  background-size: cover;
  background-position-x: center;
  min-height: 448px;
  @media (max-width: 1024px) {
    min-height: 693px;
    background-position-x: 25%;
  }
  @media (max-width: 667px) {
    min-height: 550px;
  }

  &__flexWrapper {
    display: flex;
    text-align: center;
    gap: 30px;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__flexItem {
    width: 50%;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
}

.b-photoAndQuote {
  &__photo {
    margin-top: 97px;
    margin-bottom: 30px;
    @media (max-width: 667px) {
      margin-top: 64px;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #222222;

    &_italic {
      font-style: italic;
    }
  }
}

.b-featuresItem {
  &__icon {
    &_1 {
      margin-top: 103px;
      margin-bottom: 28.07px;
    }

    &_2 {
      margin-top: 104px;
      margin-bottom: 19.07px;
    }

    &_3 {
      margin-top: 103px;
      margin-bottom: 25.07px;
    }

    @media (max-width: 1024px) {
      margin-top: 48px;
    }
  }

  &__header {
    font-weight: 400;
    font-size: 19.96px;
    line-height: 24px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }

  &__text {
    font-weight: 300;
    font-size: 13.972px;
    line-height: 17px;
    @media (max-width: 1024px) {
      max-width: 348px;
      margin: 0 auto;
    }
  }
}
</style>


