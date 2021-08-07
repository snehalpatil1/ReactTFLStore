import React, { Component } from 'react'
import OrderService  from './OrderService';

class ViewOrderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id:1,
            id: this.props.match.params.id,
            order: {}
        }
    }

    componentDidMount(){
        OrderService.getOrderById(this.state.id).then( res => {
            this.setState({order: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Order Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Order Date: </label>
                            <div> { this.state.order.odate }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Id: </label>
                            <div> { this.state.order.cid }</div>
                        </div>
                        <div className = "row">
                            <label> Order Amount: </label>
                            <div> { this.state.order.amount }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewOrderComponent;