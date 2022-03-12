import React, { Component } from 'react'
import Product from './ProductItem';

export default class
    extends Component {

    renderListProduct = () => {
        let { arrShoe, showInfo } = this.props;
        return arrShoe.map((sp) => {
            return <div className="col-4 mb-3" key={`sp-${sp.id}`}>
                <Product sp={sp} showInfo={showInfo} />
            </div>
        })
    }

    render() {
        return (
            <div className="store__list row">
                {this.renderListProduct()}
            </div>
        )
    }
}
