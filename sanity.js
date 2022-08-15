import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

// lib/config.js
export const config = {

  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "fo8t7hnt",
  apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning

  useCdn: process.env.NODE_ENV === 'production',
}

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config)