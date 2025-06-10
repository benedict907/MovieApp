import {Dimensions, StyleSheet} from 'react-native';
import {scaleFontSize} from '../utils/helpers';
const {width} = Dimensions.get('window');

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
  },
  title: {
    marginTop: 8,
    fontSize: scaleFontSize(12),
    width: width / 3.6,
    fontWeight: 'bold',
  },
});
