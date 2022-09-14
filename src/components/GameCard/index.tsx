import { LinearGradient } from 'expo-linear-gradient'
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  Text
} from 'react-native'
import { THEME } from '../../theme'

import { styles } from './styles'

export interface GameCardsProps {
  id: string
  name: string
  ads: string
  cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
  data: GameCardsProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground
        style={styles.cover}
        source={data.cover}
      >
        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.name}
          </Text>
          <Text style={styles.ads}>
            {data.ads} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}