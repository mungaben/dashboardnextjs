import React from 'react'
import { data } from '@/components/Data/Data'


import {BsPersonFill,BsThreeDotsVertical } from "react-icons/bs"

const Customers = () => {
  return (
    <div className=' bg-gray-100 min-h-screen '>
      <div className=' flex justify-between p-4'>
        <h2> Customers</h2>
        <h2> Welcome  Back ,Ben</h2>
      </div>
      <div className=' p-4  '>
        <div className=' w-full m-auto border bg-white overflow-y-auto'>
          <div className=' my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  items-center justify-between cursor-pointer'>
            <span>Name</span>
            <span className=' sm:text-left text-right '>Email</span>
            <span className=' hidden md:grid'> Last order</span>
            <span className=' hidden md:grid'> Method </span>
           
          </div>
          <div>
            {
              data.map((item, index) => {
                return (
                  <div className=' my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer divide-y hover:bg-purple-200' key={index}>
                    <div className=' flex p-3'  >
                      <BsPersonFill className='text-purple-400 hover:bg-purple-700 rounded-lg border' size={20} />
                      <span className=' text-sm  ml-4 '>{item.name.first} </span>
                    </div>
                    <span className=' sm:text-left text-right '>{item.email}</span>
                    <span className=' hidden md:grid'> {item.date}</span>
                    <span className='hidden  md:flex justify-between items-center mr-10'> {item.method} <BsThreeDotsVertical/> </span>
                  </div>
                )
              })
            }
          </div>

        </div>

      </div>

    </div>
  )
}

export default Customers