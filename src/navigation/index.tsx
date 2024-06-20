import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import NavigationService from './NavigationService';
import HomeTabs from './HomeTabs';

const AppNavigator = () => {

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
        <HomeTabs/>
    </NavigationContainer>
  );
};

export default AppNavigator;
