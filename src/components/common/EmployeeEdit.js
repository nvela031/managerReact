import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, ButtonSection} from './index';
import EmployeeForm from './EmployeeForm';
import {View} from 'react-native';
import {employeeUpdate, employeeSave} from '../../actions';
import _ from 'lodash';

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.employee, (value, props) => {
      this.props.employeeUpdate({props, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  render() {
    return (
      <Card>
        <View>
          <EmployeeForm />
        </View>
        <CardSection>
          <ButtonSection onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </ButtonSection>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate, employeeSave})(
  EmployeeEdit,
);
