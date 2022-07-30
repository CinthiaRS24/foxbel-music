import user from '../images/user.png'
import s from './SearchBar.module.css'

export default function SearchBar () {
    return(
        <div className={s.divGeneral}>
            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="Buscar" aria-label="Search" aria-describedby="search-addon" />
                <span className="input-group-text border-0" id="search-addon">
                </span>
            </div>

            <div className={s.user}>
                <img className={s.imgUser} src={user}/>
                <p className={s.userName}>Cinthia R.</p>
            </div>
        </div>
    )
}