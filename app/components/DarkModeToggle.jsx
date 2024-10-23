"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Switch } from "@/app/components/ui/switch"


export default function DarkModeToggle({collapse}) {
  const { setTheme } = useTheme()
  const [darkMode, setDarkMode] = React.useState("light")
  const change = () => {
    if(darkMode == "light"){
      setTheme("dark") 
      setDarkMode("dark")
    }
    if(darkMode == "dark"){
      setTheme("light") 
      setDarkMode("light")
    }
    }
   
  return (
    <div className="flex items-center cursor-pointer py-[8px]">
        <Switch onCheckedChange={change}   className=" dark:bg-[#8576FF] transition-all scale-75 " />
       {collapse =="64px" ?  "" : <p className="dark:text-white ">Dark mode</p> }
    </div>
   
  )
}
