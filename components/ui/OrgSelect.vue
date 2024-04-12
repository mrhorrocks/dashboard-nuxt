<script setup>
import { ref } from "vue";
import jsonDataFile from "~/data/dashboard-data.json";
import { useDropdownStore } from "~/stores/orgcode";
const dropdownStore = useDropdownStore();
const selectedOrg = ref(dropdownStore.selectedOrg);

function handleChange (event) {
  dropdownStore.setSelectedOption(event.target.value);
}
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
});
</script>

<template>
  <p>Selected Option: {{ selectedOrg }}</p>
  <div class="selectbox">
    <label :for="id">{{ label }}</label>
    <select v-model="selectedOrg" @change="handleChange" :id="id">
      <option
        v-for="item in jsonDataFile.orgs"
        :key="item.trust_code"
        :id="item.trust_code"
        :value="item.trust_name"
      >
        {{ item.trust_name }}
      </option>
    </select>
  </div>
</template>

<style lang="scss">
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
