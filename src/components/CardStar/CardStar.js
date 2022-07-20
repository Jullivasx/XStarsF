import './CardStar.css';

function CardStar({image="./images/refCardStar.jpg", title="Mia Malkova"}) {
    const style = {
        backgroundImage: `url(${image})`,
        color: 'red',
    }
    return (
        <div className="CardStar" style={style}>
            <div className='CardStar-Title'>{title}</div>
        </div>
    )
}

export default CardStar;