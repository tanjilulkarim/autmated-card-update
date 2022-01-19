import React, { createContext, useContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

const Auth = createContext();
export const useAuth = () => useContext(Auth);
const AuthProvider = ({ children }) => {
	const func = useFirebase();
	return <Auth.Provider value={func}>{children}</Auth.Provider>;
};

export default AuthProvider;