import "./App.css";

function App() {
  const secondCardsContainer = [
    {
      title: "Attract",
      paradata: "Attract more customers",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec00a8aaf428800c75_Group%2018613.svg",
          title: "Reviews",
          description: "Improve ratings & get chosen more.",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb4806cd1c4715ced5_Group%2018614.svg",
          title: "Listing",
          description: "improve listings & get seen more.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec43bcc550dc49c6e8_Group%2018624.svg",
          title: "Marketing",
          description: "Reach out to customers on text & email.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6612375a88c4_Group%2018618.svg",
          title: "SmartPages",
          description: "Engage more with our AI SEO.",
        },
      ],
    },
    {
      title: "Engage",
      paradata: "Convert leads to customers",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb8a983469d6918815_Group%2018616.svg",
          title: "WebChat",
          description: "Convert leads on website chat with ou Ai.",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb7cee6e0fc06b720a_Group%2018617.svg",
          title: "Messaging",
          description: "Engage with customers across all channels.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbebaaeb8c7e7cef4b97_Group%2018619.svg",
          title: "Referrals",
          description: "Let your customers refer you.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbeb12ef6662a15a88c5_Group%2018615.svg",
          title: "Payments",
          description: "Modernize your payment tools.",
        },
      ],
    },
    {
      title: "Elevate",
      paradata: "Provide a delightful experience",
      arrData: [
        {
          id: 1,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec5519b27af4eec871_Group%2018623.svg",
          title: "Captain AI",
          description: "Your AI assistant to drive growth",
        },
        {
          id: 2,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4d64345353355417_Group%2018621.svg",
          title: "Feedback & survey",
          description: "Listen to your customers & delight them.",
        },
        {
          id: 3,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbecb9ed0fa8b30e3a47_Group%2018620.svg",
          title: "Competition & Insights",
          description: "Learn about your competitors & insights.",
        },
        {
          id: 4,
          icon: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d9bbec4a3eedd06bd65d1a_Group%2018622.svg",
          title: "Customer Manager",
          description: "Manage all your customer data & activity.",
        },
      ],
    },
  ];

  console.log(secondCardsContainer);
  const memberCard = [
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341ce2debac5188bfaa5_Mask%20Group%20174.webp",
      name: "Simon Page",
      position: "Owner, Mamagato Restaurant",
      string:
        "In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn",
      offer: "40%",
      offer_head: "Average net profit increase",
      product_used: [
        "Messaging",
        "Webchat",
        "Reviews",
        "Listings",
        "Referrals",
      ],
      id: 1,
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62e0341c025451d2b6d54b11_xZ4wg2Xj-2.webp",
      name: "Daniel Wilson",
      position: "Marketing head, The Air Conditioning Company",
      string:
        "Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google",
      offer: "200%",
      offer_head: "New review growth",
      product_used: [
        "Reviews",
        "Listings",
        "Messaging",
        "Webchat",
        "Customer Manager",
      ],
      id: 2,
    },
    {
      img: "https://assets.website-files.com/62a83ee090ccdee139c347e5/62ae22ec3263c7de8393966d_photo-1493666438817-866a91353ca9.webp",
      name: "Debbie Rose",
      position: "Owner, Jiva luxury Spa",
      string:
        "Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks",
      offer: "$150k",
      offer_head: "Generated with marketing campaign",
      product_used: [
        "Marketing",
        "Webchat",
        "Review",
        "Messaging",
        "Competition & Insights",
      ],
      id: 3,
    },
  ];
  const brandLogo = [
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cad44fb711e700c0a1_Group%2018530.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cae70f01d34820d129_Group%2018531.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969c99e10c822b37179e8_Group%2018532.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca4e2bcd235bf57982_Group%2018533.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969ca47165b7b29cd5bfa_Group%2018534.webp",
    "https://assets.website-files.com/62a83ee090ccdee139c347e5/62d969cb054ce48a81f23d47_Group%2018535.webp",
  ];
  return (
    <>
      <div className="top-header-container">
        <h1 className="first-heading">Best way to grow your local business</h1>
      </div>
      <div className="Artificial_Intelligence_text_container">
        <div className="Artificial_Intelligence_text">
          Artificial Intelligence powered easy-to-use tools to get more
          customers & give them a better experience
        </div>
      </div>
      <div className="input-row">
        <input
          name="demo-input"
          className="demo-input"
          placeholder="ENTER YOUR EMAIL"
        ></input>
        <button type="button" className="demo-input-btn">
          GET DEMO
        </button>
      </div>
      <img
        alt="img"
        src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62b0e6fa4473cb712ba3b454_home-hero-agnostic-l-2x-p-1600.webp"
      ></img>
      <div className="second-header-container">
        <h1 className="second-header">
          Trusted by 100,000+ local businesses globally
        </h1>
      </div>
      <div className="brand_row">
        {brandLogo.map((singleData, index) => {
          return (
            <img className="brand-card" key={index} src={singleData}></img>
          );
        })}
      </div>
      <div className="member-card-container">
        {memberCard.map((singleData) => {
          return (
            <div key={singleData.id} className="memberCard">
              <div className="row1">
                <div className="left">
                  <img
                    alt="profile-img"
                    className="profile-img"
                    src={singleData.img}
                  ></img>
                </div>
                <div className="right">
                  <div className="row1_top">{singleData.name}</div>
                  <div className="row1_bottom">{singleData.position}</div>
                </div>
              </div>
              <div className="row2">"{singleData.string}"</div>
              <div className="row3">{singleData.offer}</div>
              <div className="row4">
                <div className="row4_child">{singleData.offer_head}</div>
              </div>
              <div className="row5">Product used :</div>
              <div className="row6">
                {singleData.product_used.map((data) => {
                  return <div className="smallcard">{data}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="third-header">
        <h1>Tools to take your business to next level</h1>
      </div>
      <div className="secondCardsContainer">
        {secondCardsContainer.map((singledata, index) => {
          return (
            <div className="secondClassCard">
              <div className="secondClassCardTitle">{singledata.title}</div>
              <div className="secondClassCardLable">{singledata.paradata}</div>
              <div className="secondsmallCardContainer">
                {singledata.arrData.map((data) => {
                  return (
                    <div className="secondsmallContainer">
                      <img
                        alt="img"
                        className="secondCardSmallImage"
                        src={data.icon}
                      ></img>
                      <div>
                        <div className="secondCardRightTop">{data.title}</div>
                        <div className="secondCardRightBottom">
                          {data.description}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
