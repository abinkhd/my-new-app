import MasterPerson from './components/MasterPerson';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Login from './routes/Login';
import NavBar from './routes/NavBar';
import Page1 from './routes/Page1';
import Page2 from './routes/Page2';
import Todos from './components/Todos';
import NewsNavBar from './routes/NewsNavBar';
import Business from './components/NewCards/Business';
import Entertainment from './components/NewCards/Entertainment';
import General from './components/NewCards/General';
import Health from './components/NewCards/Health';
import Reducer from './components/Reducer';
import './App.css'
import BookContainer from './components/BookContainer';
import { Provider } from 'react-redux';
import store from './components/Redux/BookStrore';
import Products from './components/Products';

function App() {


  return (
    <div className='App'>
    <Todos/>  
    {/* <Products/> */}
    </div>
    // <BrowserRouter>
    // {/* <NavBar/> 
    //  <Routes>
    //   <Route path='/login' element={<Login/>}/>
    //   <Route path='/home' element={<Home/>}>
    //     <Route index element={<Page1/>}/>
    //     <Route path='page2' element={<Page2/>}/>
    //   </Route>
    //   <Route path='/todos' element={<Todos/>}/>
    //   <Route path='/reducer' element={<Reducer/>}/>
      
    // </Routes> */}

  
        // {/* <NewsNavBar/>
        // <Routes>
        // <Route path='/' element={<Business/>}></Route>
        // <Route path='/entertainment' element={<Entertainment/>}></Route>
        // <Route path='/health' element={<Health/>}></Route>
        // <Route path='/general' element={<General/>}></Route>
        // <Route path='/store' element={<BookContainer/>}></Route>
        // </Routes> */}
    // </BrowserRouter>
    // <Provider store={store}>    
    //   <BookContainer/>
    // </Provider>

  );
}

export default App;
