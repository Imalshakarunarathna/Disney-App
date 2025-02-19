import React from 'react'

export const HeaderItem = ({name,Icon}) => {
  return (
    <div className='text-white flex items-center gap-3 text-xl
    hover:underline font-semibold cursor-pointer underline-offset-8'>
        <Icon/>
        <h2 className='hidden md:block'>{name}</h2>
    </div>
  )
}
