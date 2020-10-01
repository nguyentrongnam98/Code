import React, { Component } from 'react';

class ProductActionPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            name:'',
            price:'',
            status:''
        }
    }
    onChange = e =>{
        var name =e.target.name
        var prire = e.target.price
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]:value
        })
    }
    onSubmit = e =>{
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <form onSubmit = {this.onSubmit}>
                    <legend>Form title</legend>
                    <div className="form-group">
                        <label>Ten san pham :</label>
                        <input type="text" className="form-control" name = "name"
                                value = {this.state.name}
                                onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gia san pham :</label>
                        <input type="text" className="form-control" name = "gia"
                                 value={this.state.price}
                                 onChange={this.onChange} 
                        />
                    </div>
                    <div className="form-group">
                        <label>Trang thai san pham :</label>
                        <div className="checkbox">
                            <label>
                                <input type="checkbox" value="" name = "status"
                                       value={this.state.status}
                                       onChange={this.onChange}
                                />
                                Con hang
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            
        );
    }
}

export default ProductActionPage;
