
import React from 'react';


class CreateCustomerComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:''
        };
    }

    componentDidMount(){  }
    render(){
        return (
            <div>
                <h2>Insert new Customer</h2>

            </div>
        )
    }
}

export default CreateCustomerComponent;
