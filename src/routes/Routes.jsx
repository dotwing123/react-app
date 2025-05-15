import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import App from '../App'
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
						<Route path='/forgotpassword' element={<ForgotPassword />} />
						{/* <Route path='/privateRoute' element={<PrivateRoute element={<Route1 />} />} /> */}
					</Routes>
				</Suspense>
			</Router>
		</Box>
	)
}

export default AppRoutes
