import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useUser } from '../../context/UserContext'

const Login = ({ navigation }: any) => {
  const [username, setUsername] = useState<string>('')
  const user = useUser()

  const handleLogin = () => {
    if (user) {
      // Set the name in the context
      user.setName(username)
    }
    // Navigate to HomeRoute after login
    navigation.navigate('HomeRoute', { name: username })
  }

  if (user && user.name) {
    // If user is already logged in, show the Go Home button
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome, {user.name}!</Text>
        <Button
          title="Go Home"
          onPress={() => navigation.navigate('HomeRoute')}
        />
      </View>
    )
  } else {
    // If user is not logged in, show the login form
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Enter your username"
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#f3e',
  },
  input: {
    borderWidth: 1,
    height: 40,
    padding: 4,
    marginVertical: 10,
    width: '80%',
  },
})
