import { Button } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function ForgotPassword() {
  const navigateTo = useNavigate()
  return (
    <>
    <div>ForgotPassword</div>
    <Button onClick={()=>navigateTo('/')}>Go to Previous page</Button>
    </>
  )
}

export default ForgotPassword