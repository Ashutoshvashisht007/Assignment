import Card from "../components/Card"

const dummyData = [
  {
    p1: "<b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.8",
    comment: "Exceptional",
    img: "/src/assets/images/5star.jpg",
  },
  {
    p1: "<b>SiteCraft 68-Inch Ultimate Web Design Studio-</b> Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
    p2: "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
    rating: "9.5",
    comment: "Excellent",
    img: "/src/assets/images/4half.jpg",
  },
  {
    p1: "<b>WixPro 72-Inch Responsive Website Builder-</b> Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
    p2: "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
    rating: "9.3",
    comment: "Exceptional",
    img: "/src/assets/images/5star.jpg",
  },
]

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <span>Best Website builders in the US</span>
        <div className="homeContainerDesc">
          <div className="homeContainerDescleft">
            <img src="/src/assets/images/Check.png" alt="check" />
            <span>Last Updated - February 22, 2020</span>
            <img src="/src/assets/images/i.png" alt="i" />
            <span>Advertising Disclosure</span>
          </div>
          <div className="homeContainerDescright">
            <span>Top Relevant</span>
            <img src="/src/assets/images/down.png" alt="mark down" />
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
            dummyData.map((data,idx) => <Card key={idx} p1={data.p1} p2 = {data.p2} rating={data.rating} comment={data.comment} img={data.img} />)
          }
        </main>
      </div>
    </div>
  )
}

export default Home