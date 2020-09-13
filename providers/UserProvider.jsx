import React, { useState, useEffect, createContext } from 'react';
import { axiosWithAuth } from 'utils';

export const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get('/whoami')
      .then((response) => setUser(response.data.user))
      .catch((error) => console.log(error.message));
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;