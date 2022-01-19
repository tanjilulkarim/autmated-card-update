import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthContext';
import Auth from './Pages/Auth/Auth';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Cards from './Pages/Dashboard/Page/Cards';
import NewSubmission from './Pages/Dashboard/Page/NewSubmission';
import Profile from './Pages/Dashboard/Page/Profile';
import Submissions from './Pages/Dashboard/Page/Submissions';
import Wallet from './Pages/Dashboard/Page/Wallet';

function App() {
  return (
		<AuthProvider>
			<BrowserRouter>
				<Routes>
					<Route path='*' element={<Navigate to='dashboard' />} />
					<Route path='/auth/*' element={<Auth />}>
						<Route path='sign-in' element={<SignIn />} />
						<Route path='sign-up' element={<SignUp />} />
					</Route>
					<Route path='/dashboard/*' element={<Dashboard />}>
						<Route path='*' element={<Navigate to='submission' />} />
						<Route path='submission' element={<Submissions />} />
						<Route path='your-cards' element={<Cards />} />
						<Route path='wallet' element={<Wallet />} />
						<Route path='profile' element={<Profile />} />
					</Route>
					<Route path='/dashboard/submission/new' element={<NewSubmission />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
