<template>
  <article v-if="data" class="event">
    <header class="event__header">
      <h1 class="event__title title">{{ data.title }}</h1>

      <div class="event__about">
        <div class="event__info">
          <time v-if="datetime" :datetime="data.date" class="event__time">
            {{ datetime.date }}
          </time>
          <div class="event__info-text">{{ data.location }}</div>
        </div>

        <picture class="event__picture">
          <source type="image/webp" :srcset="data.img_webp" />

          <img :src="data.img" :alt="data.alt" class="event__image" />
        </picture>

        <div class="event__info">
          <span v-if="datetime" class="event__time" data-caption="начало">
            {{ datetime.time }}
          </span>
          <div class="event__info-text">{{ data.address }}</div>
        </div>
      </div>
    </header>

    <div class="event__container">
      <div class="content event__content" v-html="data.content"></div>
    </div>
  </article>
</template>

<script setup>
const slug = computed(() => useRoute().params.event);
const URL = computed(
  () => `${useRequestURL().origin}/json/events/${slug.value}.json`,
);

const { data } = await useFetch(URL);

const datetime = computed(() => {
  try {
    const date = new Date(data.value.date);
    return {
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  } catch {
    return null;
  }
});
</script>

<style lang="less">
.event {
  padding: 40px 0 155px;
  @media @bw1340 {
    padding-bottom: 170px;
  }
  @media @bw1020 {
    padding-bottom: 100px;
  }
  @media @bw768 {
    padding-top: 80px;
  }

  &__container {
    .container();
  }

  &__header {
    margin-bottom: 60px;
  }

  &__title {
    font-family: @font1;
    font-size: 70px;
    font-weight: 500;
    line-height: 1.285;
    text-align: center;
    margin: 0 0 40px;
    @media @bw1020 {
      font-size: 40px;
    }
    @media @bw600 {
      font-size: 30px;
    }
    @media @bw500 {
      font-size: 20px;
    }
  }

  
  &__about {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas: "before img after";
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 942px;
    margin: 0 auto;
    @media @bw768 {
      grid-template-columns: auto auto;
      grid-template-areas:
        "img img"
        "before after";
      justify-content: center;
      gap: 30px;
    }
  }

  
  &__info {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &::before,
    &::after {
      content: "";
      display: block;
      height: 1px;
    }

    &:first-child {
      grid-area: before;
      text-align: right;

      &::before,
      &::after {
        background: linear-gradient(to left, @black 20%, transparent 100%);
      }
    }

    &:last-child {
      grid-area: after;
      text-align: left;

      &::before,
      &::after {
        background: linear-gradient(to right, @black 20%, transparent 100%);
      }
    }
  }

  &__picture {
    grid-area: img;
    justify-self: center;
    width: 100%;
    display: block;
  }

  &__image {
    display: block;
    width: 100%;
    max-width: 506px;
    height: auto;
    object-fit: cover;
  }

  
  &__time {
    font-family: @font3;
    font-size: 30px;
    font-weight: 400;
    @media @bw1020 {
      font-size: 18px;
    }

    
    &[data-caption]::after {
      content: attr(data-caption);
      display: inline-block;
      margin-left: 8px;
      font-family: @font3;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      @media @bw1020 {
        font-size: 12px;
      }
    }
  }

  
  &__info-text {
    font-family: @font3;
    font-weight: 700;
    font-size: 16px;
    text-transform: uppercase;
    color: @black;
    @media @bw1020 {
      font-size: 12px;
    }
  }

  &__content {
    max-width: 870px;
    margin: 80px 0;
  }
}
</style>
