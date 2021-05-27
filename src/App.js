import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'

//routing code
//switch component
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

// the exact keyword here routes the app to the exact page component
// when you go this link here /hats it will show HatsPage only if theres an exact keyword

//once we havee the switch component, it allows us to follow a part to match the patterns
function App() {
  return (
    <div>
    <Switch>
     <Route exact path='/' component={ HomePage } />
     <Route path='/hats' component={ HatsPage } />
     </Switch>
    </div>
  )
}

export default App;
