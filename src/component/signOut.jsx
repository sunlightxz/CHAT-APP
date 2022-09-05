import React from 'react'
import { auth } from '../firebase'

function SignOut() {
    const signOut = () => {
        signOut(auth)
    }
  return (
    <div>
     <button onClick={()=> auth.signOut()}  className="border bg-gray-300 px-4 py-2 hover:bg-gray-100">Log Out</button>
    </div>
  )
}

export default SignOut