// @ts-nocheck
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, fetchRegister, selectIsAuth } from '../../redux/auth/slice';

import './Register.scss'


type RegisterProps = {
    setState: (s: string) => void,
}

const Register: React.FC<RegisterProps> = (props) => {
  const dispatch = useDispatch()
  const isAuth = useSelector( selectIsAuth )
  const { register, handleSubmit, setError, formState: { errors, isValid} } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onchange'
  })

  const submit = async (args) => {
    try {
      const data = await dispatch(fetchRegister(args))
      const token = data.payload.token
      if ( token ) {
        window.localStorage.setItem('token', token)
      }
    } catch (err) {
      console.log(errors);
      alert( 'не удалось зарегистрироватья')
      console.log(err);
    }
  }

  if ( isAuth ) {
    return <Navigate to='/'/>
  }

   return(
    <div className="Register-wrapper ">
      <div className="Register dg">
        <form onSubmit={handleSubmit(submit)} className='form p15 dg g10' action="Register ">
            <div className="Register__header dg g-f-c">
              <div className="Register__title">sign up</div> 
              <button onClick={() =>props.setState('')} type='button'>X</button>
            </div>
            <input placeholder='Name' type="text" name="name" id="n1" 
              error={Boolean(errors.fullname?.message)}
              helperText={errors.fullName?.message}
              {...register('fullname', {required: 'укажите имя'})}
            />
            <input placeholder='E-mail' type="text" name="name" id="n1" 
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('email', {required: 'укажите почту'})}
            />
            <input placeholder='password' type="text" name="name" id="n1" 
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register('password', {required: 'укажите пароль'})}
            />
            <button type='submit'>sign up</button>
        </form>
      </div>
    </div>
   )
}

export {Register}