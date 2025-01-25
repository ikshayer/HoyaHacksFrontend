'use client'

import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"

// import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

import { useRouter } from "next/navigation"
/*
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
*/

function Navbar(){

    // const {data : session} = useSession()
    // const [providers, setProviders] = useState(null);
    
    const router = useRouter()

    /*
    useEffect(() => {
        (async () => {
          const res = await getProviders();
          setProviders(res)
          
          
        })();
      }, []);
    */

    return(
        <>
        <nav className="flex w-full pt-3 mb-16 justify-between items-center py-[12px]">
            
            <div className="flex items-center">

            <Link href={'/'} className="flex gap-2 flex-center mr-10">
            <Image 
            src='/icons/king-card2.svg'
            width='40'
            height='40'
            alt=''
            className="rounded-full"
            />
            <p className=" font-inter font-semibold text-2xl text-black tracking-wide">Medicare</p>
            </Link>
            </div>
            <button
            className="black_btn"
            onClick={() => router.push('/trial')}
            >
                Trial
            </button>    
        </nav>
        </>
    )
}

export default Navbar

