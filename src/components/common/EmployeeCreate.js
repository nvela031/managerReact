import React, {Component} from 'react';
import {Card, CardSection, ButtonSection} from './index';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../../actions';
import EmployeeForm from '../common/EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;

    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <ButtonSection onPress={this.onButtonPress.bind(this)}>
            Create
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

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(
  EmployeeCreate,
);
