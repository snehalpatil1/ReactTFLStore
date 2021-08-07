
import React, { Component } from 'react';
import OrderService  from './OrderService';

class ListOrderComponent extends Component{

    constructor(props) {
        console.log("Order constructor");
        super(props)

        this.state = {
                orders: []
        }

        this.addOrder = this.addOrder.bind(this);
        this.editOrder = this.editOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    deleteOrder(id){
        OrderService.deleteOrder(id).then( res => {
        this.setState({orders: this.state.orders.filter(order => order.id !== id)});
        });
    }
    viewOrder(id){
        console.log("order id=" +id);
        this.props.history.push(`view-order/${id}`);
    }
    editOrder(id){
        console.log("order id=" +id);
    }

    componentDidMount(){
        OrderService.getOrders().then((res) => {
            this.setState({ orders: res.data});
        });
    }

    addOrder(){
        console.log("Add new order");
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Order List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addOrder}> Add Order</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Order Date</th>
                                    <th>Customer Id</th>
                                    <th> Order Amount</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.orders.map(
                                        order => 
                                        <tr key = {order.oid}>
                                             <td> {order.odate} </td>   
                                             <td> {order.cid}</td>
                                             <td> {order.amount}</td>
                                             <td>
                                                 <button onClick={ () => this.editOrder(order.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteOrder(order.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewOrder(order.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListOrderComponent;