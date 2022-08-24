import React from 'react';
import {Text, View} from 'native-base';
import styles from '../styleSheet';

export const PokemonAttack = ({attackName}) => {
  return (
    <View>
      <Text style={[styles.attackInfo, styles.white]}>* {attackName}</Text>
    </View>
  );
};
