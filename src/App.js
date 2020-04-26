/* eslint-disable import/first */
import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component';
import './App.css';
require('dotenv').config();

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AuthPage from './pages/auth/auth.component';
import { auth, createUserProfileDocument } from './utils/firebase';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;