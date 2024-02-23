
// interface cardType{
//     p1: string;
//     p2: string;
//     rating: string;
//     comment: string;
//     img: string;
// }

// const Card: React.FC<cardType> = ({p1,p2,rating,comment,img}) => {
//   return (
//     <div className="card">
//         <div className="cardLeft">
//             <img src="/src/assets/images/pc.png" alt="" />
//             <span>Builder 1</span>
//         </div>
//         <div className="cardCenter">
//             <p className="cardCenterp1">{p1}</p>
//             <span className="cardCenterspan1">Main highlights</span>
//             <p className="cardCenterp2">{p2}</p>
//             <span className="cardCenterspan2">
//                 Show more
//                 <img src="/src/assets/images/bluedown.png" alt="" />
//             </span>
//         </div>
//         <div className="cardRight">
//             <div className="cardRightTop">
//                 <span className="cardRightTopSpan1">{rating}</span>
//                 <span className="cardRightTopSpan2">{comment}</span>
//                 <img src={img} alt="" />
//             </div>
//             <div className="cardRightBottom">
//                 <button>View</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card

import React from 'react';

interface CardProps {
    p1: string;
    p2: string;
    rating: string;
    comment: string;
    img: string;
}

const Card: React.FC<CardProps> = ({ p1, p2, rating, comment, img }) => {
    return (
        <div className="card">
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
                    <img src="/src/assets/images/bluedown.png" alt="" />
                </span>
            </div>
            <div className="cardRight">
                <div className="cardRightTop">
                    <span className="cardRightTopSpan1">{rating}</span>
                    <span className="cardRightTopSpan2">{comment}</span>
                    <img src={img} alt="" />
                </div>
                <div className="cardRightBottom">
                    <button>View</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
