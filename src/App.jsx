import './App.css'
import Login from './sessions/Auth/Login'

// const userType = typeof window !== 'undefined' ? secureLocalStorage.getItem('userType') : null

// const config = {
// 	token,
// }
// NetworkService.setupInterceptors(config)

function App() {
	return (
		<div>
			<Login />
		</div>
	)
}

export default App
