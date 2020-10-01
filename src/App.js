import React, { Component } from 'react';
import routes from './route';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import Menu from './component/Menu/Menu';
class App extends Component {
   showContentMenus = (routes)=>{
      return (
        <Switch>
          {routes.map((route,index)=>{
            return <Route key = {index} 
            path = {route.path} 
            exact = {route.exact}
            component={route.main}
            />
          })}
        </Switch>
      )
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Menu/>
        <div className="container">
          <div className="row">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}
export default App;