import React from 'react'

const TimeAndLocation = ({weather:{formattedLocalTime,name,country},
}) => {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-light'>
          {formattedLocalTime}
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-2xl font-normal'>{`${name},${country}`}</p>
      </div>
    </div>
  )
}

export default TimeAndLocation
