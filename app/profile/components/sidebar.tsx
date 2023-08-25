'use client'

import React, { Fragment, useMemo } from 'react'
import { useSelectedLayoutSegment } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

import AvatarIcon from '@/public/svgs/avatar-icon.svg'
import ExploreIcon from '@/public/svgs/explore-icon.svg'
import DisputesIcon from '@/public/svgs/disputes-icon.svg'
import ProfileIcon from '@/public/svgs/profile-icon.svg'

export const ProfileSidebar = () => {
  const segment = useSelectedLayoutSegment()

  // Sidebar links
  const sideBarLinks = useMemo(
    () => [
      { title: 'Explore', href: 'explore', Icon: ExploreIcon },
      { title: 'Disputes', href: 'disputes', Icon: DisputesIcon },
      { title: 'Profile', href: 'account', Icon: ProfileIcon },
    ],
    [],
  )
  return (
    <section className="flex flex-col min-w-[235px] items-center fixed left-0 border-r-[0.5px] border-[#373737] top-[85px] text-white h-full pt-[2.75rem]">
      <div className="flex flex-col gap-[0.375rem] items-center mb-[3.75rem]">
        <AvatarIcon />
        <h6 className="text-[18px]/[normal]">John Doe</h6>

        <p className="text-white/75 text-[0.625rem]">25 submissions</p>
      </div>

      <aside className="flex flex-col gap-2 px-2 py-6 w-full">
        {sideBarLinks.map(item => {
          const Icon = item.Icon
          const selected = item.href === '' && segment === null ? true : item.href === segment

          return (
            <Fragment key={item.title}>
              <Link
                href={`/profile/${item.href}`}
                className={clsx(
                  'flex min-h-[44px] cursor-pointer font-medium items-center rounded-lg gap-[0.625rem] p-[10px] transition-all px-[2.75rem] py-[0.8125rem]',
                  selected ? 'bg-[#1C1B1B] text-white' : 'text-cool-gray-600 hover:bg-cool-gray-100',
                )}
              >
                <Icon
                  className={clsx(
                    'h-5 min-w-[20px] transition-all [&>path]:stroke-[1px]',
                    selected
                      ? ' [&>path]:fill-primary-main [&>path]:stroke-primary-main'
                      : '[&>path]:fill-white [&>path]:stroke-white',
                  )}
                />
                <span className={clsx(selected && 'text-primary-main')}>{item.title}</span>
              </Link>
            </Fragment>
          )
        })}
      </aside>
    </section>
  )
}
