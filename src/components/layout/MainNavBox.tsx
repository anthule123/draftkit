import Link from "next/link";
import style from '@/css/layout/Header.module.css';
import ILink from "../langSwitch/ILink";
import { Dictionary } from "@/utils/dictionaries";

export default function MainNavBox({
    dict
}: {dict?: Dictionary}){
    return(
        <nav 
        className={style.mainNav}
        >
            <ul>                   
                <li>
                    <ILink href='/learn'>{dict?.bigRoute.learn}</ILink>
                </li>
                <li><ILink href='/draftkit-tutorial'>{dict?.bigRoute["draftkit-tutorial"]}</ILink></li>
                <li><ILink href='/curation'>{dict?.bigRoute.curation}</ILink></li>
                <li><ILink href='/analysis'>{dict?.bigRoute.analysis}</ILink></li>
            </ul>
        </nav>
    )
}