import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Login = () => {
  return (
    <header className='border-2 border-gray-300 text-white w-fit h-12 p-4 flex items-center justify-center rounded-full text-2xl fixed bottom-40 right-7 cursor-pointer bg-red-600 hover:bg-red-500 hover:scale-110 transition-all shadow-lg'>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default Login