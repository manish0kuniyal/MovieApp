import React from 'react'
import Link from 'next/link'
import { getTrendingMovies } from '../../utils/request'
import Card from './components/card'

const HomePage =async() => {
  const movies=await getTrendingMovies()

  return (
    <div > 
     <h2>Top Trending Movies</h2>
     <div className='flex flex-wrap gap-x-8 gap-y-8  items-center justify-center'>
      {movies.map(movie=>{
        return <Card movie={movie}></Card>
      })
      }
     </div>
    </div>
  )
}

export default HomePage
