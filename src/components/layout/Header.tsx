import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";
import style from '@/css/layout/Header.module.css';

import { Dictionary, getDictionary } from '@/utils/dictionaries'

export default function Header({
    dict
}: {dict?: Dictionary}){

    return (
        <header className={style.headerContainer}>
            <HeaderDesktop dict={dict}/>
            <HeaderMobile dict={dict}/>
        </header>
    )
}