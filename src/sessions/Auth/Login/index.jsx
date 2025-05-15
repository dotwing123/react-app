import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigateTo = useNavigate()
  return (
    <>
    <div>Login</div>
    <Button onClick={()=>navigateTo('/forgotPassword')}>Go to Second page</Button>
    </>
  )
}

export default Login