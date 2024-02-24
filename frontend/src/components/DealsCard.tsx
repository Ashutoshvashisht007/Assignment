

interface DealsCardData{
    data: {img: string;
    discount: number;
    heading: string;
    desc: string;
    price: number[];
    }
}

const DealsCard: React.FC<DealsCardData> = ({data}) => {
    return (
        <div className="DealsCard">
            <div className="DealsCardImg">
                <img src={data.img} alt="" />
            </div>
            <div className="DealsCardDisc">
                <span>{data.discount}% Off</span>
                <span>Limited Time</span>
            </div>
            <div className="DealsCardHeading">
                <span>{data.heading}</span>
            </div>
            <div className="DealsCardPara">
                <p>{data.desc}</p>
            </div>
            <div className="DealsCardMoney">
                <span className="DealsCardS1">${data.price[0]}</span>
                <span className="DealsCardS2">${data.price[1]}</span>
                <span className="DealsCardS3">({data.price[2]}% Off)</span>
            </div>
            <button className="DealsCardbtn">View Deal</button>
        </div>
    )
}

export default DealsCard