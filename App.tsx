import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Telas/Home';
import ListarClientes from './Telas/ListarClientes';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    ListarClientes: ListarClientes
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}