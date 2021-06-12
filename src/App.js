import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import Dashboard from './layouts/Dashboard';
import { Container, Sidebar } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
     <Navi/>
     <Container className="main">
     <Dashboard/>
     </Container>
   
    </div>
  );
}

export default App;
