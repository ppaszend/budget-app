export default defineNuxtRouteMiddleware((to, from) => {
  const user = useUserStore();
  console.log(to.path !== '/login' && !user.isLogged)

  if (to.path !== '/login' && !user.isLogged) {
    return navigateTo('/login')
  }
});
