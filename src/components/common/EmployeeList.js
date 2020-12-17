import _ from 'lodash';
import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import {employeesFetch} from './../../actions';
import ListInfo from '../common/ListInfo';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    console.log('EMPLOYEES:', this.props.employees);
    return (
      <FlatList
        keyExtractor={(employee) => employee.uid}
        data={this.props.employees}
        renderItem={({item}) => {
          return <ListInfo employee={item} />;
        }}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
