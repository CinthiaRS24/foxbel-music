import s from './NavigationMenu.module.css'
import logo from '../images/foxbel-music@3x.png'
import {getSongs} from '../redux/actions'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'

export default function NavigationMenu () {

    const dispatch = useDispatch();
    const results = useSelector(state => state.results);

    function handlerSongs(e, params) {
        if (e) {
            e.preventDefault();
        }
        dispatch(getSongs(params));
    }

    useEffect(() => {
        console.log('NavigationMenu useEffect');
        handlerSongs(null, 'radio/37151/tracks')
    }, []);

    return (
        <div className={s.divGeneral}>
            <img className={s.logo} src={logo}/>
            <div className={s.divLibreria}>
                <p>Mi Librería</p>
                <ul className="nav flex-column">
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'radio/37151/tracks')}>
                        <a className="nav-link active" href="#">Recientes</a>
                    </li>
                    <li className="nav-item list-unstyled" onClick={(e) => handlerSongs(e, 'artist/27/top?limit=25')}>
                        <a className="nav-link" href="#">Artistas</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'album/302127/tracks')}>
                        <a className="nav-link" href="#">Albums</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'chart/0/tracks')}>
                        <a className="nav-link" href="#">canciones</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'radio/31061/tracks')}>
                        <a className="nav-link" href="#">Estaciones</a>
                    </li>
                </ul>
            </div>
            
            <div className={s.divPlaylist}>
                <p>Playlist</p>
                <ul className="nav flex-column">
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'search?q=metal')}>
                        <a className="nav-link" href="#">Metal</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'search?q=dance')}>
                        <a className="nav-link" href="#">Para bailar</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'search?q=rock')}>
                        <a className="nav-link" href="#">Rock 90s</a>
                    </li>
                    <li className="nav-item" onClick={(e) => handlerSongs(e, 'search?q=baladas')}>
                        <a className="nav-link" href="#">Baladas</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}