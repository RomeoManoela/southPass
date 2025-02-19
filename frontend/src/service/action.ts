import { getToken, registerUser } from './apis.ts';
import { errorType, formDataProps } from '../helper/types.ts';
import { redirect } from 'react-router-dom';

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData) as formDataProps;
  const action: string = data.actionType as 'Register' | 'Login';
  const dataToSend = {
    username: data.username,
    password: data.password,
  };
  const status: errorType = {};
  if (action === 'Login') {
    const res = await getToken(dataToSend);
    if (!res) {
      status['error'] = 'Verify your login credentials.';
      return status;
    }
    console.log(res.access);
    localStorage.setItem('token', res.access);
    return redirect('/dashboard');
  } else {
    const res = await registerUser(dataToSend);
    if (!res) {
      status['error'] = 'User already exists.';
      return status;
    } else {
      status['message'] = 'Thanks for registering your account, log in.';
      status['action'] = 'Login';
      return status;
    }
  }
};
