import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import Form from './pages/Form/Form';

const isLogin = () => localStorage.getItem('token') !== null;

const PrivateRoute = ({ component: Component, path }) => (
  <Route path={path} render={() => {
      console.debug(isLogin());
      return isLogin() ? <Component /> : <Redirect to="/" />;
    }}
  />
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
