import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Products from './screens/Products'
import Settings from './screens/Settings'
import { useUser } from './context/UserContext'

const Tabs = createBottomTabNavigator()
const TabsNavigator = () => {
  const name = useUser()
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#333',
      }}
    >
      <Tabs.Screen name="Home" component={Home} options={{}} />
      <Tabs.Screen name="Products" component={Products} options={{}} />
      <Tabs.Screen name="Settings" component={Settings} options={{}} />
    </Tabs.Navigator>
  )
}

export default TabsNavigator
