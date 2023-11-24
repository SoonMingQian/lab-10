import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Content from './components/content';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/create';
import Read from './components/read';
import Edit from './components/edit';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* nV Br from bootstrap */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="create">Create</Nav.Link>
              <Nav.Link href="read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* routes connect to other function */}
        <Routes>
          <Route path="create" element={<Create></Create>}></Route>
          <Route path="/" element={<Content></Content>}></Route>
          <Route path="read" element={<Read></Read>}></Route>
          <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
