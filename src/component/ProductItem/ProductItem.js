import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        var { product, index } = this.props
        var status = product.status ? 'Con hang' : 'Het hang';
        var classStatus = product.status ? 'warning' : 'default';

        return (
            <tr>
                <td>{index+1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${classStatus}`}>{status}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-success" style={{ marginRight: 10 }}>Sua</button>
                    <button type="button" className="btn btn-danger">Xoa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
