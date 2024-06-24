import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { UserContext } from '../context/UserContext';
import Button from 'react-bootstrap/Button';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebaseConfig';
import toast from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const { user , setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const displayName = user?.displayName || 'Guest';

  const handleLogout = async () => {
    try{
      await signOut(auth);
      setUser(null);
      navigate('/login');

    }catch(error){
      console.log('Error in Loggin Out ', error);
      toast.error("Error in LogOut!!");

    }
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <b><i>{displayName}</i></b>
            <Button variant="outline-danger" className="ms-3" onClick={handleLogout}>Logout</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
