'use client'

import React from 'react'

import Logo from '@/app/logo'
import { Button } from '@/ui'
import PlusIcon from '@/public/svgs/plus-icon.svg'

const ConnectWalletForm = () => {
  return (
    <div className="w-full text-white flex flex-col items-center gap-[4rem] p-4">
      <Logo />

      <div className="flex flex-col items-center w-full justify-center bg-[rgba(28,27,27,0.90)] backdrop-blur-[0.375rem] gap-6 lg:p-[4rem] p-3 pt-8 rounded-[0.375rem] md:max-w-[327px] lg:max-w-[504px]">
        <h4 className="text-h-4 z-10">Connect Wallet</h4>

        <Button label="Add Wallet" rightIcon={<PlusIcon />} />

        <div className="pt-12">
          <p className="text-body">Don’t have a wallet to add?</p>

          <button className="text-body-bold text-primary-main mt-1 px-5 h-[3.125rem] hover:bg-black-main/50 rounded-lg">
            Click here to create
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectWalletForm
