<script setup>
import { CButton } from '~/components';

definePageMeta({
  middleware: [
    (to) => {
      const user = useUserStore();

      if (to.path === '/login' && user.isLogged) {
        return navigateTo('/');
      }
    }
  ],
});

const router = useRouter();
const user = useUserStore();

const credentials = ref({
  email: '',
  password: '',
});

const errorMessage = ref(null);

const login = async () => {
  errorMessage.value = null;

  try {
    await user.login(credentials.value);
    router.replace('/');
  } catch (error) {
    errorMessage.value = 'Invalid e-mail or password';
  }
}
</script>

<template>
  <div class="container">
    <form
      class="login-form"
      @submit.prevent="login"
    >
      <h1>Login</h1>

      <div class="form-group">
        <label>E-mail</label>
        <input v-model="credentials.email" type="text">
      </div>

      <div class="form-group">
        <label>Password</label>
        <input v-model="credentials.password" type="password">
      </div>

      <div
        class="form-error"
        v-if="errorMessage"
      >
        {{ errorMessage }}
      </div>

      <c-button>Login</c-button>
    </form>
  </div>
</template>

<style lang="scss">
  .container {
    max-width: 400px;
    width: 100%;
    background: #ffffff;
    padding: 24px;
    border-radius: 10px;
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-error {
    color: #ff0000;
  }
</style>
