"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router=useRouter();
    const isActive =false;
    const data = [
  {
    id: 1,
    serviceName: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  },
  {
    id: 2,
    serviceName: "Responsive UI/UX Design",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
  },
  {
    id: 3,
    serviceName: "Backend & API Development",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
  }
];


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
        <div>
            {
                data.map(item=>(
                    <div key={item.id} className='border-2 p-4 my-4'>
                        <h1 className='text-3xl font-bold'>{item.serviceName}</h1>
                        <img src={item.image} alt={item.serviceName} className='w-full h-64 object-cover my-4'/>
                        <Link href={`/services/${item.id}`} className='btn'>View Details</Link>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default page