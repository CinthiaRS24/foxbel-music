import { useDispatch, useSelector } from "react-redux";
import imgDefault from '../images/imgDefault.jpg'
import { playTrack } from '../redux/actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'

import s from './Card.module.css'

export default function Card ({img, title, artist, url}) {

    const dispatch = useDispatch();

    const handlerPlay = (cardInfo) =>  {
        console.log('handlerPlay');
        dispatch ({
            type: 'PLAY_TRACK',
            track: cardInfo
        });
    }

    return (
        <div className="card">
            <div className={s.figure}>
                <img className="card-img-top" src={img? img : imgDefault} alt="Card image cap"/>
                <FontAwesomeIcon icon={faPlay} color='white' onClick={() => handlerPlay({img, title, artist, url})} className={s.iconPlay} />
                <div  className={s.iconPoints}>
                    <FontAwesomeIcon icon={faEllipsisVertical} color='white'  />
                </div>
            </div>
            <div className="card-body">
                <h3 className="card-text">{title}</h3>
                <h4>{artist}</h4>
            </div>
        </div>
    )
}