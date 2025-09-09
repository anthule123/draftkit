import style from '@/css/layout/Header.module.css';
import { Dictionary } from '@/utils/dictionaries';
import LanguageSwitcher from '../langSwitch/LanguageSwitcher';
import LeftBoxClick from './menu/LeftBoxClick';
import MainNavBox from './MainNavBox';
import ILink from '../langSwitch/ILink';

export default function HeaderMobile({
    dict
}: {dict?: Dictionary}){
    return (
      <div className={style.mobile}>
            <div className='center'>
                <div className={style.layout}>
                        <LeftBoxMobile dict={dict}/>
                     <ILink href='/' passHref>
                        <h1>{dict?.index["home-page"]}
                        </h1>
                    </ILink>
                    <div className={style.rightBox}>
                        <div className="center"><LanguageSwitcher/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function LeftBoxMobile({
    dict
}: {dict?: Dictionary}){
    return (
        <div className='center'>
            <div className={style.leftBox}>
                <div className='center'>
                    <LeftBoxClick
                        content={<MainNavBox 
                            dict={dict}/> }/> 
                   
                </div>
            </div>
        </div>
    )
}
