import { jwtDecode } from 'jwt-decode';
import { refreshToken } from './apis.ts';

export const dashboardLoader = async () => {
  const token: string | null = localStorage.getItem('token');
  if (!token) return false;
  const exp: number = jwtDecode(token).exp as number;
  const now: number = Date.now() / 1000;
  if (exp < now) {
    const res = await refreshToken();
    localStorage.setItem('token', res);
  }
  return true;
};
