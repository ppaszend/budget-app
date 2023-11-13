<script setup>
  defineProps({
    title: {
      type: String,
      required: true,
    },
    fullWidth: Boolean,
  });
</script>

<template>
  <div
    class="c-card-base"
    :class="{ 'c-card-base--full-width': fullWidth }"
  >
    <div class="c-card-base__head">
      {{ title }}
      <slot name="head" />
    </div>

    <div class="c-card-base__body">
        <slot />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'c-card-base',
  };
</script>

<style lang="scss" scoped>
  .c-card-base {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 16px 24px;
    background-color: #ffffff;
    border-radius: 10px;
    flex-grow: 1;

    &--full-width {
      width: 100%;
    }

    &__head {
      font-size: 20px;
      font-weight: 500;
    }

    &__body {
      display: flex;
      align-items: center;
    }
  }
</style>
