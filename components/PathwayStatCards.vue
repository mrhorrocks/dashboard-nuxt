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
    <p>{{ title }}</p>
    <p>{{ subtitle }}</p>
    <p>{{ open }}</p>
    <p>{{ difference }}</p>
    <p>{{ lap }}</p>
  </div>
</template>

<style lang="scss">
.pathway-stat-card {
  background-color: pink;
}
</style>
