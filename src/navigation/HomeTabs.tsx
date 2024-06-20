import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Images} from '../assets/ImageProperties';
import {TabModel} from '../models';
import {Labels} from '../utils/constant';
import CustomTab from '../components/CustomTab';
import HomeScreen from '../modules/afterLoginScreens/HomeScreen';
import { verticalScale } from '../utils/scaling';
import CustomHeader from '../components/CustomHeader';
import SurfingScreen from '../modules/afterLoginScreens/SurfingScreen';

const Tab = createBottomTabNavigator();

const tabList: TabModel[] = [
  {
    name: Labels.HOME,
    icon: Images.HomeTab,
    iconUnselected: Images.HomeTabUnselected,
    component: HomeScreen,
  },
  {
    name: Labels.SURFING,
    icon: Images.SurfTab,
    iconUnselected: Images.SurfTabUnselected,
    component: SurfingScreen,
  },
  {
    name: Labels.HULA,
    icon: Images.HulaTab,
    iconUnselected: Images.HulaTabUnselected,
    component: HomeScreen,
  },
  {
    name: Labels.VULCANO,
    icon: Images.VulcanoTab,
    iconUnselected: Images.VulcanoTabUnselected,
    component: HomeScreen,
  },
];
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header: () => (
          <CustomHeader/>
        ),
        tabBarShowLabel: false,
        tabBarStyle: { height: verticalScale(60) },
      }}>
      {tabList.map(tab => (
        <Tab.Screen
          key={tab?.name}
          name={tab?.name}
          component={tab?.component}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTab tab={tab} focused={focused} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabs;
