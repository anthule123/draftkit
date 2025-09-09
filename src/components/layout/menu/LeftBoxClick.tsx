'use client'

import { useState } from "react";
import style from '@/css/layout/LeftBox.module.css'
import { ExitIcon } from "@/components/icons/ExitIcon";
import { HamburgerIcon } from "@/components/icons/HamburgerIcon";

export default function LeftBoxClick(
    {content}:{
        content: React.ReactNode
    }
){
    const [open, setOpen] = useState(false);
    return (
        <div className={style.container}>
            <button onClick={()=>setOpen(!open)} 
                aria-expanded={open} 
                className={`${style.hamburger} ${open ? style.active: ''}`}
            > <div>{open ? <ExitIcon /> : <HamburgerIcon />}</div>
            </button>
            <div className={`${style.content} ${open ? style.active: ''}`}>
                <div className={style.layout}>
                    {open && (
                        content
                    )}
                </div>
            </div>
        </div>
    )
}