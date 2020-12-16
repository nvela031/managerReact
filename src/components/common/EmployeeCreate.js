import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {Card, CardSection, Input, ButtonSection} from './index';
import {connect} from 'react-redux';
import {employeeUpdate} from '../../actions';

class EmployeeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="Alex"
            value={this.props.name}
            onChangeText={(text) =>
              this.props.employeeUpdate({props: 'name', value: text})
            }
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={(text) =>
              this.props.employeeUpdate({props: 'phone', value: text})
            }
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={(day) =>
              this.props.employeeUpdate({props: 'shift', value: day})
            }>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <ButtonSection>Create</ButtonSection>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 15,
    padding: 10,
  },
};

const mapStateToProps = (state) => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate);
