"use client"

import { createContext, useState } from "react";

const Context = createContext({});


export const ContextProvider = ({ children }) => {
    const[category,setCategory] = useState("general")
    const[data,setData] = useState([])
    const[nav,setNav] = useState(false)
  return (
    <Context.Provider value={{
        category,
        setCategory,
        data,
        setData,
        nav,
        setNav
    }}>
        {children}
    </Context.Provider>
  )
}
export default Context;