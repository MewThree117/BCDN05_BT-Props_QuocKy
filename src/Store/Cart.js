import React, { Component } from 'react'

export default class
    extends Component {

    render() {
        let { spDetail } = this.props;
        return (
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{spDetail.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body row">
                            <div className="col-5 modal__left">
                                <img src={spDetail.image} style={{ width: "100%" }} alt="" />
                            </div>
                            <div className="col-7 modal__right">
                                <p><span>Alias:</span> {spDetail.alias}</p>
                                <p><span>Price:</span> {spDetail.price}$</p>
                                <p><span>Description:</span> {spDetail.description}</p>
                                <p><span>Quantity:</span> {spDetail.quantity}</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
