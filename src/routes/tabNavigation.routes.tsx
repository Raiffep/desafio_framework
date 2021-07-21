import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../themes';
import PostScreen from "../pages/posts";
import AlbumsScreen from '../pages/albums';
import TodosScreen from '../pages/todos';


const TabStack = createBottomTabNavigator();

const TabRoutes = () => {
  return(
    <TabStack.Navigator
      tabBarOptions={{
        style: {
          height: 65,
          paddingTop: 5,
          paddingBottom: 10,
          backgroundColor: theme.background,
        }
      }}>
      <TabStack.Screen
        name="Postagens"
        component={PostScreen}
        options={{
          tabBarLabel: "Postagens",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name={'note-plus'} size={size} color={focused ? theme.primary : color } />
          )
        }} />
        <TabStack.Screen
        name="Albums"
        component={AlbumsScreen}
        options={{
          tabBarLabel: "Albums",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name={'image-album'} size={size} color={focused ? theme.primary : color} />
          )
        }} />
        <TabStack.Screen
        name="To-dos"
        component={TodosScreen}
        options={{
          tabBarLabel: "To-dos",
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name={'format-list-checks'} size={size} color={focused ? theme.primary : color} />
          )
        }} />
    </TabStack.Navigator>
  )
}

export default TabRoutes
