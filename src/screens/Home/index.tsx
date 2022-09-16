import { useEffect, useState } from 'react'
import { FlatList, Image, View } from 'react-native'
import { Heading } from '../../components/Heading'
import { GameCard, GameCardsProps } from '../../components/GameCard'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'

export function Home() {
  const [games, setGames] = useState<GameCardsProps[]>([])

  useEffect(() => {
    fetch('http://10.0.0.112:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

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
        data={games}
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