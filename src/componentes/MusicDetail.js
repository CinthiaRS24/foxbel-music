import { useSelector } from 'react-redux';
import imgDefault from '../images/imgDefault.jpg'
import s from './MusicDetail.module.css'

export default function MusicDetail () {

    const trackSelected = useSelector(state => state.track);
    const artistDefault = "Selecciona una música"

    return (
        <div className={s.divGeneral}>
            <img className={s.img} src={trackSelected.img? trackSelected.img : imgDefault}/>
            <div className={s.infoDetail}>
                <h3 className={s.artistName}>{trackSelected.artist? trackSelected.artist : artistDefault}</h3>
                <h3 className={s.info1}>{trackSelected.artist? `Lo mejor de ${trackSelected.artist}` : null}</h3>
                <h3 className={s.info2}>{trackSelected.artist? `${trackSelected.artist} (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.` : null}</h3>
                <div className={s.divButtons}>
                    <button className={s.btn1}>Reproducir</button>
                    <button className={s.btn2}>Seguir</button>
                </div>
            </div>
        </div>
    )
}