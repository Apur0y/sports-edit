import React from 'react'
import { GiChargedArrow } from 'react-icons/gi'
import { MdOutlineDoubleArrow } from 'react-icons/md'

interface Header {
    title: string,
    text?: string
}

export default function ComponentHeader({ title, text }: Header) {
    return (
        <div className="flex items-center gap-4 mb-5 h-full">
            <MdOutlineDoubleArrow className='text-red-500 text-4xl md:text-5xl xl:text-7xl ' />

            <div className="flex flex-col">
                <h2 className="text-3xl md:text-5xl font-semibold uppercase text-black">
                    {title}
                </h2>
                {text && (
                    <p className="my-1 text-sm uppercase text-black">{text}</p>
                )}
            </div>

            {/* Line stretching to the right */}
            <div className="flex-1 border-b border-black ml-4 self-center" />
        </div>
    )
}


 {/* <div className="w-1/4 opacity-40 bg-[repeating-linear-gradient(45deg,_#0000ff_0px,_#0000ff_0px,_transparent_1px,_transparent_4px)]  " />
          <div className="w-1/4 opacity-40 bg-[repeating-linear-gradient(45deg,_#0000ff_0px,_#0000ff_0px,_transparent_1px,_transparent_4px)]  " /> */}