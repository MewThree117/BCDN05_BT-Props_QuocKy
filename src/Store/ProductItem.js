import React, { Component } from 'react'

export default class
    extends Component {

    render() {
        let { sp, showInfo } = this.props
        return (
            <div className='card'>
                <img src={sp.image} className="card-img-top p-3" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{sp.name}</h5>
                    <p className="card-text">{sp.price}</p>
                    <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => { showInfo(sp) }}>Add to cart</a>
                </div>
            </div>
        )
    }
}
