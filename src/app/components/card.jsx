import React from 'react'
import Link from 'next/link'

function Card({movie}) {
    const IMAGE_BASE_URL='https://www.themoviedb.org/t/p/w220_and_h330_face'    
  
  return (
    <div className=' rounded-[10px] '>
      <Link href={"/movies/"+movie.id}>
      <div className='w-[25vmin] h-[auto]' >
        <img className='rounded-[12px]' src={IMAGE_BASE_URL+ movie.poster_path}/>
        <div className='h-[30px]'>
            <h5 className='max-h-[45px] overflow-hidden'>{movie.title}</h5>
            {/* <p className='h-[150px] overflow-y-auto overflow-hidden'>{movie.overview}</p> */}
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Card
