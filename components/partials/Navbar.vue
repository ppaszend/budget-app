<script setup>
import { CNavbarButton, CProfile, OBadge } from '@/components';
import { isRoute } from '@/utils/helpers';
import { useUserStore } from '@/stores/user';

const info = inject('info');

const user = useUserStore();
</script>

<template>
  <nav class="c-navbar" v-if="user.data">
    <div
      v-for="(link, index) in info.sidebarMenu"
      :key="index"
      class="c-navbar__item"
    >
      <nuxt-link :to="link.to">
        <c-navbar-button
          :icon="link.icon"
          :active="isRoute(link.to)"
          :disabled="link.disabled || (link.premium && !user.data.premium.active)"
        >
          {{ link.label }}
          <o-badge v-if="link.premium && !user.data.premium.active">PRO</o-badge>
        </c-navbar-button>
      </nuxt-link>

      <div
        v-if="link.subMenu && !(link.premium && !user.data.premium.active)"
        class="c-navbar__sub-menu"
      >
        <nuxt-link
          v-for="(item, index) in link.subMenu"
          :key="index"
          :to="link.to"
        >
          <c-navbar-button>
            {{ item.label }}
          </c-navbar-button>
        </nuxt-link>
      </div>
    </div>

    <div
      v-if="user.isLogged"
      class="c-navbar__bottom"
    >
      <c-profile v-bind="user.data" />
    </div>
  </nav>
</template>

<script>
export default {
  name: 'o-navbar',
};
</script>

<style lang="scss" scoped>
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

  &__sub-menu {
    margin-left: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
  }

  &__bottom {
    margin-top: auto;
  }
}
</style>
