import React from 'react'
import { data } from './Data/Data'


import { FaShoppingBag} from 'react-icons/fa'
import { FiShoppingBag } from 'react-icons/fi'
const Recentorders = () => {
  return (
    <div className=' w-full col-span-1 lg:h-[70vh] h-[50vh] p-4 m-auto relative bg-white overflow-scroll border rounded-lg '>
        <h1> Recent orders</h1>
        <ul>
            {
                data.map((item, index) => (
                    <li key={index} className=" bg-gray-200 hover:bg-gray-50 rounded-lg p-2 my-3 flex items-center cursor-pointer">
                       <div className=' bg-purple-600 rounded-lg p-3'>
                        <FiShoppingBag className=' text-purple-800'/>
                       </div>
                       <div className=' pl-4'>
                        <p className=' text-gray-400 font-bold '>
                            ${item.total}
                        </p>
                        <p
                        className=' text-gray-400 font-light text-sm'> {item.name.first}</p>
                       </div>
                       <div>
                        <p className=' lg:flex md:hidden absolute right-6 text-xs' > 
                            {item.date}
                        </p>
                       </div>
                    </li>
                ))
            }
        </ul>


    </div>
  )
}

export default Recentorders