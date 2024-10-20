// Tabs Navigation

import { StyleSheet, Text, View } from 'react-native'
import React, { createContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Products from './screens/Products'
import Settings from './screens/Settings'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import TabsNavigator from './TabsNavigator'
import { UserProvider } from './context/UserContext'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: 'Welcome back' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Welcome to our channel' }}
          />
          <Stack.Screen
            name="HomeRoute"
            component={TabsNavigator}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  )
}

export default App

const styles = StyleSheet.create({})

// Drawer Navigation

// import { createDrawerNavigator } from '@react-navigation/drawer'
// import './gesture-handler'
// import { NavigationContainer } from '@react-navigation/native'
// import { StyleSheet, Text, View } from 'react-native'
// import Products from './screens/Products'
// import Settings from './screens/Settings'
// import Home from './screens/Home'
// const Drawer = createDrawerNavigator()
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={Home} />
//         <Drawer.Screen name="Products" component={Products} />

//         <Drawer.Screen name="Settings" component={Settings} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// })
