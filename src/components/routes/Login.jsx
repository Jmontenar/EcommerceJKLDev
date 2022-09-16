import React, { useEffect, useState } from 'react'
import FormLogin from '../login/FormLogin'
import LoadingLogin from './LoadingLogin'


const Login = () => {
  const [isLoadingL, setisLoadingL] = useState(true)
  useEffect(() => {
    setisLoadingL(false)
    }, [])

if(isLoadingL){
  return <LoadingLogin />
  }else{

  return (
    <main className="login">
      <FormLogin />
    </main>
  )
}
}
export default Login