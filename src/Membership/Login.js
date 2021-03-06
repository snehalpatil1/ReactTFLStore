
import React from 'react';

class  Login extends React.Component{

    constructor(props){  
        //define state for component
        super(props);
        this.state={
                    username:"ravi.tambade@transflower.in",
                    password:"seed"
        };
    }

    render(){
        return (
            <div>         
                    <div className="form-group">
                        <label htmlFor="email">Email address:</label>
                        <input type="email"  value={this.state.username}
                                             onChange={ (event)=>{
                                                                    this.setState({username: event.target.value})
                                                                 }
                                                        } 
                               className="form-control" 
                               id="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input type="password" value={this.state.password} 
                                               onChange={(event)=>{
                                                                        this.setState({password: event.target.value})
                                                                    }
                                                        }
                                className="form-control" id="pwd"/>
                    </div>

                    <div className="checkbox">
                        <label><input type="checkbox" /> Remember me</label>
                    </div>

                    <button 
                            className="btn btn-success"
                            onClick={()=>{
                                            if(this.state.username ==="ravi.tambade@transflower.in" 
                                                &&
                                                this.state.password==="seed")
                                            {
                                                console.log("Valid User");
                                                this.props.history.push('/flowers');
                                            
                                            }
                                            else{
                                                console.log("Invalid User");
                                            }
                                        }
                                    }
                            >Login</button>

                    <br/>

                    <button 
                            className="btn btn-success"
                            onClick={()=>{
                                                this.props.history.push('/register'); 
                                        }
                                    }
                            >New User</button>
            </div>
        );
    }
}
export default Login;