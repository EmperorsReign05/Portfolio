import { createClient } from 'next-sanity'

// 1. Remove `useCdn` from this import
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn: false, // 2. Set useCdn directly here
})