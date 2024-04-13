<script setup>
defineProps({
  text: {
    type: String,
    required: false,
    default: "text-prop-is-required",
  },
  href: {
    type: String,
    required: false,
    default: "/",
  },
});
</script>

<template>
  <!-- <button class="hyst-nav">{{ text }}</button> -->
  <NuxtLink :href="href" class="hyst-nav">{{ text }}</NuxtLink>
</template>

<style lang="scss">
@import "@/assets/scss/partials/colours";
a.hyst-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 1rem;
  font-family: "Inter-Regular";
  text-decoration: none;
  background-color: $medium-grey;
  color: white;
  border-radius: 0.313rem; // 5px
  margin-bottom: 0.5rem;
  border: 0;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: $primary-green;
  }
  @media (min-width: 768px) {
    width: 210px;
  }
  @media (min-width: 1024px) {
    margin-right: 0.5rem;
  }
}
</style>
