<script setup>
import SummaryWidget from '~/components/widgets/SummaryWidget.vue';
import YearlyExpensesVsRevenues from '~/components/widgets/YearlyExpensesVsRevenues.vue';

defineProps({
  widgets: {
    type: Array,
    required: true,
  }
});

const getWidgetComponent = (type) => {
  switch (type) {
    case 'SUMMARY':
      return SummaryWidget;
    case 'YEARLY_EXPENSES_VS_REVENUES':
      return YearlyExpensesVsRevenues;
  }
}
</script>

<template>
  <section
    v-for="(widget, index) in widgets"
    :key="index"
    class="o-row"
  >
    <component
      :is="getWidgetComponent(widget.type)"
      v-bind="widget.params"
    />
  </section>
</template>
