import { useState } from 'react';
import { dataTab, dataPanel } from './testData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';

const MarketPlaceContent = () => {
  const [cate, setCate] = useState(dataTab);
  const [data, setData] = useState(dataPanel);
  const [visible, setVisible] = useState(15);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 5);
  };

  return (
    <div className="market-place-cate-area">
      <Tabs>
        <TabList className="market-place-tab-block">
          {cate.map(cate => (
            <Tab key={cate.id} className="market-place-tab">
              {cate.title}
            </Tab>
          ))}
        </TabList>
        {data.map(data => (
          <TabPanel key={data.id}>
            <div className="option market-place-sort-block">
              <h2 className="title">1,000 Items</h2>
              <div className="view">
                <Dropdown>
                  <Dropdown.Toggle className="btn-sort-by dropdown">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7H21"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M6 12H18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                      <path
                        d="M10 17H14"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span>Low To High</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="dropdown-menu"
                    style={{
                      margin: 0,
                      borderRadius: '15px',
                      transformY: '-40px',
                      width: '100%',
                      backgroundColor: 'black',
                    }}
                  >
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      Price
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      VIT
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      STR
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      AGI
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      LUK
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-menu-item" href="/#">
                      Latest
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>

            <div className="market-place-card-block">
              {data.dataContent.slice(0, visible).map((item, key) => (
                <div key={key} className="market-place-card">
                  <div className="card-header d-flex justify-content-between align-items-center mb-3">
                    <div className="author d-flex">
                      <div className="avatar">
                        <Image src={item.imgAuthor} alt="Axies" />
                      </div>
                      <div className="info">
                        <span>Creator</span>
                        <h6 className="author">
                          <Link href="/author-02">{item.nameAuthor}</Link>
                        </h6>
                      </div>
                    </div>
                    <button className="like-btn">
                      <span className="d-flex align-items-center">
                        <AiOutlineHeart className="t-16 me-2" />
                        {item.wishlist}
                      </span>
                    </button>
                  </div>
                  <div className="card-media mb-4">
                    <Link href="/item-details-01">
                      <Image
                        src={item.img}
                        alt="monster"
                        layout={'responsive'}
                        objectFit={'cover'}
                      />
                    </Link>
                    <div className="featured-countdown">
                      <span className="slogan"></span>
                      {/* <Countdown date={Date.now() + 500000000}>
                          <span>You are good to go!</span>
                        </Countdown> */}
                    </div>
                    {/* <div className="button-place-bid">
                      <button
                        data-toggle="modal"
                        data-target="#popup_bid"
                        className="sc-button style-place-bid style bag fl-button pri-3"
                      >
                        <span>Place Bid</span>
                      </button>
                    </div> */}
                  </div>
                  <div className="card-title mb-3">
                    <h5>
                      <Link href="item-details.html">{item.title}</Link>
                    </h5>
                  </div>
                  <div className="meta-info">
                    <div className="d-flex align-items-center">
                      <span className="me-2">Current Bid</span>
                      <span className="pricing">{item.price}</span>
                    </div>
                    <div className="tags">{item.tags}</div>
                  </div>
                </div>
              ))}

              {visible < data.dataContent.length && (
                <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                  <Link
                    href="/#"
                    className="sc-button loadmore fl-button pri-3"
                    onClick={showMoreItems}
                  >
                    <span>Load More</span>
                  </Link>
                </div>
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default MarketPlaceContent;
