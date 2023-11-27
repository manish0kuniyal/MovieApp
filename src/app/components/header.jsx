"use client"
import Link from "next/link";
import {useState} from "react"
import {useRouter} from "next/navigation"

function Header() {
  const [searchInp,setSearchInp]=useState("")
  const router=useRouter()

  const handleSubmit=(event)=>{
    event.preventDefault()
    if(searchInp){
      router.push(`/movies/search?query=${searchInp}`)
    }
  }

  return (
    <div>
      <nav className=" bg-black text-white ">
        <div className="flex  mx-[5%] sm:mx-[10%]  justify-between  items-center p-3">
         <Link href='/'>MovieApp</Link> 
          <form className=" flex ml-[20%]" onSubmit={event=>handleSubmit(event)}>
            <input onChange={event=>setSearchInp(event.target.value)} placeholder="moviename..." className="text-xs text-black w-[60%] sm:w-[70%] px-2 py-1 rounded-[10px] " />
            <button className="text-xs ml-2 border-2  px-3 rounded-[10px]">find</button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Header;
