import React from 'react'
import logo from '../../Public/assets/logo.webp'

export default function Topbar() {
    return (
        <nav className='px-8 py-4 flex justify-between items-center bg-[#202744E6]'>
            <img src={logo} alt="Apiki Logo" className='w-36 object-cover' />
            <p className='text-white font-bold'>Made by: Vinicios Silva</p>
        </nav>
    )
}