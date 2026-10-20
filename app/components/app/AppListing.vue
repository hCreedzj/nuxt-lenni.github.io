<template>
  <section class="app-listing">
    <h1 class="app-listing__title section-title">{{ title }}</h1>

    <div class="app-listing__list">
      <slot />
    </div>

    <button type="button" class="more-btn app-listing__more-btn">
      Показать всё

      <SvgIcon
        class="more-btn__arrow"
        name="arrow_down"
        width="62"
        height="92"
      />
    </button>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less">
  .app-listing {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1414px;
    margin: 0 auto;
    padding-left: 40px;
    padding-right: 40px;

    @media @bw1340 {
      padding-left: 30px;
      padding-right: 30px;
    }
    @media @bw768 {
      padding-left: 20px;
      padding-right: 20px;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      gap: 115px 58px;

      @media @bw1660 { gap: 90px 40px; }
      @media @bw1020 { gap: 90px 30px; }
      @media @bw670 {
        gap: 60px 0;
        justify-content: center;
      }

      // карточки приходят из <slot />, обёртки нет
      > .event-card {
        width: calc(33.3333% - 38.666px);
        max-width: none; // сброс max-width: 406px от самого .event-card

        @media @bw1660 {
          width: calc(33.3333% - 26.666px);
        }
        @media @bw1020 {
          width: calc(50% - 15px);
        }
        @media @bw670 {
          max-width: 450px;
          width: 100%;
        }
      }
    }

    &__more-btn {
      align-self: center;
      margin-top: 85px;

      @media @bw1340 { margin-top: 75px; }
      @media @bw1170 { margin-top: 55px; }
      @media @bw768 { margin-top: 40px; }
    }
  }
</style>
