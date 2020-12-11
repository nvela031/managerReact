import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
  render() {
    // console.log(this.props);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={({item}) => {
          return <ListItem libraries={item} />;
        }}
        keyExtractor={(library) => library.id.toString()}
      />
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);
