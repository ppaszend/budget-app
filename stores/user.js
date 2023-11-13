import { defineStore } from 'pinia';
import { ref } from 'vue';
import Cookies from 'js-cookie';

export const useUserStore = defineStore('user', () => {
  const router = useRouter();
  const data = ref(null);
  const token = useCookie('token', {
    default: () => null,
  });

  const setToken = (value) => {
    token.value = value;
  }

  const getToken = () => token.value;

  const login = async (credentials) => {
    try {
      token.value = await $fetch('/api/user/login', {
        method: 'POST',
        body: credentials,
      });
  
      await sync();
    } catch (err) {
      console.log('error', err);
      throw err;
    }
  }

  const sync = async () => {
    if (!token.value) {
      return;
    }

    const response = await $fetch('/api/user', {
      headers: {
        'Authorization': token.value,
      }
    });

    data.value = response;
  }

  const logout = () => {
    setToken(null);
    router.push('/login')
  }

  if (token.value) {
    sync();
  }

  return {
    data,
    sync,
    getToken,
    isLogged: computed(() => !!token.value),
    logout,
    login,
  };
});
