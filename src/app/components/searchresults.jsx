"use client"
import React, { useState,useEffect } from 'react'
import Card from './card'

 function SearchResults({searchText ,movies }) {
  const [filteredMovies ,SetfilteredMovies]=useState(movies)
    
  useEffect(()=>{
     SetfilteredMovies(movies)
    },[movies])
  

    const filterMovies=(filter)=>{
        let sortedMovies=[]
        switch (filter){
            case "release_date":
                sortedMovies=[...movies].sort((a,b)=>new Date(b.release_date)-new Date(a.release_date))
                break;
            case "popularity":    
                sortedMovies=[...movies].sort((a,b)=>b.popularity-a.popularity)
                break;
            case "vote_average":
                sortedMovies=[...movies].sort((a,b)=>b.vote_average-a.vote_average)
                break;
            default:
                break;
            }
            SetfilteredMovies(sortedMovies)
       
    }

    return (
    <div>
        
        <div className='flex flex-wrap justify-center'>
            <h1>Top Search for &quot;{searchText}&quot;</h1>
            <div>
                <select onChange={(event)=>filterMovies(event.target.value)}>
                    <option >Sort By</option>
                    <option value="release_date">release year</option>
                    <option value="popularity">popularity</option>
                    <option value="vote_average">rating</option>
                </select>
            </div>
        </div>

        <div className='flex flex-wrap gap-3'>
            {filteredMovies.map((movie)=>{
                return <Card key={movie.id} movie={movie}></Card>
            })}
        </div>

    </div>
  )
}

export default SearchResults
