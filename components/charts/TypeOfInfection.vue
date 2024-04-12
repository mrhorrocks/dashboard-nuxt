<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
// import * as chartConfig from "./PatientsByYearData.js";
import chartData from "~/data/chart-data.json";
// import chartData from "./chart-data/AdmissionsCoded";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "PatientsByYear",
  components: {
    Bar,
  },
  // JSON DATA
  setup () {
    return {
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  // TS DATA
  // setup () {
  //   return {
  //     data: chartConfig.data,
  //     options: chartConfig.options,
  //   };
  // },
};
</script>
