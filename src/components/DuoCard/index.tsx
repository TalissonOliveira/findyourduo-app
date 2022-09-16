import { Text, TouchableOpacity, View } from 'react-native'
import { GameController } from 'phosphor-react-native'
import { DuoInfo } from '../DuoInfo'
import { THEME } from '../../theme'

import { styles } from './styles'

export interface DuoCardProps {
  id: string
  name: string
  hourStart: string
  hourEnd: string
  yearsPlaying: number
  useVoiceChannel: boolean
  weekDays: string[]
}

interface Props {
  data: DuoCardProps
  onConnect: () => void
}

export function DuoCard({ data, onConnect }: Props) {
  const dayOrDays = data.weekDays.length > 1 ? 'dias' : 'dia'

  return (
    <View style={styles.container}>
      <DuoInfo
        label={'Nome'}
        value={data.name}
      />
      <DuoInfo
        label={'Tempo de jogo'}
        value={`${data.yearsPlaying} ano(s)`}
      />
      <DuoInfo
        label={'Disponibilidade'}
        value={`${data.weekDays.length} ${dayOrDays} \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label={'Chamada de áudio?'}
        value={data.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onConnect}
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />
        <Text style={styles.buttonTitle}>Conectar</Text>
      </TouchableOpacity>
    </View>
  )
}