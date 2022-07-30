import s from './NavigationMenu.module.css'
import logo from '../images/foxbel-music@3x.png'

export default function NavigationMenu () {
    return (
        <div className={s.divGeneral}>
            <img className={s.logo} src={logo}/>
            <div className={s.divLibreria}>
                <p>Mi Librería</p>
                <ul className="nav flex-column">
                    <li className="nav-item">
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