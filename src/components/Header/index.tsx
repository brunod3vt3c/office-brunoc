import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React, { Fragment, ReactNode, useState } from 'react'
import styles from './styles.module.scss'
import Contact from '../../pages/contact/index';

// interface MenuProps {
//   title: string
// }

interface SocialProps {
  title: string;
  link: string;
  icon: ReactNode
}

const contact = "../../pages/contact"

const menus = [
  {title: 'Home', href: '/'},
  {title: 'Projects', href: '/repositories'},
  {title: 'About', href: '/about'},
]

// const socials: SocialProps[] = [
//   {title: 'Instagram', link: 'http://twitter.com/', icon: AiOutlineInstagram},
//   {title: 'Linkedin', link: 'http://linkedin.com/', icon: AiOutlineLinkedin},
//   {title: 'Github', link: 'http://github.com/', icon: AiOutlineGithub},
// ]

function Header() {

  return (
    <>
      <Popover>
        <div className="items-center justify-between w-full h-20 md:flex md:flex-row bg-none">
          <div className="flex flex-row items-center justify-between pt-6 ml-10 mr-[28px] text-white md:gap-10">
            <div className={`${styles.logo} font-bold text-xl`}>BRUNOC.</div>
            <div className="flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-100 bg-indigo-600 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:block">
              <ul className="flex flex-row items-center justify-center gap-10 pr-5 ">
                {menus.map((menu, index) => (
                  <li key={index} className="px-3 text-xl text-white cursor-pointer">
                    <Link href={menu.href}>{menu.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${styles.contBtn} hidden pt-4 mr-10 hover:bg-white md:block`}>
            <div className={`${styles.backBtn} p-2 px-4 text-white bg-inherit rounded-2xl border-[#363531] border-2`}>
              Contact
              <Link href="/contact">
                <button className={`${styles.contact} p-2 px-4 text-white bg-inherit rounded-2xl border-[#363531] border-2`}>
                  Contact
                </button>
              </Link> 
            </div>
          </div>
        </div>

      <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      {/* <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      /> */}
                    </div>
                    <div className="">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-500 bg-white rounded-md hover:text-gray-100 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-1">
                    {menus.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block px-3 py-2 text-base text-4xl font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="bottom-0 block w-full px-5 py-3 font-medium text-center text-gray-100 bg-indigo-600 hover:text-gray-600 hover:bg-gray-100 hover:ring-indigo-600 ring-2"
                  >
                    <Link href="/../pages/contact">
                      Contact
                    </Link>
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
    </>
  )
}

export default Header;