import React from 'react'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import SignIn from './signIn'
import SignOut from './signOut'

function Nav() {
    const [user] = useAuthState(auth)
  return (
    <div className=' bg-gray-700 p-5 flex justify-between items-center'>
        <h1 className='text-white text-3xl'>ChApp</h1>
        {user ? <SignOut/> : <SignIn/>}

    </div>
  )
}

export default Nav