import React, {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection, Input, ButtonSection} from './index';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input label="Password" placeholder="password" secureTextEntry />
        </CardSection>

        <Text>{this.props.email}</Text>

        <CardSection>
          <ButtonSection>Login</ButtonSection>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.auth.email,
  };
};

export default connect(mapStateToProps, actions)(LoginForm);
