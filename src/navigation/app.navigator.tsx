import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
// import { HomeNavigator } from './home.navigator';
import { AuthNavigator } from './auth.navigator';

/*
 * Navigation theming: https://reactnavigation.org/docs/en/next/themes.html
 */
const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // prevent layout blinking when performing navigation
    background: 'transparent',
  },
};

export const AppNavigator = (): React.ReactElement =>{ 
  return (
  <NavigationContainer theme={navigatorTheme}>
    {/* <HomeNavigator/> */}
    <AuthNavigator/>
  </NavigationContainer>
);}
