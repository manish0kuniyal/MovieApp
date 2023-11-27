import React from 'react'
import { SimilarMovies, getMovieDetails } from '../../../../utils/request'

const MovieDetail = async({params}) => {
    const movieDetails=await getMovieDetails(params.id)
    const IMAGE_BASE_URL='https://www.themoviedb.org/t/p/w220_and_h330_face'  
    const similarMovies=await SimilarMovies(params.id)
    console.log(movieDetails)
  return (
    <div>
        <div className='h-[50vh] flex   px-2 py-[2%] overflow-hidden'>
            <img className='w-[40%] rounded-[5%]' src={IMAGE_BASE_URL+movieDetails.backdrop_path}/>
            <div className=' w-[60%] h-[auto] ml-3 text-sm'>
            <h3 className='font-bold text-[1rem]'>{movieDetails.title}</h3> 
            <p className='font-bold text-[.7rem] mt-2'>{movieDetails.release_date}</p>
            <div className='flex my-2'>
            <p className='text-[.5rem] border-2 px-2 rounded-[10px] mr-1'>{movieDetails.original_language}</p>
            <div> <p>
              {movieDetails.genres.map(genre=>{
                return <span className='border-2 rounded-[12px] text-[.6rem] px-2 py-1 mr-2'>{genre.name}</span>
              })

              }
              </p></div>
            </div>
            <p className='text-[.6rem] '>{movieDetails.overview}</p>
            </div>
        </div>

        {/* SIMIALR */}
        <div>
          <h2>
            SIMILAR MOVIES
          </h2>
          <div className='flex flex-wrap gap-8 justify-center'>
             {similarMovies.map(movie=>{
              return(
                <div >
                 <img className='rounded-[10px]' src={IMAGE_BASE_URL+movie.poster_path}/>
                 <div> 
                  <h1 >{movie.title}</h1>
                 </div>
                </div>
              )
             })

             }
          </div>
        </div>

    </div>
  )
}

export default MovieDetail
