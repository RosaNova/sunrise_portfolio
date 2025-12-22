import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const BlogItems = () => {
  return (
    <div className='w-[300px]  min-w-[300px] bg-transparent h-[400px]  relative'>
         <img src="https://res.cloudinary.com/dnfahcxo3/image/upload/v1754184139/dwqqac72j2woyns4nurs.jpg" alt="" className="photo h-[60%] object-cover w-full" />
         <div className="layer pl-3 pb-3 border border-yellow text-start mb-5 gap-2 pt-5 w-[90%]   flex flex-col items-start bg-greenMain absolute top-[50%] left-0">
            <h1 className="title text-2xl font-bold">The sunset faded to twiling.</h1>
            <div className='flex items-center gap-3'>
                <p className="flex gap-5">July 20, 2025</p>
                <div className="dot w-1 h-1 bg-yellow rounded-full"></div>
                <p className="about uppercase">life style</p>
            </div>
            <div className="line w-[37%] h-1 bg-yellow"></div>
            <div className="des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ducimus non 
            </div>
            <button className='btn group flex items-center hover:opacity-25 duration-500 text-yellow border-yellow py-2 uppercase px-7 border' type='button'>Read More <GoArrowUpRight className='text-2xl duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 ' /> </button>
         </div>
    </div>
  )
}

export default BlogItems