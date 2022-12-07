import './App.css';
import Bousbi from './Components/Bousbi';
// import { Profil, Test } from './Components/Profil';
import Profil from './Components/Profil';
import {Navbar,Container,Nav} from 'react-bootstrap'
import FormRiadh from './Components/FormRiadh';
function App() {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <FormRiadh/>

       <h1 className='gomycode'>Hello Bousbi3</h1>
       <h2 style={{color:'green',textDecoration :'underline'}}>Hello Mahmoud</h2>
       <Profil/>
       <Bousbi/>
       {/* <Profil/>
       <Test/> */}
    </>   
  );
}

export default App;
