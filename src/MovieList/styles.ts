import {Dimensions, StyleSheet} from 'react-native';
import {scaleFontSize} from '../utils/helpers';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  list: {
    paddingBottom: 46,
  },
  itemContainer: {
    margin: 8,
    alignItems: 'center',
  },
  image: {
    borderRadius: 8,
    width: width / 3.6,
    height: height / 5,
  },
  title: {
    marginTop: 8,
    fontSize: scaleFontSize(12),
    width: width / 3.6,
    fontWeight: 'bold',
  },
  genreSection: {
    marginBottom: 20,
  },
  genreTitle: {
    fontSize: scaleFontSize(16),
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
  genreList: {
    paddingHorizontal: 10,
  },
});
