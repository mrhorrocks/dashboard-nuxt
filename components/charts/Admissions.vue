<template>
  <Line :data="data" :options="options" />
</template>

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
