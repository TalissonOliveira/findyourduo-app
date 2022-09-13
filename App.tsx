import { StatusBar } from 'react-native'
import { View } from 'react-native'

export default function App() {
  return (
    <View>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </View>
  )
}