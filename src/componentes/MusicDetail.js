import { useSelector } from 'react-redux';
import imgDefault from '../images/imgDefault.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import s from './MusicDetail.module.css'

export default function MusicDetail () {

    const trackSelected = useSelector(state => state.track);
    const play = useSelector(state => state.play);
    const artistDefault = "Selecciona una música"

    return (
        <div className={s.divGeneral}>
            <img className={s.img} src={trackSelected.img? trackSelected.img : imgDefault}/>
            {
               trackSelected.artist?
                    <div className={s.iconPlay}>
                        {
                            play?
                                <FontAwesomeIcon icon={faPause} color='white' className={s.buttons} />
                            :
                                <FontAwesomeIcon icon={faPlay} color='white' className={s.iconPlay} />
                        }  
                    </div> 
                :
                    null
            }

            {
                trackSelected.artist?
                    <div className={s.infoDetail}>
                        <h3 className={s.artistName}>{trackSelected.artist}</h3>
                        
                        <div className={s.secondP}>
                            <h3 className={s.info1}>{`Lo mejor de ${trackSelected.artist}`}</h3>
                            <h3 className={s.subInfo1}>321, 123 seguidores</h3>
                        </div>
                        
                        
                        <h3 className={s.info2}>{`${trackSelected.artist} (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como ${trackSelected.artist}, es una cantante, compositora y multinstrumentista británica.`}</h3>
               
                        <div className={s.divButtons}>
                            {
                                play?
                                    <button className={s.btn1}>Reproduciendo</button>
                                :
                                    <button className={s.btn1}>Pausado</button>
                            }
                            <button className={s.btn2}>Seguir</button>
                            <FontAwesomeIcon icon={faEllipsisH} className={s.threePoints} color='white' />
                        </div>               
                    </div>
                : 
                <div className={s.infoDetail}>
                    <h3 className={s.artistName}>{artistDefault}</h3>
                </div>
            }
            
        </div>
    )
}