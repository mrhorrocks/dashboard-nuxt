<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: "title prop here",
  },
  subtitle: {
    type: String,
    required: false,
  },
  open: {
    type: String,
    default: "00",
  },
  difference: {
    type: String,
    default: "00",
  },
  lap: {
    type: String,
    default: "0000",
  },
});
//
</script>

<template>
  <div class="pathway-stat-card">
    <p class="title">{{ title }}</p>
    <p class="subtitle">{{ subtitle }}</p>
    <p class="open">{{ open }}</p>
    <p class="difference">{{ difference }}</p>
    <p class="lap">{{ lap }}</p>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.pathway-stat-card {
  background-color: $light-grey;
  padding: 1rem;
  margin: 0.5rem;
  .title {
    font-weight: bold;
  }
  .subtitle {
    font-size: 0.85rem;
  }
  .open {
    font-size: 1.25rem;
  }
  .difference {
    font-size: 1.25rem;
  }
  .lap {
    font-size: 1.25rem;
  }
}
</style>
