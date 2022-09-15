// @ts-nocheck
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/auth/slice';

import './Login.scss'


type LoginProps = {
    setState: (s: string) => void,
}

const Login: React.FC<LoginProps> = (props) => {

  const dispatch = useDispatch()
  const isAuth = useSelector( selectIsAuth )
  const navigate = useNavigate();
  const location = useLocation()
  const { register, handleSubmit, formState: { errors, isValid} } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onchange'
  })

  const submit = async (args) => {
    try {
      const data = await dispatch(fetchAuth(args))
      const token = data.payload.token
      if ( token ) {
        window.localStorage.setItem('token', token)
      }
    } catch (err) {
      alert( 'не удалось авторизоваться')
      console.log(err);
    }
  }

  if ( isAuth ) {   
    
    navigate(-1)
    return <Navigate to='/'/>
    // return null
  }
  

   return(
        <div className="Login-wrapper ">
            <div className="Login dg">
                <form onSubmit={handleSubmit(submit)} className='form p15 dg g10' action="Login ">
                    <div className="Login__header dg g-f-c">
                        <div className="Login__title">sign in</div> 
                        <button onClick={() =>props.setState('')} type='button'>X</button>
                    </div>
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
                    <button type='submit'>sign in</button>
                </form>
            </div>
        </div>
   )
}

export {Login}