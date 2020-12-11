import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
} from 'react-native';
import {CardSection} from './';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {libraries, expanded} = this.props;
    return expanded ? (
      <CardSection>
        <Text style={{flex: 1}}>{libraries.description}</Text>
      </CardSection>
    ) : null;
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.libraries;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.libraries.id;
  //   console.log('State.selectedLibraryId:', state.selectedLibraryId);
  //   console.log('ownProps:', ownProps.libraries.id);
  //   console.log('EXPANDED: ', expanded);
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);
