import React from 'react'

const page = async ({params}) => {
    const {id} = await params

  return (
    <div>
        <h1 className='text-5xl font-black'>
            Service Id: {id}
        </h1>
    </div>
  )
}

export default page