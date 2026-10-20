<template>
  <div class="events">
    <AppListing title="Мероприятия" class="events__listing">
      <EventCard
        v-for="(card, index) in list"
        :key="index"
        :data="card"
        class="app-listing__card"
      />
    </AppListing>
  </div>
</template>

<script setup>
const list = ref([]);

const URL = `${useRequestURL().origin}/json/events.json`;

const { data } = await useAsyncData(`events`, () => {
  return $fetch(URL);
});
if (data?.value) list.value = data.value;
</script>

<style lang="less">
.events {
  padding: 140px 0 50px;
  &__listing {
    margin-bottom: 100px;
  }
  &__services {
    .container();
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 50px;
  }
  &__section-description {
    max-width: 870px;
    margin: 0 0 60px;
    font-size: 16px;
    line-height: 22px;
  }
}
</style>
