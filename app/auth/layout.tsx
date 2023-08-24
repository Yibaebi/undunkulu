import React from 'react'
import Logo from '../logo'

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  return <div className="flex m-auto min-h-screen max-w-[1440px] overflow-hidden">{children}</div>
}
