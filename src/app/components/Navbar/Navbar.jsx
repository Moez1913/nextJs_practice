import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className="bg-gray-800 p-4">
         <ul className='flex justify-around'>
         <Link href="/" > <li className="text-white">Home</li></Link>
         <Link href="/about" > <li className="text-white">About</li></Link>
         <Link href="/services" > <li className="text-white">Services</li></Link>
            
          
         </ul>
        </nav>
    </div>
  )
}
