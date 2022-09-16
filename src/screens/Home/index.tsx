import { useEffect, useState } from 'react'
import { FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Heading } from '../../components/Heading'
import { Background } from '../../components/Background'
import { GameCard, GameCardsProps } from '../../components/GameCard'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'

export function Home() {
  const [games, setGames] = useState<GameCardsProps[]>([])
  const navigation = useNavigation()

  function handleOpenGame({ id, title, bannerUrl }: GameCardsProps) {
    navigation.navigate('game', {
      id,
      title,
      bannerUrl
    })
  }

  useEffect(() => {
    fetch('http://10.0.0.112:3333/games')
      .then(response => response.json())
      .then(data => setGames(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
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
            <GameCard
              data={item}
              onPress={() => handleOpenGame(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
        />
      </SafeAreaView>
    </Background>
  )
}