import {
    createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialize from '../Firebase/firebase.config';

firebaseInitialize();
const useFirebase = () => {
	const auth = getAuth();
	const [user, setUser] = useState();
	const [isAdmin, setIsAdmin] = useState(false);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	const register = (name, email, password, history, location) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				const user = { email, displayName: name };
				updateProfile(auth.currentUser, {
					displayName: name,
				});
				setUser(user);
				setError('');
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
				// ..
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const login = (email, password, history, location) => {
		signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				// Signed in
				setUser(res.user);
				setError('');
			})
			.catch(error => {
				const errorMessage = error.message;
				setError(errorMessage);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
				setLoading(false);
			} else {
				setLoading(false);
			}
		});
		return unsubscribe;
	}, [auth]);

	const logout = () => {
		signOut(auth).then(() => {
			// Sign-out successful.
			alert('Sign-out successful');
			setUser(null);
			setIsAdmin(false);
		});
	};


	return {
		user,
		isAdmin,
		error,
		register,
		login,
		logout,
		loading,
	};
};

export default useFirebase;