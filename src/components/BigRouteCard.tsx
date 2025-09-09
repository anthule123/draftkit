import ILink from "./langSwitch/ILink";
import style from '@/css/components/card.module.css';

export function BigRouteCard(
    bigRoute: string,
    niceName: string
){
    return (
        <div className={style.bigRouteCard} key= {`${bigRoute}`}>
            <ILink href= {`${bigRoute}`}>
              <h3>{niceName}</h3>
            </ILink>
            
        </div>
    )
}