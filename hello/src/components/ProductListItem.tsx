import { Image, StyleSheet, Text, Pressable } from 'react-native'
import { Colors } from '../constants/Colors'
import { Product } from './types'
import { Link } from 'expo-router'
type productListItemProp = {
  product: Product
}
const ProductListItem = ({ product }: productListItemProp) => {
  const defaultImage = '../../../../assets/images/favicon.png'
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || defaultImage }}
          style={styles.image}
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </Pressable>
    </Link>
  )
}
export default ProductListItem

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    paddingTop: 50,
    flex: 1,
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
