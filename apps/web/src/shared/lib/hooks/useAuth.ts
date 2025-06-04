import { useState, useEffect } from 'react';

interface User {
  id: number;
  email: string;
  name: string | null;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
}

export const useAuth = (): AuthState => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // 토큰 확인 (localStorage 또는 쿠키에서)
        const token = localStorage.getItem('accessToken');

        if (!token) {
          setIsAuthenticated(false);
          setUser(null);
          return;
        }

        // const response = await fetch('/api/auth/profile', {
        //   headers: { Authorization: `Bearer ${token}` }
        // });

        // 임시로 토큰이 있으면 인증된 것으로 처리
        setIsAuthenticated(true);
        // 임시 유저 데이터
        setUser({
          id: 1,
          email: 'hyojun9292@example.com',
          name: 'hyojun9292',
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  return { isLoading, isAuthenticated, user };
};
