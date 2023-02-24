import React from 'react';
import { myRequestData } from '../Components/myRequestData';
import './myrequest.css';
function MyRequests() {
  return (
    <>
      <div className="container">
        <div className="main">
          {myRequestData.map(item => {
            return (
              <div className="row">
                <div className="left">
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
                <div className="right">
                  <h5>{item.reqNo}</h5>
                  <p className="status inProgress">
                    <span className="dot"></span> {item.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="side">
          <div className="sideRow">
            <div className="request">
              <p>Raise a Request</p>
            </div>
          </div>
          <div className="sideRow">
            <div className="help">
              <p>Help Topics</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyRequests;
