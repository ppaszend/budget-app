import { useRoute } from 'vue-router';

export function isRoute (routePath) {
  const route = useRoute();
  return route.path === routePath;
};
