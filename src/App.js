import {useState} from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './style.css';

function App() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <div className="App">
      <Navbar handleClick={handleClickOpen} handleClose={handleClose}/>
      <Home open={open} handleClick={handleClickOpen} handleClose={handleClose}/>
    </div>
  );
}

export default App;
