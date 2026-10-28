"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export const Navbar = () => {
  const path=usePathname()
  if(!path.includes("Dashboard")){
return (
    <div>
        <nav className="bg-gray-800 p-4">
         <ul className='flex justify-around'>
         <Link href="/" > <li className="text-white">Home</li></Link>
         <Link href="/about" > <li className="text-white">About</li></Link>
         <Link href="/services" > <li className="text-white">Services</li></Link>
         <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1"> User </div>
           <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             <Link className='mb-2 underline ' href="/Login"><li>Login</li></Link>
             <Link href="/Register"><li>Register</li></Link>
             <Link href="/UserDashboard"><li>User DashBoard</li></Link>
             <Link href="/AdminDashboard"><li>Admin DashbBoard</li></Link>
             
         </ul>
        </div>   
          
         </ul>
        </nav>
    </div>
  )
  }
  else{
    <>
    </>
  }
}
