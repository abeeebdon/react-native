import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Register = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Abeebdon</Text>
      <TextInput>Enter your username</TextInput>
      <Button title="Signup" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Register

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
})
