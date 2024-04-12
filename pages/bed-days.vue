<script setup>
useHead({
  titleTemplate: "Resources - %s",
});

// GET DATA
// const {
//   data: dashboardData,
//   pending,
//   error
// } = await useFetch(
//   'https://mrhorrocks.github.io/data/dashboard/dashboard-data.json'
// )
//

const url = useRequestURL();

import jsonDataFile from "~/data/dashboard-data.json";
</script>

<template>
  <h2>Referrals</h2>
  <!-- <span v-for="item in dashboardData.orgs"> {{ item.trust_code }}, </span> -->
  <!-- <span v-for="item in jsonDataFile.orgs"> {{ item.trust_code }}, </span> -->
  <p>Top Referring CCGs</p>
  <p>ADD CARDS</p>
</template>

<style lang="scss">
//
</style>
