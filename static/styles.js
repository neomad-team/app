import { StyleSheet } from 'react-native'

import { color } from './color'

export default StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: color.smoke
  },
  body: {
    flex: 1,
    marginTop: 40
  },
  centerText: {
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10
  }
})
