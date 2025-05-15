// // src/components/Layout.js
// import React, {useState} from 'react'
// import {Box, Toolbar} from '@mui/material'
// import Header from '../Header'
// import Sidebar from '../Sidebar'
// import BreadcrumbsNav from '../Breadcrumbs'
// import ToasterCmp from '../Toaster'
// import LinearLoader from '../LinearLoader'
// import {useSelector} from 'react-redux'


// const Layout = ({children}) => {
// 	const [sidebarOpen, setSidebarOpen] = useState(false)
// 	const isLoading = useSelector(state => state.loader?.loading)
// 	const toggleSidebar = () => {
// 		setSidebarOpen(!sidebarOpen)
// 	}

// 	return (
// 		<Box sx={{display: 'flex'}}>
// 			<Header toggleSidebar={toggleSidebar} />
// 			{isLoading && <LinearLoader />}
// 			<Sidebar open={sidebarOpen} />
// 			<Box
// 				component='main'
// 				sx={{
// 					flexGrow: 1,
// 					pt: 2,
// 					pl: 1,
// 					//   marginLeft: sidebarOpen ? '240px' : '60px',
// 					transition: 'margin-left 0.3s',
// 				}}>
// 				<Toolbar />
// 				<ToasterCmp />
// 				<BreadcrumbsNav />
// 				{children}
// 			</Box>
// 		</Box>
// 	)
// }

// export default Layout
