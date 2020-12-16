import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './redurcers';
import LoginForm from './components/common/LoginForm';

class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: 'AIzaSyCcUena6HdDGWbZ34Spr7SMgTZIP8DghEI',
      authDomain: 'manager-224a3.firebaseapp.com',
      projectId: 'manager-224a3',
      storageBucket: 'manager-224a3.appspot.com',
      messagingSenderId: '719851502440',
      appId: '1:719851502440:web:1b2e2cf2e865240f1474dd',
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const middleware = [ReduxThunk];
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(
      reducers,
      {},
      composeEnhancers(applyMiddleware(...middleware)),
    );
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
