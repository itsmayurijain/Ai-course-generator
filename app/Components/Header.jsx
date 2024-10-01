import React from 'react'
import Image from 'next/image'

export const Header = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between items-center shadow-sm'>
                <Image
                    src="/common-assets/logo.png"
                    width="170"
                    height="170"
                    alt="Logo"
                />
                <button className='bg-violet-700 text-white p-3 font-medium rounded-md mx-6'>Get started</button>
            </div>
        </div>
    )
}
