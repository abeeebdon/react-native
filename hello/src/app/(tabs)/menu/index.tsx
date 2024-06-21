import products from '@/assets/data/products'
import ProductListItem from '@/src/components/ProductListItem'
import { FlatList, View } from 'react-native'

export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  )
}
