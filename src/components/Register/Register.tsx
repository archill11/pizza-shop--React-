// @ts-nocheck
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, fetchRegister, selectIsAuth } from '../../redux/auth/slice';

import styles from './Register.module.scss'


type RegisterProps = {
    setState: (s: string) => void,
}

const Register: React.FC<RegisterProps> = (props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const isAuth = useSelector( selectIsAuth )
  const { register, handleSubmit, setError, formState: { errors, isValid} } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      password: '',
    },
    mode: "onBlur"
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
    navigate(-1)
    return <Navigate to='/'/>
  }

   return(
    <div className={styles.wrapper }>
      <div className={styles.Register }>
        <form onSubmit={handleSubmit(submit)} className={styles.form} action="Register ">
          <div className={styles.header }>
            <div className={styles.title}>зарегистрироватья</div> 
            <button className={styles.close} onClick={() =>props.setState('')} type='button'>X</button>
          </div>
          <input placeholder='имя' type="text" name="name" id="n1" 
            error={Boolean(errors.fullname?.message)}
            helperText={errors.fullname?.message}
            {...register('fullname', {required: true})}
          />
          {errors?.fullname && <span>❗️укажите имя</span>}

          <input placeholder='E-mail' type="text" name="name" id="n1" 
            error={Boolean(errors.email?.message)}
            helperText={errors?.email?.message}
            {...register('email', {required: "укажите почту"})}
          />
          {errors?.email && <span>❗️укажите почту</span>}

          <input placeholder='пароль' type="text" name="name" id="n1" 
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', {required: true})}
          />
          {errors?.password && <span>❗️укажите пароль минимум 4 символа</span>}

          <button className={styles.submit} type='submit'>зарегистрироватья</button>
        </form>
      </div>
    </div>
   )
}

export {Register}