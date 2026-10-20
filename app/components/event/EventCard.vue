<template>
  <article class="event-card">
    <NuxtLink :to="`/events/${data.slug}`" class="event-card__link">
      <picture class="event-card__picture">
        <source type="image/webp" :srcset="data.img_webp" />

        <img
          :src="data.img"
          :alt="data.alt"
          class="event-card__img"
          loading="lazy"
          decoding="async"
        />
      </picture>

      <h4 class="event-card__title">{{ data.title }}</h4>

      <p class="event-card__description">{{ data.description }}</p>

      <time v-if="date" :datetime="data.date" class="event-card__time">
        {{ date }}
      </time>
    </NuxtLink>
  </article>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});

const date = computed(() => {
  if (!props.data.date) return null;

  const d = new Date(props.data.date);
  if (Number.isNaN(d.getTime())) return null;

  return `${d.toLocaleDateString("ru-RU")} | начало ${d.toLocaleTimeString(
    "ru-RU",
    { hour: "2-digit", minute: "2-digit" },
  )}`;
});
</script>

<style lang="less">
.event-card {
  display: flex;
  max-width: 406px;
  width: 100%;
  min-width: 280px;

  &__link {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: @black;
    text-decoration: none;

    &:hover,
    &:focus-visible {
      .event-card__title {
        color: #bc3324;
        text-decoration-color: #bc3324;
      }
    }

    &:focus-visible {
      outline: 2px solid #bc3324;
      outline-offset: 2px;
    }
  }

  &__picture {
    display: block;
    position: relative;
    width: 100%;
    margin: 0 0 25px;
    font-size: 0;
    overflow: hidden;

    &::after {
      content: "";
      display: block;
      width: 100%;
      padding-top: 107.16%;
    }
  }

  &__img {
    display: block;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__title {
    margin: 0 0 15px;
    min-height: 66px;
    color: @black;
    font-weight: 600;
    font-size: 24px;
    line-height: 33px;
    text-decoration: underline transparent;
    transition:
      color 0.2s,
      text-decoration-color 0.2s;

    @media @bw1660 {
      margin: 0 0 10px;
    }
    @media @bw1340 {
      min-height: 54px;
      font-size: 20px;
      line-height: 27px;
    }
    @media @bw768 {
      font-size: 16px;
      min-height: 45px;
      line-height: 22px;
    }
  }

  &__description {
    margin: 0 0 auto;
    font-size: 16px;
    line-height: 22px;
    @media @bw768 {
      font-size: 14px;
      line-height: 19px;
    }
  }

  &__time {
    margin: 15px 0 0;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
  }
}
</style>
