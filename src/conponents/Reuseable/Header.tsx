import React from 'react'

interface Header {
    title:string,
    text:string
}

export default function ComponentHeader({title, text}:Header) {
   
  return (
        <div className="flex text-center justify-center items-stretch gap-6 mb-5 h-full">
          <div className="w-1/4 opacity-40 bg-[repeating-linear-gradient(45deg,_#0000ff_0px,_#0000ff_0px,_transparent_1px,_transparent_4px)]  " />
          <div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase  scale-x-[0.78]">
              {title}
            </h2>
            <p className="my-1 text-sm uppercase text-center">{text}</p>
          </div>
          <div className="w-1/4 opacity-40 bg-[repeating-linear-gradient(45deg,_#0000ff_0px,_#0000ff_0px,_transparent_1px,_transparent_4px)]  " />
        </div>

  )
}
