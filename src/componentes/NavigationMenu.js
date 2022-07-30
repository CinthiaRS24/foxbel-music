import s from './NavigationMenu.module.css'
import logo from '../images/foxbel-music@3x.png'
import {getSongsRecent} from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'

export default function NavigationMenu () {

    const dispatch = useDispatch();
    const results = useSelector(state => state.results);
    console.log('results', results)

    function handlerSongs(e) {
        e.preventDefault();
        dispatch(getSongsRecent());
        console.log('e', e)
    }

    return (
        <div className={s.divGeneral}>
            <img className={s.logo} src={logo}/>
            <div className={s.divLibreria}>
                <p>Mi Librería</p>
                <ul className="nav flex-column">
                    <li className="nav-item" onClick={(e) => handlerSongs(e)}>
                        <a className="nav-link active" href="#">Recientes</a>
                    </li>
                    <li className="nav-item list-unstyled">
                        <a className="nav-link" href="#">Artistas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Albums</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">canciones</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Estaciones</a>
                    </li>
                </ul>
            </div>
            
            <div className={s.divPlaylist}>
                <p>Playlist</p>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Metal</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Para bailar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Rock 90s</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Baladas</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}