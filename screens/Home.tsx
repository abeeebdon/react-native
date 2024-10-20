import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '../context/UserContext'

const Home = ({ navigation }: any) => {
  const data = useUser()
  const name = data?.name
  console.log(name)
  return (
    <View>
      <Text>Welcome Home {name} </Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
