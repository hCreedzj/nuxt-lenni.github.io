<!-- components/SvgIcon.vue (или app/components/SvgIcon.vue в Nuxt 4) -->
<script setup>
import { computed, defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// ✅ Заранее подгружаем все SVG из папки (eager: true → сразу в бандл)
const icons = import.meta.glob("@/assets/svg-icons/*.svg", { eager: true });

const iconComponent = computed(() => {
  const path = `/assets/svg-icons/${props.name}.svg`;
  // В ключах glob'а путь будет относительным — учитываем оба варианта
  return (
    icons[path] ||
    icons[`../assets/svg-icons/${props.name}.svg`] ||
    null
  );
});
</script>

<template>
  <component :is="iconComponent" v-if="iconComponent" />
</template>


