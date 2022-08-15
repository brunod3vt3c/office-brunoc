import React from 'react'
import Header from '../../components/Header'
import Repository from '../../components/Repository';
import { sanityClient } from "../../../sanity"
import { Repos } from '../../../typings';
import SideBar from '../../components/SideBar';

interface RepoProps {
  repos: Repos[]
}

export default function Body({repos}: RepoProps) {
  return (
    <div className="w-full h-screen md:p-10">
        <div className="w-full h-full shadow-[0_0px_0_rgb(0,0,0)] hover:shadow-[9px_9px_0px_rgb(0,0,0)] ease-out transition-all flex flex-col z-1 md:border-2 md:border-black md:rounded-2xl bg-[#0E1129]">
        <Header/>
          <div className="flex flex-row w-full h-full">
            <SideBar/>
            <Repository repos={repos}/>
          </div>
        </div>
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "repos"] {
      _id,
      name,
      image,
      link,
      description,
      slug
    }
  `

  const repos = await sanityClient.fetch(query);

  return {
    props: {
      repos
    }
  }
}

