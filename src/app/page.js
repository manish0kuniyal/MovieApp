import React from 'react'
import Link from 'next/link'
import { getTrendingMovies } from '../../utils/request'
import Card from './components/card'

const HomePage =async() => {
  const movies=await getTrendingMovies()

  return (
    <div className='bg-black'> 
     <h2 className='text-white mx-3 text-[1.5rem] py-4 font-mono'>Top Trending Movies</h2>
     <div className='flex flex-wrap gap-4 gap-y-5 items-center justify-center '>
      {movies.map(movie=>{
        return <Card key={movie.id} movie={movie}></Card>
      })
      }
     </div>
    </div>
  )
}

export default HomePage
