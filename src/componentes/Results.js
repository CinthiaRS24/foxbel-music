import Card from './Card'
import s from './Results.module.css'

export default function Results () {
    const cartas = [1, 2, 3, 4, 5, 6, 7];

    return (
        <div className={s.divGeneral}>
            <h1 className={s.title}>Resultados</h1>

            <div className={s.cards}>
                {cartas.map(card =>
                {return <Card/>}
                )}
            </div>
            
        </div>
    )
}