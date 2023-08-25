'use client'

import React from 'react'
import Logo from '@/app/logo'
import { signIn, signOut, useSession } from 'next-auth/react'

import AppleLogo from '@/public/svgs/apple-logo.svg'
import GoogleLogo from '@/public/svgs/google-logo.svg'
import { app, database } from '@/firebase'
import { collection, addDoc } from 'firebase/firestore'

const SignInForm = () => {
  const dbInstance = collection(database, 'users')

  function writeData() {
    console.log('attempt to...')
    addDoc(dbInstance, {
      name: 'Happy',
    })
    // const newUserRef = usersRef.push({
    //   "walletAddress",
    //   "emailAddress",
    //   "name"
    // });
  }
  return (
    <div className="flex w-full flex-col items-center gap-[4rem] p-4">
      <Logo />

      <div className="flex w-full flex-col items-center justify-center gap-6 rounded-[0.375rem] bg-[rgba(28,27,27,0.90)] p-3 pt-8 text-white backdrop-blur-[0.375rem] md:max-w-[327px] lg:max-w-[504px] lg:p-[4rem]">
        <h4 className="z-10 text-h-4 ">Sign In</h4>
        <button onClick={writeData} className="flex w-full rounded-lg bg-black-main ">
          Write to Firebase
        </button>
        <button className="flex h-[3rem] w-full items-center justify-between rounded-lg bg-black-main px-6">
          Sign In with Google <GoogleLogo />
        </button>

        <button className="hidden h-[3rem] w-full items-center justify-between rounded-lg bg-black-main px-6">
          Sign In with Apple <AppleLogo />
        </button>

        <div className="pt-12">
          <p className="text-body ">Dont Have an account yet?</p>

          <button className="mt-1 h-[3.125rem] rounded-lg px-5 text-body-bold text-primary-main hover:bg-black-main">
            Create new account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
