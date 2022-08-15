import Link from 'next/link';
import React, { useState } from 'react'
import { sanityClient, urlFor } from '../../../sanity';
import { Repos } from '../../../typings';

interface ReposProps {
  repos: Repos[];
}

function Repository({repos}: ReposProps) {
  const [search, setSearch] = useState('');

  const filteredRepos = search.length > 0
    ? repos.filter(repo => repo.name.includes(search))
    : [];



  return (
    <div className="flex flex-col w-full pt-5">
      <form className="flex items-center mb-10 ml-20 mr-20">   
        <label htmlFor="voice-search" className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input 
            type="text" 
            id="voice-search" 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Search..." 
            onChange={e => setSearch(e.target.value)}
            value={search} 
            required 
          />
        </div>
      </form>

      {search.length > 0 ? (
        <ul className="flex flex-row w-full">
          {filteredRepos.map(repo => {
            return (
              <li key={repo._id} className="flex flex-col ml-20 mr-20">
                <Link href={`https://github.com/brunod3vt3c//${repo.slug.current}`}>
                  <a target="_blank" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={urlFor(repo.image).url()!} alt=""/>
                      <div className="flex flex-col justify-between p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{repo.description}</p>
                      </div>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>) : (
          <ul className="flex flex-row justify-between w-full">
            {repos.map(repo => {
            return (
              <li key={repo._id} className={`flex flex-col ml-20 mr-20 w-[500px] `}>
                <Link href={`https://github.com/brunod3vt3c/${repo.slug.current}`}>
                  <a target="_blank" className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={urlFor(repo.image).url()!} alt=""/>
                      <div className="flex flex-col justify-between max-w-[300px] p-4 leading-normal">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{repo.name}</h5>
                          <p className="mb-3 overflow-hidden font-normal text-gray-700 dark:text-gray-400 text-ellipsis whitespace-nowrap">{repo.description}</p>
                      </div>
                  </a>
                </Link>
              </li>
            )
          })}
          </ul>
        )}
    </div>
  )
}

export default Repository

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    name,
    description,
    image,
    link,
    slug
  }`

  const repos = await sanityClient.fetch(query);

  return {
    props: {
      repos,
    }
  }
}
