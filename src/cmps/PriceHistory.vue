<template>
    <Bar
    :data="chartData"
    :options="chartOptions"
    :id="chartId"
    :style="myStyles"
   />
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
  } from "chart.js"
    import { Bar } from "vue-chartjs"

  ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
)
  
  export default {
    components: {
      Bar
    },
    props: {
    chartId: {
      type: String,
      default: "bar-chart",
    },
    datasetIdKey: {
      type: String,
      default: "label",
    },
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
        datasets: [{ data: this.data, backgroundColor: '#f87979',label: 'price history' }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  computed: {
    myStyles () {
      return {
        height: '40px',
        width: '50px'
      }
    }
  }
  }
  </script>
  