/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ role: 'GUEST' }); // Por defecto, el usuario es 'GUEST'

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired
};
