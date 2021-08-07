import React, { Component } from 'react'
import CustomerService  from './CustomerService';

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //id:1,
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Customer First Name: </label>
                            <div> { this.state.customer.firstname }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Last Name: </label>
                            <div> { this.state.customer.lastname }</div>
                        </div>
                        <div className = "row">
                            <label> Customer Email ID: </label>
                            <div> { this.state.customer.email }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent