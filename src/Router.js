import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/common/LoginForm';
import EmployeeList from './components/common/EmployeeList';
import EmployeeCreate from './components/common/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 5}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Emplyee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
