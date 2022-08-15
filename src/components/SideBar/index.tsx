import Link from 'next/link'
import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import styles from './styles.module.scss'

function SideBar() {
  return (
    <div className="w-20 h-full">
    <div className={`${styles.sideline}`}/>
    <div className={`hidden md:grid h-[40%] ml-8 pt-8`}>
        <Link href={`https://instagram.com/_brunoc_r/`}>
          <a target="_blank">
            <AiOutlineInstagram className={`${styles.instaicon} text-3xl text-fuchsia-600 `}/>
          </a>
        </Link>
        <Link href={`https://www.linkedin.com/in/bruno-costa-9202371a6/`}>
          <a target="_blank">
            <AiOutlineLinkedin className={`${styles.linkedinicon} text-3xl text-blue-500 `}/>
          </a>
        </Link>
        <Link href={`https://github.com/brunod3vt3c`}>
          <a target="_blank">
            <AiOutlineGithub className={`${styles.githubicon} text-3xl text-gray-300 mb-12`}/>
          </a>
        </Link>
    </div>
  </div>
  )
}

export default SideBar