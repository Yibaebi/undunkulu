'use client'

import React from 'react'
import Logo from '@/app/logo'
import { signIn, signOut, useSession } from "next-auth/react";

import AppleLogo from '@/public/svgs/apple-logo.svg'
import GoogleLogo from '@/public/svgs/google-logo.svg'

const SignInForm = () => {
 const { data: session } = useSession();
  console.log(session)
 if (!(session && session.user)) {
    return (
       <div className="w-full flex flex-col items-center gap-[4rem] p-4">
      <Logo />

      <div className="text-white flex flex-col items-center w-full justify-center bg-[rgba(28,27,27,0.90)] backdrop-blur-[0.375rem] gap-6 lg:p-[4rem] p-3 pt-8 rounded-[0.375rem] md:max-w-[327px] lg:max-w-[504px]">
        <h4 className="text-h-4 z-10 ">Sign In</h4>

        <button className="flex w-full rounded-lg bg-black-main h-[3rem] justify-between items-center px-6" onClick={() => signIn()} >
          Sign In with Google <GoogleLogo />
        </button>

        <button className="flex w-full rounded-lg bg-black-main h-[3rem] justify-between items-center px-6 hidden">
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
    );
  }
  return (
    <button onClick={() => signIn()} className="text-green-600 ml-auto">
     Redirect to home
    </button>
  );
}

export default SignInForm
