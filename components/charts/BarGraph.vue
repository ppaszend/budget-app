<script setup>
  import { ref } from 'vue';
  import { Bar } from 'vue-chartjs';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  import CCardBase from '../card/CardBase.vue';

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

  const chartData = ref({
    labels: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
    datasets: [
      {
        data: [5658, 7486, 7820, 5748, 8938, 7233, 9576, 8019, 9374, 6676, 5132, 6151],
        backgroundColor: '#00C853',
        barThickness: 16,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
        },
      },
      {
        data: [-5658, -7486, -7820, -5748, -8938, -7233, -9576, -8019, -9374, -6676, -5132, -6151],
        backgroundColor: '#EF5350',
        barThickness: 16,
        borderRadius: {
          bottomLeft: 8,
          bottomRight: 8,
        },
      },
    ],
  });

  const chartOptions = ref({
    animation: false,
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          callback(value) {
            const absValue = Math.abs(value);

            if (absValue > 1000) {
              return `$${Math.round(absValue / 1000)}K`;
            }

            return `$${absValue}`;
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title(context) {
            return context[0].datasetIndex ? 'Expense': 'Revenue';
          },
          label(context) {
            return `$${Math.abs(context.raw).toFixed(0)}`;
          },
        },
      },
    },
  });
</script>

<template>
  <c-card-base title="Yearly balance">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </c-card-base>
</template>

<script>
export default {
    name: 'c-bar-graph',
};
</script>

<style lang="scss" scoped>
</style>
