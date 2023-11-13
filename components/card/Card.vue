<script setup>
  import CCardBase from './CardBase.vue';

  defineProps({
    title: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    subtext: String,
  });
</script>

<template>
  <c-card-base :title="title">
    <div class="c-card__amount">${{ amount }}</div>
    <div
      v-if="subtext"
      class="c-card__subtext"
    >{{ subtext }}</div>
  </c-card-base>
</template>

<script>
  export default {
    name: 'c-card',
  };
</script>

<style lang="scss" scoped>
  .c-card {
    &__amount {
      font-size: 20px;
      font-weight: 500;
    }

    &__subtext {
      margin-left: 16px;
      border-left: 1px solid #000000;
      padding-left: 16px;
      font-size: 16px;
    }
  }
</style>
