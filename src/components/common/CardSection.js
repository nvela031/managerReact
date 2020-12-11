import React from 'react';
import {View} from 'react-native';

function CardSection(props) {
  return <View style={styles.containerStyles}>{props.children}</View>;
}

const styles = {
  containerStyles: {
    borderBottomWidth: 2,
    padding: 7,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
  },
};

export {CardSection};
