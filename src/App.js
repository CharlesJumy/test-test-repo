import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import HistoryComponent from './Components/HistoryComponent';
import ImageGallery from './Components/ImageGallery';

function App() {
  return (
    
        <Router>
          <Switch>
            <Route exact  path={"/"} component={HomeScreen} />
            <Route path={"/header"} component={HeaderComponent}/>
            <Route path={"/footer"} component={FooterComponent} />
            <Route path={"/history"} component={HistoryComponent} />
            <Route path={"/gallery"} component={ImageGallery} />
            }
          </Switch>
        </Router>
  );
}

export default App;
