// // src/components/PrivateRoute.js
// import React from 'react'
// import {Navigate} from 'react-router-dom'
// import Layout from '../Layout.js'
// import secureLocalStorage from 'react-secure-storage'

// const PrivateRoute = ({element: Component, ...rest}) => {
// 	// const isAuthenticated = secureLocalStorage.getItem('appTkn') !== null || undefined
// 	// if (!isAuthenticated) {
// 	// 	return <Navigate to='/' replace />
// 	// }

// 	return (
// 		<>
// 			<Layout>{Component}</Layout>
// 		</>
// 	)
// }

// export default PrivateRoute
