<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  SubTitle,
} from "chart.js";
import { Line } from "vue-chartjs";
import * as chartConfig from "./chart-data/AdmissionsCoded";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  SubTitle
);

export default {
  name: "AgeDistribution",
  components: {
    Line,
  },
  setup () {
    return {
      data: chartConfig.data,
      options: chartConfig.options,
    };
  },
};
</script>

<template>
  <div class="chart-container">
    <Line :data="data" :options="options" />
  </div>
</template>

<style lang="scss">
.chart-container {
  min-width: 0;
  min-width: 160px;
}
</style>
