import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#f42c1e'
      },
      headerTintColor: '#fff',
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="index" options={{ title: 'Pokedex' }} />
    </Stack>
  );
};

export default Layout;