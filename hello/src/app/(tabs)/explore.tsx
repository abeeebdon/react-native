import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Image, Platform, View, Text } from 'react-native'

import { Collapsible } from '@/src/components/Collapsible'
import { ExternalLink } from '@/src/components/ExternalLink'
import ParallaxScrollView from '@/src/components/ParallaxScrollView'
import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Important</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
})
