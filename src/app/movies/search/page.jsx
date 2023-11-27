import React from 'react'
import { getMovies } from '../../../../utils/request'
import Card from '@/app/components/card'
import SearchResults from '@/app/components/searchresults'
async function SearchPage({searchParams}) {
    const searchText=searchParams.query
    const movies =await getMovies(searchText)
  return (
    <div> 
    <SearchResults searchText={searchText} movies={movies}></SearchResults>
    </div>
  )
}

export default SearchPage
