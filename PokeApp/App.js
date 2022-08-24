import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
import {PokedexView, PokemonView} from './src/view';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="pokedexView">
          <Stack.Screen name="pokedexView" component={PokedexView} />
          <Stack.Screen name="pokemonView" component={PokemonView} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
