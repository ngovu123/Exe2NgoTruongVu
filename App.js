import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';

const Stack = createStackNavigator();

function CustomNavigationBar({ navigation, route, options, back }) {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {!back ? (
        <Appbar.Action
          
          onPress={openMenu}
        />
      ) : null}
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
      >
        <Menu.Item
          onPress={() => {
            console.log('Option 1 was pressed');
            closeMenu();
          }}
          title="Option 1"
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 2 was pressed');
            closeMenu();
          }}
          title="Option 2"
        />
        <Menu.Item
          onPress={() => {
            console.log('Option 3 was pressed');
            closeMenu();
          }}
          title="Option 3"
          disabled
        />
      </Menu>
    </Appbar.Header>
  );
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
