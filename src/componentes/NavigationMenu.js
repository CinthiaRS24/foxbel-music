import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'
import {getSongs} from '../redux/actions'
import logo from '../images/foxbel-music@3x.png'
import s from './NavigationMenu.module.css'

export default function NavigationMenu () {

    const dispatch = useDispatch();

    const results = useSelector(state => state.results);
    const [selected, setSelected] = useState(1)

    const handlerSongs = (e, params) => {
        if (e) {
            e.preventDefault();
        }
        dispatch(getSongs(params));
    }

    useEffect(() => {
        handlerSongs(null, 'radio/37151/tracks')
    }, []);


    return (
        <div className={s.divGeneral}>
            <img className={s.logo} src={logo}/>

            <div className={s.divLibreria}>
                <p>Mi Librería</p>

                <ul className="nav flex-column">
                    <li 
                        className={selected === 1? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'radio/37151/tracks'); setSelected(1)}}
                    >
                        <a className="nav-link active" href="#">Recientes</a>
                    </li>

                    <li 
                        className={selected === 2? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'artist/27/top?limit=25'); setSelected(2)}}
                    >
                        <a className="nav-link" href="#">Artistas</a>
                    </li>

                    <li 
                        className={selected === 3? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'album/302127/tracks'); setSelected(3)}}
                    >
                        <a className="nav-link" href="#">Albums</a>
                    </li>

                    <li 
                        className={selected === 4? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'chart/0/tracks'); setSelected(4)}}
                    >
                        <a className="nav-link" href="#">Canciones</a>
                    </li>

                    <li 
                        className={selected === 5? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'radio/31061/tracks'); setSelected(5)}}
                    >
                        <a className="nav-link" href="#">Estaciones</a>
                    </li>
                </ul>
            </div>
            
            <div className={s.divPlaylist}>
                <p>Playlist</p>

                <ul className="nav flex-column">
                    <li 
                        className={selected === 6? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'search?q=metal'); setSelected(6)}}
                    >
                        <a className="nav-link" href="#">Metal</a>
                    </li>

                    <li 
                        className={selected === 7? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'search?q=dance'); setSelected(7)}}
                    >
                        <a className="nav-link" href="#">Para bailar</a>
                    </li>

                    <li 
                        className={selected === 8? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'search?q=rock'); setSelected(8)}}
                    >
                        <a className="nav-link" href="#">Rock 90s</a>
                    </li>

                    <li 
                        className={selected === 9? s.selected : null} 
                        onClick={(e) => {handlerSongs(e, 'search?q=baladas'); setSelected(9)}}
                    >
                        <a className="nav-link" href="#">Baladas</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}