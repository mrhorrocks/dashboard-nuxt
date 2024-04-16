<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
import * as chartConfig from "./chart-data/InfectionsLap.ts";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "App",
  components: {
    Doughnut,
  },
  data () {
    return chartConfig;
  },
};
</script>

<template>
  <div style="min-height: 337px">
    <Doughnut :data="data" :options="options" />
  </div>
</template>
