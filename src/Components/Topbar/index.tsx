import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../Public/assets/logo.webp'

export default function Topbar() {
    const navigate = useNavigate()
    return (
        <nav className='sticky top-0 px-8 py-4 flex justify-between items-center bg-[#202744E6] z-50'>
            <img
                src={logo}
                alt="Apiki Logo"
                className='w-36 object-cover'
                onClick={() => { navigate('/') }}
            />
            <p className='text-white font-bold'>Made by: Vinicios Silva</p>
        </nav>
    )
}