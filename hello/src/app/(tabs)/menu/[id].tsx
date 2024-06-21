import { Stack, useLocalSearchParams } from 'expo-router'
import { Text, View, StyleSheet } from 'react-native'

export default function Product() {
  const { id } = useLocalSearchParams()
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'Details' }} />

      <Text>product </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 50,
    flex: 1,
  },
})
