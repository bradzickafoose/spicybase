import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { axiosWithAuth } from 'utils';

const TEN_MINUTES = 1000 * 60 * 10;
const THIRTY_SECONDS = 1000 * 30;

function useAuth() {
  const [isAuthed, setIsAuthed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    function refreshToken() {
      axiosWithAuth()
        .get('/refresh')
        .then(response => {
          setIsAuthed(true);
          localStorage.setItem('accessToken', response.data.accessToken);
        })
        .catch((error) => {
          console.log(error.message);
          setIsAuthed(false);
          router.push('/login');
        })
    }
    refreshToken();
    const refresh = setInterval(refreshToken, TEN_MINUTES);

    return () => clearInterval(refresh);
  }, [])

  return isAuthed;
}

export default useAuth;