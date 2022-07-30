import s from './Card.module.css'

export default function Card () {
    return (
        <div className="card">
            <img className="card-img-top" src="https://api.time.com/wp-content/uploads/2021/10/GettyImages-1229269763.jpg" alt="Card image cap"/>
            <div className="card-body">
                <h3 className="card-text">21</h3>
                <h4>Adele</h4>
            </div>
        </div>
    )
}