import React from 'react';
import { connect } from 'react-redux';

function OrderDetails(props) {
    let selectedSingers = JSON.parse(localStorage.getItem("selectedSingers"));
    let SelectedSongs = JSON.parse(localStorage.getItem("SelectedSongs"));
    let selectedAlbums = JSON.parse(localStorage.getItem("selectedAlbums"));
    let personalInfo = JSON.parse(localStorage.getItem("personalInfo"));

    return (
        <>
            <button type="button" className="btn btn-primary w-25 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Show Order Details
            </button>


            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Order Details</h5>
                            <button onClick={props.handleReset} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-start">
                            <div className="border border-3 border-secondary p-3">
                                <h2>Personal information</h2>
                                <p>Name : {personalInfo.name}</p>
                                <p>Email : {personalInfo.emailAddress}</p>
                                <p>Phone Number : {personalInfo.phoneNumber}</p>
                            </div>
                            <hr />
                            <div className="border border-3 border-secondary p-3">
                                <h2>All Selected Singers</h2>
                                {selectedSingers.map(singer => (
                                    <p>{singer.title}</p>
                                ))}
                            </div>
                            <hr />
                            <div className="border border-3 border-secondary p-3">
                                <h2>All Selected Albums</h2>
                                {selectedAlbums.map(alboum => (
                                    <p>{alboum.title}</p>
                                ))}
                            </div>
                            <hr />
                            <div className="border border-3 border-secondary p-3">
                                <h2>All Selected Songs</h2>
                                {SelectedSongs.map(song => (
                                    <p>{song.title}</p>
                                ))}
                            </div>
                            <hr />
                            <div className="border border-3 border-secondary p-3">
                                <h2>Selected Songs Price and Count</h2>
                                <p>Number of Songs : {props.count}</p>
                                <p>Total Songs Price : {props.amount}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={props.handleReset} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
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
}, {})(OrderDetails)