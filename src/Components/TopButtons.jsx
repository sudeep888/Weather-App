import React from 'react'

const TopButtons = ({setQuery}) => {
  const cities=[
    {
        id:1,
        name:"Delhi"
    },
    {
        id:2,
        name:"Mumbai"
    },
    {
        id:3,
        name:"Kolkata"
    },
    {
        id:4,
        name:"Pune"
    },
    {
        id:5,
        name:"Hyderabad"
    }
  ]
    return (
        <div className='flex items-center justify-around my-3 flex-wrap'>
        {cities.map((city) => (
          <button
            key={city.id}
            className='text-white text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md transition ease-in m-1 hover:scale-110'
            onClick={() => setQuery({ q: city.name })}>
            {city.name}
          </button>
        ))}
      </div>
  )
}

export default TopButtons
