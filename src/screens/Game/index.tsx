import { useEffect, useState } from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { GameParams } from '../../@types/navigation'
import { Heading } from '../../components/Heading'
import { Background } from '../../components/Background'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'
import { THEME } from '../../theme'

import logoImg from '../../assets/logo-nlw-esports.png'

import { styles } from './styles'

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  const navigation = useNavigation()
  const route = useRoute()

  const { id, title, bannerUrl } = route.params as GameParams

  function handleGoBack() {
    navigation.goBack()
  }

  useEffect(() => {
    fetch(`http://10.0.0.112:3333/games/${id}/ads`)
      .then(response => response.json())
      .then(data => setDuos(data))
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image
            style={styles.logo}
            source={logoImg}
            resizeMode="cover"
          />
          <View style={styles.right} />
        </View>

        <View style={styles.containerCover}>
          <Image
            style={styles.cover}
            source={{ uri: bannerUrl }}
            resizeMode={'cover'}
          />
        </View>
        <Heading
          title={title}
          subtitle={'Conecte-se e comece a jogar!'}
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <DuoCard
              data={item}
              onConnect={() => {}}
            />
          }
          style={styles.containerList}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          ]}
          showsHorizontalScrollIndicator={false}
          horizontal
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />
      </SafeAreaView>
    </Background>
  )
}