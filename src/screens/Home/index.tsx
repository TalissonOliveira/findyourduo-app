import { FlatList, Image, View } from 'react-native'
import { GAMES } from '../../utils/games'
import { Heading } from '../../components/Heading'
import { GameCard } from '../../components/GameCard'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        horizontal
      />
    </View>
  )
}