import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div className='min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-zinc-50' style={{ backgroundImage: `url('/404.png')` }}>
            <main className='text-center error-page z-10'>
                <h1 className='text-7xl font-semibold mb-4'>Lost your way?</h1>
                <p className='mb-6 text-xl'>
                    Sorry, we can't find that page. You will find lots to explore on the home page
                </p>
                <Link to={"/"} className='bg-white text-black py-2 px-4 rounded'>
                    Netflix Home
                </Link>
            </main>
        </div>
    )
}

export default NotFoundPage