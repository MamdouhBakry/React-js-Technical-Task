import React from 'react';
import { connect } from 'react-redux';

function Count_Amount(props) {
  return (
    <>
      <div className="card text-white bg-primary mb-3 text-center" style={{ maxWidth: "15rem" }}>
        <div className="card-header">Count</div>
        <div className="card-body">
          <h5 className="card-title">Count Details</h5>
          <p className="card-text">{props.count ? props.count : 0} Songs</p>
        </div>
      </div>
      <div className="card text-white bg-primary mb-3 text-center" style={{ maxWidth: "15rem" }}>
        <div className="card-header">Amount</div>
        <div className="card-body">
          <h5 className="card-title">Amount Details</h5>
          <p className="card-text">{props.amount ? props.amount : 0} Egp</p>
        </div>
      </div>
    </>
  )
}
export default connect((state) => {
  return {
    count: state.singerList.count,
    amount: state.singerList.amount,
  }
}, {})(Count_Amount)