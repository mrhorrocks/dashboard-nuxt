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
import { Bar } from "vue-chartjs";
import * as chartConfig from "./chart-data/AverageLengthStayOpen";

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
  name: "Admissions",
  components: {
    Bar,
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
  <h3 class="chart-title">
    Average length of Stay Benchmarked
    <span>April 2018 to March 2019</span>
  </h3>
  <div style="height: 270px">
    <Bar :data="data" :options="options" />
  </div>
</template>

<style lang="scss">
.chart-container {
  min-width: 0;
}
</style>
