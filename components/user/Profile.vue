<script setup>
import { CIconButton, OBadge } from '@/components';
import { IconName } from '@/enums';

const user = useUserStore();

defineProps({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  avatar: String,
  premium: Object,
});
</script>

<template>
  <div class="c-profile">
    <div class="c-profile__avatar">
      <img
        v-if="avatar"
        :src="avatar"
      >
    </div>

    <div>
      <div class="c-profile__name">
        <span>{{ name }}</span>
        <o-badge v-if="premium.active">PRO</o-badge>
      </div>

      <div class="c-profile__email">{{ email }}</div>
    </div>

    <div class="c-profile__buttons">
      <c-icon-button :icon-name="IconName.SETTINGS" />
      <c-icon-button @click="user.logout" :icon-name="IconName.LOGOUT" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-profile',
};
</script>

<style lang="scss" scoped>
.c-profile {
  display: flex;
  align-items: center;
  gap: 16px;

  &__avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #D9D9D9;
    overflow: hidden;
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    display: flex;
    align-items: center;
    font-size: 18px;
    gap: 8px;
  }

  &__email {
    font-size: 14px;
  }

  &__buttons {
    display: flex;
    margin-left: auto;
  }
}
</style>
