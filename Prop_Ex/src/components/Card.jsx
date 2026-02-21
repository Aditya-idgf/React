import React from 'react'

function Card({data}) {
    console.log(data)
  return (
        <div className='group overflow-hidden bg-emerald-900 border-4 border-emerald-900 m-10 rounded-lg w-sm flex flex-col items-center justify-center shadow-2xl'>
            <img src={data.imgname} alt="" className='w-full h-48 object-cover rounded-sm '/>
            <div className="flex flex-col items-start justify-center p-5">

            <h2 className='mt-5 font-bold font-sans text-lg'>Room {data.roomno}</h2>
            <p className='text-justify mt-5 font-semibold' >Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aspernatur officiis. Ab, fugit! Nobis dolorum veritatis amet quisquam dolores incidunt, vel eos architecto vero, pariatur inventore ratione expedita sit optio numquam consectetur iste, aut explicabo ducimus. Fuga rem id, amet obcaecati ad eos culpa blanditiis at, sit iusto ratione soluta.</p>
            <button className='outline-0 mt-10 p-3 bg-emerald-950 rounded-lg text-md hover:p-4 hover:text-lg transition-all delay-50 duration-300 ease-in-out'>Book Now</button>
            </div>
        </div>

  )
}

export default Card
