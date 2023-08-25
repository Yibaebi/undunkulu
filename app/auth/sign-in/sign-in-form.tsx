'use client'

import React from 'react'
import Logo from '@/app/logo'

import AppleLogo from '@/public/svgs/apple-logo.svg'
import GoogleLogo from '@/public/svgs/google-logo.svg'
import { app, database } from '../../../firebase';
import { collection, addDoc } from 'firebase/firestore';

const SignInForm = () => {
const dbInstance = collection(database, 'users');
  function writeData() {
    console.log("attempt to...")
     addDoc(dbInstance, {
            name: "Happy"
        })
    // const newUserRef = usersRef.push({
    //   "walletAddress",
    //   "emailAddress",
    //   "name"
    // });
  }
  return (
    <div className="w-full flex flex-col items-center gap-[4rem] p-4">
      <Logo />

      <div className="text-white flex flex-col items-center w-full justify-center bg-[rgba(28,27,27,0.90)] backdrop-blur-[0.375rem] gap-6 lg:p-[4rem] p-3 pt-8 rounded-[0.375rem] md:max-w-[327px] lg:max-w-[504px]">
        <h4 className="text-h-4 z-10 ">Sign In</h4>
       <button onClick={writeData} className='flex w-full rounded-lg bg-black-main '>Write to Firebase</button>
        <button className="flex w-full rounded-lg bg-black-main h-[3rem] justify-between items-center px-6">
          Sign In with Google <GoogleLogo />
        </button>

        <button className="flex w-full rounded-lg bg-black-main h-[3rem] justify-between items-center px-6">
          Sign In with Apple <AppleLogo />
        </button>

        <div className="pt-12">
          <p className="text-body ">Dont Have an account yet?</p>

          <button className="text-body-bold text-primary-main mt-1 px-5 h-[3.125rem] hover:bg-black-main rounded-lg">
            Create new account
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignInForm
