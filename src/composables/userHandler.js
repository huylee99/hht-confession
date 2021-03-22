import { ref } from 'vue';
import { adminAuth } from '../firebase/config';

const userLogin = () => {
  const error = ref('');

  const login = async (email, password) => {
    try {
      await adminAuth.signInWithEmailAndPassword(email, password);

      error.value = ref('');
    } catch (err) {
      error.value = 'Sai tài khoản hoặc mật khẩu';
    }
  };

  return { error, login };
};

const userLogout = () => {
  const logout = async () => {
    await adminAuth.signOut();
  };

  return { logout };
};

export { userLogin, userLogout };
