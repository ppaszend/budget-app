<script setup>
import CustomLayout from '~/layouts/CustomLayout.vue';
import TableLayout from '~/layouts/TableLayout.vue';

const route = useRoute();

const slug = route.path === '/' ? 'home' : route.params.slug;
const { data: page, error } = await useFetch(`/api/views/${slug}`);

definePageMeta({
  middleware: ['authorized'],
  validate: async (route) => {
    const slug = route.path === '/' ? 'home' : route.params.slug;
    const { error } = await useFetch(`/api/views/${slug}`);

    return error?.value?.statusCode !== 404;
  }
});

const layout = computed(() => {
  switch (page.value?.type) {
    case 'TABLE':
      return TableLayout;
    case 'CUSTOM':
      return CustomLayout;
  }
})
</script>

<template>
  <component
    :is="layout"
    v-bind="page.params"
  />
</template>
