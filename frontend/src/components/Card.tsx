import React from 'react';

interface CardProps {
    idx: number;
    p1: string;
    p2: string;
    rating: string;
    comment: string;
    imgg: string;
}

const Card: React.FC<CardProps> = ({ idx, p1, p2, rating, comment, imgg }) => {
    const divClass = idx <= 1 ? "cardHeading" : "noCardHeading";
    return (
        <div className="card">
            <div className={divClass}>
                {(() => {
                    if (idx === 0) {
                        return <img src="/src/assets/images/trophy.png" alt="trophy" className='cardHeadingIMG' />
                    } else if(idx === 1) {
                        return <img src="/src/assets/images/diamond.png" alt="diamond" className='cardHeadingIMG' />
                    }
                })()}
                {(() => {
                    if (idx === 0) {
                        return <span className='cardHeadingSpan'>Best Choice</span>
                    } else if(idx === 1) {
                        return <span className='cardHeadingSpan'>Best Value</span>
                    }
                })()}
            </div>
            <span className='cardNumber'>{idx + 1}</span>
            <div className="cardLeft">
                <img src="/src/assets/images/pc.png" alt="" />
                <span>Builder 1</span>
            </div>
            <div className="cardCenter">
                <p className="cardCenterp1" dangerouslySetInnerHTML={{ __html: p1 }} />
                <span className="cardCenterspan1">Main highlights</span>
                <p className="cardCenterp2">{p2}</p>
                <span className="cardCenterspan2">
                    Show more
                    {
                        idx + 1 <= 2 ? <img src="/src/assets/images/bluedown.png" alt="" /> : <span></span>
                    }
                </span>
            </div>
            <div className="cardRight">
                <div className="cardRightTop">
                    <span className="cardRightTopSpan1">{rating}</span>
                    <span className="cardRightTopSpan2">{comment}</span>
                    <img src={imgg} alt="" />
                </div>
                <div className="cardRightBottom">
                    <button>View</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
