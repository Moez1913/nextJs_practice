"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router=useRouter();
    const isActive =false;
    const handleClick=()=>{
        if(isActive){
            router.push('/services/adress')
        }
        else{
            alert('you are not allowed to go to this page')
        }
    }
  return (
    <div>
        <h1 className='text-5xl font-black'>
            this is services page
        </h1>
        <Link href="/services/adress">clik here to go to adress</Link>
        <button className='btn ' onClick={handleClick}>Secrate</button>
    </div>
  )
}

export default page