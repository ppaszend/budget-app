<script setup>
  import { OIcon } from '@/components';

  defineProps({
    icon: {
      type: [String, Boolean],
      default: undefined,
    },
    active: Boolean,
    disabled: Boolean,
    variant: {
      type: String,
      default: 'default',
    },
  });
</script>

<template>
  <button
    :class="{
      [`c-button c-button--${variant}`]: true,
      'is-active': active
    }"
    :disabled="disabled"
  >
    <div class="c-button__icon">
      <o-icon
        v-if="icon"
        :name="icon"
      />
    </div>
    <div class="c-button__label">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'c-button',
  };
</script>

<style lang="scss" scoped>
  .c-button {
    height: 40px;
    border-radius: 4px;
    background: #EEEEEE;
    border: none;
    font-size: 1.2em;
    cursor: pointer;

    &--filled {
      background: #0277BD;
      color: #ffffff;
    }

    &__label {
      font-weight: 500;
    }
  }
</style>
