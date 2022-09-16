// @ts-nocheck
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../redux/auth/slice';

import styles from './Login.module.scss'


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
    mode: "onBlur"
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
  }
  

   return(
      <div className={styles.wrapper}>
        <div className={styles.Login}>
          <form onSubmit={handleSubmit(submit)} className={styles.form} action="Login ">
            <div className={styles.header}>
              <div className={styles.title}>войти</div> 
              <button className={styles.close} onClick={() =>props.setState('')} type='button'>X</button>
            </div>
            <input placeholder='E-mail' type="text" name="name" id="n1" 
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
              {...register('email', {required: true})}
            />
            {errors?.email && <span>❗️укажите почту</span>}

            <input placeholder='пароль' type="text" name="name" id="n1" 
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
              {...register('password', {required: true})}
            />
            {errors?.password && <span>❗️укажите пароль минимум 4 символа</span>}

            <button className={styles.submit} type='submit'>войти</button>
          </form>
        </div>
      </div>
   )
}

export {Login}