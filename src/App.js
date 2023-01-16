import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import { Route } from 'react-router-dom';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={ChatPage}/>
      
    </div>
  );
}

export default App;
