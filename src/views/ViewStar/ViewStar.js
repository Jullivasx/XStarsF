import CaptionText from '../../components/CaptionText/CaptionText';
import CardVideo from '../../components/CardVideo/CardVideo';
import CardVideoAdd from '../../components/CardVideoAdd/CardVideoAdd';
import HeaderSite from '../../components/HeaderSite/HeaderSite';
import './ViewStar.css'

function ViewStar({
    image = './images/refCardStar.jpg',
    role = "Lena",
    name = "Mia Malkova",
    alias = "Mia Bliss, Madison Swan, Madison Clover",
    rank = 36,
    videos = 144,
    born = "01 Jun 1992",
    height = "5 ft 8 in (173 cm)",
    astrology = "Gemini",
    ethnicity = "White",
    weight = "119 lbs (54 kg)",
    hair = "Blonde",
    yearsActive = "2012 to Present (Started around 20 years old)",
    piercings = "Navel",
}) {
    return (
        <div className="ViewStar">

            <HeaderSite/>

            <div className="ViewStar-Row">
                <div className="ViewStar-Image">
                    <img src={image} width="192" height="245"/>
                </div>
                <div className="ViewStar-Info">
                    
                    <div className="ViewStar-TitleName">{name}</div>
                    <div className="ViewStar-TitleAlias">{alias}</div>
                    <div className="ViewStar-TitleRole">{role}</div>

                    <div className="ViewStar-Row">
                        <div className="ViewStar-Col">
                            <CaptionText caption="Rank" text={rank} />
                            <CaptionText caption="Videos" text={videos} />
                            <CaptionText caption="Born" text={born} />
                            <CaptionText caption="Height" text={height} />
                            <CaptionText caption="Astrology" text={astrology} />
                        </div>
                        <div className="ViewStar-Col">
                            <CaptionText caption="Ethnicity" text={ethnicity} />
                            <CaptionText caption="Weight" text={weight} />
                            <CaptionText caption="Hair" text={hair} />
                            <CaptionText caption="Years Active" text={yearsActive} />
                            <CaptionText caption="Piercings" text={piercings} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="ViewStar-ListVideo">
                <CardVideo/>
                <CardVideoAdd/>
            </div>
            
        </div>
    )
}

export default ViewStar;