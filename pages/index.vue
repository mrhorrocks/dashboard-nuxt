<script setup>
const fruitOptions = ref([
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
]);
const selectedFruit = ref("");

const handleChange = selectedOption => {
  selectedFruit.value = selectedOption;
};
</script>

<template>
  <h3 class="page-heading">Hysterectomies</h3>

  <UiHystTabs
    title1="Summary"
    title2="CCG Waiting Times"
    title3="Patient Pathway"
  >
    <template #tab1>1</template>
    <template #tab2>2</template>
    <template #tab3>3</template>
  </UiHystTabs>

  <!--
  ORG
  <UiOrgSelect />
  -->
</template>

<style lang="scss">
.page-heading {
  text-align: center;
  margin: 1rem 0;
  @media (min-width: 1024px) {
    display: none;
  }
}
</style>
