<template>
  <form class="subscribe-form">
    <h4 class="subscribe-form__title">
      Подпишись и будь в курсе происходящего
    </h4>
  </form>
</template>

<style lang="less">
.subscribe-form {
  width: 405px;
  max-width: 100%;

  &__title {
    margin: 0 0 25px;
    font-size: 16px;
    line-height: 22px;
    @media @bw500 {
      margin: 0 0 15px;
      font-weight: 400;
      font-size: 13px;
      line-height: 18px;
    }
  }
}
</style>
