import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../themes';
import { Posts, Albuns, Todos } from "../pages";

const TabStack = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: theme.primary,
        style: {
          height: 65,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: theme.background,
        }
      }}>
      <TabStack.Screen
        name="Postagens"
        component={Posts}
        options={{
          tabBarLabel: "Postagens",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              size={size}
              name={'note-plus'}
              color={focused ? theme.primary : color}
            />
          )
        }} />
      <TabStack.Screen
        name="Albums"
        component={Albuns}
        options={{
          tabBarLabel: "Albums",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              size={size}
              name={'image-multiple'}
              color={focused ? theme.primary : color}
            />
          )
        }} />
      <TabStack.Screen
        name="To-dos"
        component={Todos}
        options={{
          tabBarLabel: "To-dos",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons
              size={size}
              name={'format-list-checks'}
              color={focused ? theme.primary : color}
            />
          )
        }} />
    </TabStack.Navigator>
  )
}

export default TabRoutes
