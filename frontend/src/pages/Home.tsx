import { useState } from "react";
import Card from "../components/Card"
import DealsCard from "../components/DealsCard";

const dummyData = [
  {
    p1: "<b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.8",
    comment: "Exceptional",
    img: "images/5star.png",
  },
  {
    p1: "<b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    p2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: "9.5",
    comment: "Excellent",
    img: "images/4half.png",
  },
  {
    p1: "<b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.3",
    comment: "Exceptional",
    img: "images/5star.png",
  },
]

const dummy2 = [
  {
    img: "images/pc.png",
    discount: 20,
    heading: "Webbuilder 1",
    desc: "Computer  Modern clasic with wix support",
    price: [39.96, 49.96, 20],
  },
  {
    img: "images/pc.png",
    discount: 20,
    heading: "Webbuilder 2",
    desc: "Computer  Modern clasic with wix support",
    price: [39.96, 49.96, 20],
  },
  {
    img: "images/pc.png",
    discount: 20,
    heading: "Webbuilder 3",
    desc: "Computer  Modern clasic with wix support",
    price: [39.96, 49.96, 20],
  },
]

const Home = () => {

  const [isChecked, setIsChecked] = useState(true);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="home">
      <div className="homeContainer">
        <span>Best Website builders in the US</span>
        <div className="homeContainerDesc">
          <div className="homeContainerDescleft">
            <img src="images/Check.png" alt="check" />
            <span>Last Updated - February 22, 2020</span>
            <img src="images/i.png" alt="i" />
            <span>Advertising Disclosure</span>
          </div>
          <div className="homeContainerDescright">
            <span>Top Relevant</span>
            <img src="images/down.png" alt="mark down" />
          </div>
        </div>
        <div className="homeContainerTools">
          <span>Tools</span>
          <span>AWS Builder</span>
          <span>Start Build</span>
          <span>Build Supplies</span>
          <span>Tooling</span>
          <span>BlueHosting</span>
        </div>
        <div className="homeContainerhosting">
          <span>Home</span>
          <span>&gt;</span>
          <span>Hosting for all</span>
          <span>&gt;</span>
          <span>Hosting</span>
          <span>&gt;</span>
          <span>Hosting6</span>
          <span>Hosting5</span>
        </div>
        <main className="homeContainerMain">
          {
            dummyData.map((data, idx) => <Card key={idx} idx={idx} p1={data.p1} p2={data.p2} rating={data.rating} comment={data.comment} imgg={data.img} />)
          }
          <div className="homeContainerMainCard">
            <span className='MaincardNumber'>4</span>
            <div className="MaincardLeft">
              <img src="images/pc.png" alt="" />
              <span>CDK</span>
            </div>
            <div className="MaincardCenter">
              <p className="MaincardCenterp1"><b>CDK Resposive Builder:</b> An extensive library of widgets and apps, and detailed step-by-step guides</p>
              <span className="MaincardCenterspan0">26% Off</span>
              <span className="MaincardCenterspan1">Main highlights</span>
              <div className="MaincardCenterdiv1">
                <div>
                  <span className="dds1">9.9</span>
                  <span className="dds2">building responsive</span>
                </div>
                <div>
                  <span className="dds1">8.9</span>
                  <span className="dds2">Cool</span>
                </div>
                <div>
                  <span className="dds1">8.9</span>
                  <span className="dds2">Docs</span>
                </div>
              </div>
              <div className="MainCardCheckbox">
                <span>Why we love it</span>
                <div>
                  <label>
                    <input type="checkbox" checked={isChecked} onChange={handleChange} />
                    Documentation
                  </label>
                </div>
                <div>
                  <input type="checkbox" name="vehicle2" value="Car" />
                  <label > Easy Use</label>
                </div>
                <div>
                  <input type="checkbox" name="vehicle3" value="Boat" />
                  <label > Out of box</label>
                </div>
              </div>
              <span className="MaincardCenterspan2">
                Show more
              </span>
            </div>
            <div className="MaincardRight">
              <div className="MaincardRightTop">
                <span className="MaincardRightTopSpan1">9.1</span>
                <span className="MaincardRightTopSpan2">Very Good</span>
                <img src="images/4star.png" alt="" />
              </div>
              <div className="MaincardRightBottom">
                <button>View</button>
              </div>
            </div>
          </div>

          <span className="homeContainerMainSpan">Related deals you might like for</span>
          <div className="homeContainerDealsCard">
            {
              dummy2.map((data, idx) => (
                <DealsCard key={idx} data={data} />
              ))
            }
          </div>

          <div className="homeContainerSign">
            <span>
            Sign up and get exclusive special deals
            </span>
            <button>Sign Up</button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Home