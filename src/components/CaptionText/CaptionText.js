import './CaptionText.css';

function CaptionText({caption, text}) {
    return (
        <div className="CaptionText">
            <div className="CaptionText-Caption">{caption}</div>
            <div className="CaptionText-Text">{text}</div>
        </div>
    )
}

export default CaptionText;