import { useSelector } from 'react-redux';
import imgDefault from '../images/imgDefault.jpg'
import Card from './Card'
import s from './Results.module.css'

export default function Results () {
    const resultados = useSelector(state => state.results);

    return (
        <div className={s.divGeneral}>
            <h1 className={s.title}>Resultados</h1>

            <div className={s.cards} >
                {resultados?.map(card => {
                    return (
                        <Card 
                            img={card.album ? card.album.cover : imgDefault} 
                            title={card.title} 
                            artist={card.artist.name} 
                            url={card.preview} 
                            key={card.id}
                            index={resultados.indexOf(card)} 
                        />
                )}
                )}
            </div>
            
        </div>
    )
}