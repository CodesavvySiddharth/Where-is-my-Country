import './css/style.css';
import Header from './components/header';
import { Outlet } from 'react-router-dom';

const App = () => {
  
  return (
    <>
     <Header/>
    <Outlet/>
           
          
  
     
    </>
  );
};

export default App;
   