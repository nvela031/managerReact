import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, ButtonSection, Confirm} from './index';
import EmployeeForm from './EmployeeForm';
import {View} from 'react-native';
import {employeeUpdate, employeeSave, employeeDelete} from '../../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {showModal: false};

  componentDidMount() {
    _.each(this.props.employee, (value, props) => {
      this.props.employeeUpdate({props, value});
    });
  }

  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
  }

  onTextPress() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    this.props.employeeDelete({uid: this.props.employee.uid});
  }

  onDecline() {
    this.setState({showModal: false});
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

        <CardSection>
          <ButtonSection onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </ButtonSection>
        </CardSection>

        <CardSection>
          <ButtonSection
            onPress={() => this.setState({showModal: !this.state.showModal})}>
            Fire Employee
          </ButtonSection>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete,
})(EmployeeEdit);
