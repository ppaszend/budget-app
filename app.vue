<script setup>
  import './assets/main.scss';
  import { ONavbar } from '@/components';

  const user = useUserStore();
  const info = await useFetch('/api/info');

  provide('info', info.data);
</script>

<template>
  <div id="page-wrapper">
    <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    </Head>

    <ClientOnly>
      <o-navbar v-if="user.isLogged"></o-navbar>

      <main
        class="page-content"
        :class="{ 'page-content--logged-in': user.isLogged }"
      >
          <NuxtPage />
      </main>

      <div id="modal"></div>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
#page-wrapper {
  display: flex;
}

.c-navbar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: 360px;
  background: #ffffff;
  padding: 24px;
  gap: 16px;

  &__bottom {
    margin-top: auto;
  }
}

.page-content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 64px 24px 32px;

  &--logged-in {
    margin-left: 360px;
  }
}
</style>
