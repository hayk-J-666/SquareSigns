
import './App.css';
import ScrollToTop from './scrollToTop/ScrollToTop';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Home from './pages/Home/Home'
import NoMatch from './pages/NoMatch/NoMatch';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (

    <BrowserRouter>
      <div className='page' id='page'>
          <Navbar/>
          <div  id='routerContent'>
              <ScrollToTop />
              <Switch>
                  <Route exact path='/' render={() => <Home/>}></Route>
                  <Route component={NoMatch}/>
              </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
