'use client'

import Link from "next/link";
import {Instagram, Earth, Linkedin} from "lucide-react";
function Footer() {
  return (
    <footer className="text-center px-16 py-4 mt-16 mb-4 mx-16 w-full flex-start absolute bottom-0">
    <div className="flex gap-2">
    <h1 className="font-semibold text-xl text-black text-center black_gradient">
        {new Date().getFullYear()} Medicare
    </h1>
    </div>
    
    </footer>
  )
}

export default Footer;