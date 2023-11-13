<script setup>
  import { ref } from 'vue';
  import { CButton } from '@/components';

  const props = defineProps({
    fields: {
      type: Array,
      required: true,
    },
    row: {
      type: Object,
      required: true,
    },
  });

  const emit = defineEmits(['save']);

  const data = ref({ ...props.row });

  const save = () => emit('save', data.value);
</script>

<template>
  <form
    class="c-form"
    @submit.prevent="save"
  >
    <div
      v-for="(column, index) in fields"
      :key="index"
      class="c-form-group"
    >
      <label class="c-form-group__label">
        {{ column.label }}
      </label>
      
      <input
        v-if="column.type === 'text'"
        v-model="data[column.name]"
        class="c-form-group__input"
        :name="column.name"
      />
      
      <input
        v-if="column.type === 'price'"
        v-model="data[column.name]"
        class="c-form-group__input"
        :name="column.name"
        type="number"
        step="0.01"
      />

      <select v-if="column.type === 'select'" v-model="data[column.name]" class="c-form-group__input">
        <option
          v-for="option in column.options"
          :key="option.name"
          :value="option.name"
        >
          {{ option.label }}
        </option>
      </select>
      
      <input
        v-if="column.type === 'date'"
        v-model="data[column.name]"
        class="c-form-group__input"
        :name="column.name"
        type="date"
      />
    </div>

    <c-button variant="filled">Save</c-button>
    <!-- <c-button type="button" @click="close">Cancel</c-button> -->
  </form>
</template>

<script>
export default {
  name: 'c-form',
};
</script>

<style lang="scss">
  .c-form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .c-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__label {
      font-size: 1.1em;
      font-weight: 500;
    }

    &__input {
      height: 36px;
      padding: 0 12px;
      border-radius: 4px;
      border: 2px solid #EEEEEE;
      background: #EEEEEE;
      outline: none;
      font-size: 1.1em;
      transition: border-color 150ms ease-in-out;

      &:focus {
        border-color: #0277BD;
      }
    }
  }
</style>
