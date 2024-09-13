import React from 'react'

const Footer = () => {
    return (
        <footer className='py-10 bg-black text-gray-400 border-t border-gray-600'>
            <div className='max-w-6xl mx-auto px-4'>
                <p className='text-center text-xs mt-6'>
                    Built by{" "}
                    <a
                        href='https://github.com/burakorkmez'
                        target='_blank'
                        className='font-medium underline underline-offset-4 hover:text-white'
                    >
                        Shelenko Natali
                    </a>
                    . <br /> © 2024 Netflix Clone, All Rights Reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
