import React from 'react'
import { auth } from '../firebase';
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

function SignIn() {
    
    const signInWithGoogle =() => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth,provider)
    }
  return (
    <div>
        <button onClick={signInWithGoogle} className="border bg-gray-300 px-4 py-2 hover:bg-gray-100">Sign In with Google</button>
    </div>
  )
}

export default SignIn