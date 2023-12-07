<template>
      <Line
        :data="chartData"
        :options="chartOptions"
        :width="50"
        :height="70"
      />
  </template>
  
  <script>
  import { Line } from "vue-chartjs";
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from "chart.js"

    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    )
  export default {
    props:{
        labels: {
            type: Array,
            default: () => [],
            },
        data: {
            type: Array,
            default: () => [],
        },
    },
    data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: [{ data: this.data , backgroundColor: 'green',label: 'transaction history'}],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
    components: { Line }
  };
  </script>
  
  <style scoped>
  /* Add custom styles as needed */
  </style>
  