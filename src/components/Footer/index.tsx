import Link from 'next/link';
import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';
import {GrTechnology} from 'react-icons/gr';

function Footer() {
  return (
    <div className="h-[40rem] flex flex-col items-center justify-center w-full px-20 py-22">
      <div className="flex flex-col items-center justify-start w-full h-full px-20 py-40">
        <div className="font-bold text-7xl">
          <GrTechnology className="text-blue-500" />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 pt-10">
          <Link href="https://instagram.com/">
            <AiOutlineInstagram className="text-5xl text-blue-500 transition-transform cursor-pointer hover:scale-125"/>
          </Link>
          <Link href="https://linkedin.com/">
            <AiOutlineLinkedin className="text-5xl text-red-500 transition-transform cursor-pointer hover:scale-125"/>
          </Link>
          <Link href="https://github.com/">
            <AiOutlineGithub className="text-5xl text-green-500 transition-transform cursor-pointer hover:scale-125"/>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full pb-10 text-blue-500">
          <div>@t3cnykal</div>
          <div>2022</div>
        </div>
    </div>
  )
}

export default Footer