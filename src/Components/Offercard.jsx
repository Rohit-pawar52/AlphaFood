import React from 'react'

function Offercard() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 sm:place-items-center lg:flex justify-evenly md:px-20 py-5 md:py-14 bg-pink-100">
        <div className="rounded-md border w-80 h-64 bg-white p-5 bg-[url('/offer/burger.png')] bg-right-bottom bg-[length:150px_150px] bg-no-repeat">
            <p className='text-3xl font-bold'>TODAY <br />OFFER</p>
            <p className='text-red-700 text-3xl font-bold'>20% OFF</p>
            <p>NEW PHENOMENAL <br />BURGER TASTE</p>
        </div>
        <div className="rounded-md border w-80 h-64 bg-red-500 p-5 bg-[url('/offer/biscuit.png')] bg-right-bottom bg-[length:150px_150px] bg-no-repeat">
            <p className='text-3xl font-bold text-white'>OTHER <br />FLAVORS</p>
            <p className='text-yellow-900 text-3xl font-bold'>20% OFF</p>
            <p className='text-white'>SAVE ROOM <br />WE MADE COOKIES</p>
        </div>
        <div className="rounded-md border w-80 h-64 bg-white p-5 bg-[url('/offer/pizza.png')] bg-right-bottom bg-[length:150px_150px] bg-no-repeat">
            <p className='text-3xl font-bold'>TODAY <br />OFFER</p>
            <p className='text-red-700 text-3xl font-bold'>20% OFF</p>
            <p>NEW PHENOMENAL <br />BURGER TASTE</p>
        </div>
    </div>
  )
}

export default Offercard