import { Image, StyleSheet, Platform, View, Text } from 'react-native'
import { Colors } from '../constants/Colors'

const ProductListItem = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  )
}
export default ProductListItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 50,
  },
  image: {
    width: '80%',
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
})
