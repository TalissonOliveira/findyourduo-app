import { StatusBar } from 'react-native'
import { Background } from './src/components/Background'

export default function App() {
  return (
    <Background>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
    </Background>
  )
}