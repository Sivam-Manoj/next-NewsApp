import { FaLinkedin } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <div>
      <footer className="w-full h-[80px] bg-black text-white relative bottom-[-20px] text-center mt-5 pt-4" >
      
      <span className="pt-5">&copy;Sivam Manoj || ALL RIGHTS RESERVED</span>
      <div className="float-right text-[2rem] ">
       <a href="https://www.linkedin.com/in/sivammanoj" target="_blank"><FaLinkedin /></a> 
       <a href="https://www.gmail.com/manom8193@gmail.com"> <CgMail /> </a>
      </div>
      </footer>
    </div>
  )
}

export default Footer