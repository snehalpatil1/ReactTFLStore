import {BrowserRouter as Router,Link, Switch, Route} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from '../Membership/Login';
import Register  from '../Membership/Register';
import List from '../ProductCatalog/List';
import Orders from '../OrderProcessing/Orders';
import Hello from './Hello';
import GoodBye from './Goodbye';
import Cart   from '../ShoppingCart/Cart';
import ListCustomerComponent from '../CRM/Customers';
import ListOrderComponent from '../OrderProcessing/Orders';
import RestList from '../ProductCatalog/ListRest';
import ViewEmployeeComponent from '../HR/Employee';
import CreateEmployeeComponent from '../HR/Insert';
import UpdateEmployeeComponent from '../HR/Update';
import ViewCustomerComponent from '../CRM/Customer'
import ViewOrderComponent from '../OrderProcessing/Order'

function Container(){
    return( <div>
                <h1>Transflower Store</h1>
                <hr/>
                  <Router>
                    <Link to="/">Home</Link>|<Link to="/about">About us</Link>| 
                    <Link to="/contact">Contact us</Link>|
                    <Link to="/hello">Hello</Link>|
                    <Link to="/flowers">Flowers</Link>|<Link to="/orders">Orders</Link>|
                    <Link to="/customers">Customers</Link>
                    |<Link to="/login">Login</Link> | 
                    <Link to="/register">Register</Link> |
                    <Link to="/cart">My ShoppingCart</Link> 
                    <hr/>
                    <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/contact" component={Contact}/>
                      <Route exact path="/flowers" component={RestList}/>
                      <Route exact path="/orders" component={ListOrderComponent}/>
                      <Route exact path="/view-order/:id" component={ViewOrderComponent}/>
                      <Route exact path="/customers" component={ListCustomerComponent}/>
                      <Route exact path="/view-customer/:id" component={ViewCustomerComponent}/>
                      <Route exact path="/register" component={Register}/>
                      <Route exact path="/cart" component={Cart}/>
                      <Route exact path="/hello" component={Hello}/>
                      <Route exact path="/goodbye" component={GoodBye}/>
                      <Route exact path="/login"  component={Login}/>
                     </Switch>
                  </Router>
            </div>);
  }
  export default Container;