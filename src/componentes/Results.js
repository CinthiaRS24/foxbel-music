import Card from './Card'
import s from './Results.module.css'

export default function Results () {
    return (
        <div className={s.divGeneral}>
            <h1 className={s.title}>Resultados</h1>
            <Card/>
        </div>
    )
}