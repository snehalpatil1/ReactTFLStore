
import React from 'react';


class UpdateCustomerComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            email:''
        };
    }

    onUpdate(){
            //Delegate request to Employee Service
            //to send PUT request to  Rest API Server
            

    }

    componentDidMount(){  }
    render(){
        return (
            <div>
                <h2>Update Existing Employee</h2>

            </div>
        )
    }
}

export default UpdateCustomerComponent;
