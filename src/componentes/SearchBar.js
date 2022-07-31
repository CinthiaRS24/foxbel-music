import user from '../images/user.png'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getSongs} from '../redux/actions'
import s from './SearchBar.module.css'

export default function SearchBar () {

    const dispatch = useDispatch();
    const [searched, setSerched] = useState("");

    function handlerChange(e) {
        e.preventDefault();
        setSerched(e.target.value);
        console.log(searched);
    }

    function handlerSubmit(e) {
        e.preventDefault();
        dispatch(getSongs(`search?q=${searched}`));
    }

    return(
        <div className={s.divGeneral}>
            <div className="input-group rounded">
                <form onSubmit={(e) => handlerSubmit(e)}>
                    <input type="search" className="form-control rounded" placeholder="Buscar" onChange={(e) => handlerChange(e)} aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0" id="search-addon">
                    </span>
                </form>
            </div>

            <div className={s.user}>
                <img className={s.imgUser} src={user}/>
                <p className={s.userName}>Cinthia R.</p>
            </div>
        </div>
    )
}