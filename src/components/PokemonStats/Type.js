import { StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {map, capitalize, get} from 'lodash';
import getColor from '../../utils/getColorType';

export default function Type({type}) {

  return (
    <View style={styles.content}>
      {map(type, (item, index) => (
        <View key={index} style={{...styles.pill, backgroundColor: getColor(item.type.name)}}>
          <Text >
          {capitalize(item.type.name)}
          </Text>
          </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  content:{
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pill: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10

  }
})