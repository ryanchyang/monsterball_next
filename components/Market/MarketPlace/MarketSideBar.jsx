import { useState } from 'react';
import { filterCate } from './testData';
import Accordion from 'react-bootstrap/Accordion';
import { BsCheckLg } from 'react-icons/bs';

const MarketSideBar = () => {
  return (
    <div className="market-side-bar-area">
      <div className="market-side-bar-container">
        <div className="market-side-bar-filter">
          <h3>Filter</h3>
        </div>
        <div className="wrap-category">
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            {filterCate.map((item, index) => (
              <Accordion.Item
                key={index}
                eventKey={index.toString()}
                className="side-bar-accordion"
              >
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body className="mt-3 px-2">
                  {item.content.map((itemm, index) => (
                    <div key={index} className="cate-name">
                      <label className="d-flex justify-content-between">
                        <span>{itemm.field}</span>
                        <span className="pst-re">
                          <input
                            type="checkbox"
                            defaultChecked={itemm.checked}
                            hidden
                          />
                          <span
                            className={`btn-checkbox ${
                              itemm.checked && 'clicked'
                            }`}
                          >
                            {itemm.checked && (
                              <BsCheckLg
                                style={{
                                  fontSize: '14px',
                                  marginBottom: '2px',
                                }}
                              />
                            )}
                          </span>
                        </span>
                      </label>
                      <br />
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default MarketSideBar;
