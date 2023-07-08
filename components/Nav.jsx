"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Nav = () => {
  return (
    <nav className='flex-between mb-16 w-full pt-3'>
      <Link href='/' className='flex flex-center gap-2'>
        <Image  
         src='/assets/images/logo.svg'
         alt='GPT-prompt logo'
         width={30}
         height={30}
         className='object-contain'/>
         <p className='logo_text'>GPT-prompt</p>
      </Link>

      {/*Mobile navigation*/}

      <div className='sm:flex hidden'>

      </div>
    
    </nav>
  )
}

export default Nav