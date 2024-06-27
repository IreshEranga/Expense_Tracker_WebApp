import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import List from './List.js';
import '../App.css';


function BasicExample() {
  return (
    <div>
      <Form className='transform' style={{border:'1px solid black'}}>
      <h1 className='font-bold pb-4 text-xl' style={{textAlign:'center'}}>Transaction</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control type="text" id="name" placeholder="Salary, House Rent, SIP" />
        
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Select >
          <option>Investment</option>
          <option>Expense</option>
          <option>Savings</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        
        <Form.Control type="text" id='amount' placeholder="Amount" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Save Transaction
      </Button>
    </Form>
    <List/>
    </div>

    
  );
}

export default BasicExample;