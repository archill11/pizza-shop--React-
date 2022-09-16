import React from 'react'
import { Login } from '../../components/Login/Login'
import { Register } from '../../components/Register/Register'


import styles from './Auth.module.scss'

const Auth: React.FC = () => {
  const [modal, setModal] = React.useState('')

  const signUp = () => setModal('signUp')
  const signIn = () => setModal('signIn')
  

  return (
    <div className={styles.wrapper }>
        <div className={styles.signIn }>
            <button onClick={signUp} className={styles.btn }>зарегистрироватья</button>
            <button onClick={signIn} className={styles.btn }>войти</button>
        </div>
        {modal === 'signUp' && <Register setState={setModal}/> }
        {modal === 'signIn' && <Login setState={setModal}/> }

    </div>
  )
}

export {Auth}