import style from '@/css/layout/Header.module.css';
import { Dictionary } from '@/utils/dictionaries';
import Link from 'next/link';
import ILink from '../langSwitch/ILink';
import LanguageSwitcher from '../langSwitch/LanguageSwitcher';
import MainNavBox from './MainNavBox';


export default function HeaderDesktop({
    dict
}: {dict?: Dictionary}){
    return (
       <div className={style.desktop}>
            <div className='center'>
                <div className={style.layout}>
                     <div className={style.mainNav}>
                         <ILink href='/' passHref>
                            <h1>{dict?.index["home-page"]}
                            </h1>
                        </ILink>
                        <MainNavBox dict={dict}/>
                    </div>
                    <div className={style.rightBox}>
                        <LanguageSwitcher/>
                    </div>
                </div>
            </div>
        </div>
    )
}