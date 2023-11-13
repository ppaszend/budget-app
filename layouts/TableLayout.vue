<script setup>
  import { ref } from 'vue';
  import { OTable, CCardBase, CModal, CForm } from '@/components';

  const props = defineProps({
    columns: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  });

  const editRowModal = ref(null);
  let resolvedData = ref(null);

  switch (props.data.type) {
    case 'FETCH':
      resolvedData = await useFetch(props.data.path).data;
  }

  const edit = (row) => {
    editRowModal.value = {
      fields: props.columns,
      row,
    };
  };

  const save = (value) => {
    props.store.updateOne(value);
    editRowModal.value = null;
  };
</script>

<template>
  <div class="o-row" v-if="data">
    <c-card-base title="Revenues" full-width>
      <o-table
        :columns="columns"
        :data="resolvedData"
        @modal:edit-row="edit"
      />
    </c-card-base>
  </div>

  <Teleport v-if="editRowModal" to="#modal">
    <c-modal @close="editRowModal = null">
      <c-form
        v-bind="editRowModal"
        @save="save"
      />
    </c-modal>
  </Teleport>
</template>
