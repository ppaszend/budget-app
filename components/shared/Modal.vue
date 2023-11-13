<script setup>
  defineProps({
    title: {
      type: String,
      default: 'Edit row',
    },
  });
  
  defineEmits(['close']);
</script>

<template>
  <div
    class="c-modal-wrapper"
    @click.self="$emit('close')"
  >
    <div class="c-modal">
      <h2 class="c-modal__title">{{ title }}</h2>

      <div class="c-modal__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-modal',
};
</script>

<style lang="scss">
  .c-modal-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(#222, 0.5);
  }

  .c-modal {
    background: #ffffff;
    width: 100%;
    max-width: 600px;
    border-radius: 10px;
    padding: 24px;

    &__title {
      margin-bottom: 24px;
    }
  }
</style>
