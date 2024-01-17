"use client"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import Context from "@/Context/Context"
import { useContext } from "react"


const Navbar = () => {
  const{nav,setNav,setCategory}=useContext(Context)
  function handleNav(){
    setNav(!nav)
  }
  return (
    <header className="flex justify-evenly py-5 bg-slate-800 text-[aliceblue] text-[1.2rem]">
      <h1 className="text-[2rem] font-mono font-extrabold text-red-900 shadow-xl">MT-News</h1>
      <nav>
        <ul className={`flex gap-[4rem] md:hidden${nav?"md:block flex-col absolute start-0 top-[5.4rem] bg-slate-800 w-[300px] h-[100vh] text-center gap-y-[5rem]":""}`}>
          <li className="p-2 font-serif hover:bg-[rgba(0,0,0,0.5)] rounded-xl cursor-pointer" onClick={()=>{setCategory("technology")}}>Technology</li>
          <li className="p-2 font-serif hover:bg-[rgba(0,0,0,0.5)] rounded-xl cursor-pointer" onClick={()=>{setCategory("business")}}>Business</li>
          <li className="p-2 font-serif hover:bg-[rgba(0,0,0,0.5)] rounded-xl cursor-pointer" onClick={()=>{setCategory("health")}}>Health</li>
          <li className="p-2 font-serif hover:bg-[rgba(0,0,0,0.5)] rounded-xl cursor-pointer" onClick={()=>{setCategory("sports")}}>sports</li>
          <li className="p-2 font-serif hover:bg-[rgba(0,0,0,0.5)] rounded-xl cursor-pointer" onClick={()=>{setCategory("entertainment")}}>Entertainment</li>
        </ul>
        {nav?<IoMdClose className="text-white hidden md:block text-[3rem] relative top-1 left-8 select-none" onClick={()=>{handleNav()}}/>:<GiHamburgerMenu className="text-white hidden md:block text-[3rem] relative top-1 left-8 select-none" onClick={()=>{handleNav()}}/>}
      </nav>
    </header>
  )
}

export default Navbar