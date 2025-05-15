import {ThemeProvider} from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoutes from './routes/Routes.jsx'
import './index.css'
import theme from './theme.js'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
				<AppRoutes />
		</ThemeProvider>
	</React.StrictMode>
)
