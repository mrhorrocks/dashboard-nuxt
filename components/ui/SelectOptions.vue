<script setup>
// Define props
defineProps({
  id: {
    type: String,
    required: false,
    default: "id-prop-is-required",
  },
  label: {
    type: String,
    required: false,
  },
}),

import jsonDataFile from "~/data/dashboard-data.json";
const jsonDataFile;
const selectedOption = ref("selectedOption");
const trust_code = ref("");
</script>

<template>
  <div class="selectbox">
    <p>{{ selectedOption }}</p>
    <p>{{ trust_code }}</p>
    <!-- <p>{{ id }}</p> -->
    <label v-if="label" :for="id">{{ label }}</label>
    <select v-model="selectedOption" :id="id">
      <option v-if="!selectedOption" value="">Select an organisation</option>
      <!--  -->
      <option
        v-for="item in jsonDataFile.orgs"
        :key="item.trust_code"
        :id="item.trust_code"
        :value="item.trust_name"
      >
        {{ item.trust_name }}
      </option>
      <slot></slot>
    </select>
  </div>
</template>

<style scss scoped>
.selectbox {
  width: 100%;
  label {
    display: block;
    font-size: 1.25rem;
    line-height: 2rem;
    margin-bottom: 0.25rem;
  }
  select {
    border: 2px solid var(--first-colour);
    padding: 0.5rem;
    width: 100%;
  }
}
</style>
