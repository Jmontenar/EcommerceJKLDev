import axios from 'axios'
import React from 'react'
import {useForm} from 'react-hook-form'
import './FormLogin.css'

const FormLogin = () => {
    const {register, handleSubmit, reset} = useForm()
    const submit = data =>{
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
 axios.post(URL, data)
 .then(res => {
    console.log(res.data)
    localStorage.setItem('token',res.data.data.token)
 })
 .catch(err => console.log(err))
 console.log(data)
// reset({
//    email: '',
//    password: ''
// })
}

  return (
    <div className="form__container">
    <form onSubmit={handleSubmit(submit)} className='login__form'>
        <h2 className='login__tittle' >Welcome! Enter your Email and password to continue</h2>
        <section className='label__container'>
        <div className='login__e-mail'>
            <label className='login__label' htmlFor='email'>Email:</label>
            <input {...register('email')} type='email' id='email' />
        </div>
        <div className='login__password'>
            <label className='login__label' htmlFor='password'>Password:</label>
            <input {...register('password')} type='password' id='password' />
        </div>
        </section>
        <div className="login__button"><button>Login</button></div>
    </form>
    </div>
  )
}

export default FormLogin