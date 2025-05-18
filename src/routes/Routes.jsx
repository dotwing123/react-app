import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import App from '../App'
import NewPassword from '../sessions/Auth/NewPassword'
import OtpVerification from '../sessions/Auth/OtpVerification'
const ForgotPassword = lazy(() => import('../sessions/Auth/ForgotPassword/index'))

const LoadingFallback = () => (
	<Box
		sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '100vh',
		}}>
		<CircularProgress />
	</Box>
)

const AppRoutes = () => {
	return (
		<Box>
			<Router>
				<Suspense fallback={<LoadingFallback />}>
					<Routes>
						<Route path='/' element={<App />} />
						<Route path='/verifyotp' element={<OtpVerification />} />
						<Route path='/forgotpassword' element={<ForgotPassword />} />
						<Route path='/createpassword' element={<NewPassword />} />
						{/* <Route path='/createpassword' element={<PrivateRoute element={<Route1 />} />} /> */}
					</Routes>
				</Suspense>
			</Router>
		</Box>
	)
}

export default AppRoutes
