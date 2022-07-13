import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai'
import Header from '../../components/Header'
import styles from './styles.module.scss'
import Banner from '../../components/Banner';

function Body() {
  return (
    <div className="w-full h-screen md:p-10">

        <div className="w-full h-full shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[9px_9px_0px_rgb(0,0,0)] ease-out transition-all flex flex-col z-1 md:border-2 md:border-black md:rounded-2xl bg-[#0E1129]">
        <Header/>
          <div className="flex flex-row w-full h-full">
            <div className="w-20 h-full">
              <div className={`${styles.sideline}`}/>
              <div className={`hidden md:grid h-[40%] ml-8 pt-8`}>
                  <AiOutlineInstagram className={`${styles.instaicon} text-3xl text-fuchsia-600 `}/>
                  <AiOutlineLinkedin className={`${styles.linkedinicon} text-3xl text-blue-500 `}/>
                  <AiOutlineGithub className={`${styles.githubicon} text-3xl text-gray-300 mb-12`}/>
              </div>
            </div>
            <Banner/>
            {/* <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <div className={`${styles.icons3d}`}>
                <div className={`${styles.iconbase}`}>
                  <SiReact className={`${styles.progicons} text-6xl bg-white`}/>
                </div>
                <div className={`${styles.iconstep}`}></div>
              </div>
              <div className={`${styles.icons3d}`}>
                <div className={`${styles.iconbase}`}>
                  <SiTypescript className={`${styles.progicons} text-6xl bg-white`}/>
                </div>
                <div className={`${styles.iconstep}`}></div>
              </div>
              <div className={`${styles.icons3d}`}>
                <div className={`${styles.iconbase}`}>
                  <SiJava className={`${styles.progicons} text-6xl bg-white`}/>
                </div>
                <div className={`${styles.iconstep}`}></div>
              </div>
            </div> */}
          </div>
        </div>
      
    </div>
  )
}

export default Body