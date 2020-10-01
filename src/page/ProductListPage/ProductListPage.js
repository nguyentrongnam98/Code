import React, { Component } from 'react';
import ProductList from '../../component/ProductList/ProductList';
import ProductItem from '../../component/ProductItem/ProductItem';
import {connect} from 'react-redux';
import callApi from '../../uilis/api';
import {Link} from 'react-router-dom';
class ProductListPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            products:[]
        }
    }
    componentDidMount(){
       callApi('products','get',null).then(res=>{
           console.log(res)
           this.setState({
               products:res.data
           })
       })
    }
    showProduct=(products)=>{
        var result = null;
        result =products.map((product,index)=>{
            return <ProductItem key = {index} product={product} index = {index}/>
        })
        return result;
    }
    render() {
        //const {products} = this.props;
        var {products} = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Link to = '/product/add' className="btn btn-info" style={{ marginBottom: 15 }}>Them san pham</Link>
              <ProductList>
                  {this.showProduct(products)}
              </ProductList>
            </div>
        );
    }
}
const mapStateToProps = state=>{
    return {
        products:state.products
    }
}
export default connect(mapStateToProps,null)(ProductListPage);
