<script setup>
  import { OIcon } from '@/components';

  defineProps({
    iconName: {
      type: String,
      required: false,
    },
    active: Boolean,
  });
</script>

<template>
  <button
    class="c-icon-button"
    :class="{ 'is-active': active }"
  >
    <o-icon :name="iconName" />
  </button>
</template>

<script>
  export default {
    name: 'c-icon-button',
  };
</script>

<style lang="scss" scoped>
  .c-icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 0;
    background: transparent;
    transition: background 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      background: #EEEEEE;
    }

    &.is-active {
      background: #0277BD;
      color: #ffffff;
    }
  }
</style>
