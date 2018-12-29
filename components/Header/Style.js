import { color } from '../../static/color'
import { content } from '../../static/content'

export const style = {
  title: {
    text: content.title,
    style: {
      color: color.smoke,
      fontSize: 20,
      fontWeight: 'bold'
    }
  },
  barStyle: {
    barStyle: 'light-content'
  },
  header: {
    backgroundColor: color.main
  },
  container: {
    flex: 2,
    fontWeight: 'bold',
    marginLeft: -10,
    marginTop: 2000
  }
}
