import './CardVideo.css'

function CardVideo({
    image="./images/refCardVideo.jpg",
    close="./images/refClose.png",
    time = "8:00",
    title = "Mofos  - Mia Malkova Yoga",
    slistStar = ['Angela White'],
    }) {
    return (
        <div className="CardVideo">
            <div className="CardVideo-Image" style={{backgroundImage: 'url(' + image +')'}}>
                <div className="CardVideo-Close" style={{backgroundImage: 'url(' + close +')'}}></div>
                <div className="CardVideo-Time">
                    {time}
                </div>
            </div>
            <div className="CardVideo-Title">
                {title}
            </div>
            <div className="CardVideo-Links">
                {slistStar.map(item => (<a key={item}>{item}</a>))}
            </div>
        </div>
    )
}

export default CardVideo;