import React from 'react'
import { Login } from '../components/Login/Login'
import { Register } from '../components/Register/Register'


import './Auth.scss'

function Auth() {
  const [modal, setModal] = React.useState('')

  const signUp = () => setModal('signUp')
  const signIn = () => setModal('signIn')
  

  return (
    <div className='sign-in__wrapper '>
        <div className="sign-in dg a-c-c g15">
            <button onClick={signUp} className='btn '>sign up</button>
            <button onClick={signIn} className='btn '>sign in</button>
        </div>
        {modal === 'signUp' && <Register setState={setModal}/> }
        {modal === 'signIn' && <Login setState={setModal}/> }

    </div>
  )
}

export {Auth}