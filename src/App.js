import logo from './logo.svg';
import './App.css';
import Container from './Layout/Container';
import Dashboard from './Dashboard';
import CounterExample from './Count';
import RestList from './ProductCatalog/ListRest';
import ListEmployeeComponent from './HR/Employees';
import ListCustomerComponent from './CRM/Customers';
import ListOrderComponent from './OrderProcessing/Orders';


//<Dashboard></Dashboard>
//<CounterExample></CounterExample>
//<Container></Container>
 //<RestList></RestList>
 //<ListEmployeeComponent></ListEmployeeComponent>
 //<ListCustomerComponent></ListCustomerComponent>
//<ListOrderComponent></ListOrderComponent>
function App() {
  return (
        <div className="App">
          <Container></Container>
       </div>
  );
}
export default App;