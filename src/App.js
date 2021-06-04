import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'

//routing code
//switch component
import { Switch, Route } from 'react-router-dom';

// the exact keyword here routes the app to the exact page component
// when you go this link here /hats it will show HatsPage only if theres an exact keyword

//once we havee the switch component, it allows us to follow a part to match the patterns
function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={ HomePage } />
     <Route path='/shop' component={ ShopPage } />
     </Switch>
    </div>
  )
}

export default App;
