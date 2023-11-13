<script setup>
  import { OIcon } from '@/components';

  defineProps({
    icon: {
      type: [String, Boolean],
      default: undefined,
    },
    active: Boolean,
    disabled: Boolean,
  });
</script>

<template>
  <button
    class="c-navbar-button"
    :class="{ 'is-active': active }"
    :disabled="disabled"
  >
    <div class="c-navbar-button__icon">
      <o-icon
        v-if="icon"
        :name="icon"
      />
    </div>
    <div class="c-navbar-button__label">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'c-navbar-button',
  };
</script>

<style lang="scss" scoped>
  .c-navbar-button {
    display: flex;
    align-items: center;
    gap: 16px;
    border: 0;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    padding: 0 24px;
    background: #ffffff;
    transition: background 200ms ease-in-out;
    cursor: pointer;

    &:disabled {
      cursor: default;
      opacity: 0.5;
    }

    &:not(:disabled) {
      &:hover {
        background: #EEEEEE;
      }

      &.c-navbar-button.is-active {
        background: #0277BD;
        color: #ffffff;
      }
    }

    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 100%;
    }

    &__label {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 20px;
    }
  }
</style>
