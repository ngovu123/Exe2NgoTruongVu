import React from 'react';
import { Appbar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

const CustomNavigationBar = ({ navigation, previous }) => {
  const route = useRoute();

  let title = 'Test App';
  if (route.name === 'Details') {
    title = 'Details';
  }

  return (
    <Appbar.Header>
      {previous ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomNavigationBar;
