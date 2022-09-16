import { StyleSheet } from 'react-native'
import { THEME } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 32,
    marginTop: 28,
    justifyContent: 'space-between'
  },
  logo: {
    width: 72,
    height: 40
  },
  right: {
    width: 20,
    height: 20
  },
  containerCover: {
    width: '100%',
    paddingHorizontal: 32,
    marginTop: 32,
    alignItems: 'center'
  },
  cover: {
    width: '100%',
    height: 160,
    borderRadius: 8,
  },
  containerList: {
    width: '100%'
  },
  contentList: {
    paddingLeft: 32,
    paddingRight: 64,
    alignItems: 'flex-start'
  },
  emptyListContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyListText: {
    color: THEME.COLORS.CAPTION_300,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    fontSize: THEME.FONT_SIZE.SM,
    top: -35,
  }
})