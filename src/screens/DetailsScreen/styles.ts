import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../utils/helpers';

export default StyleSheet.create({
  row: {
    padding: 16,
  },
  detailText: {
    fontSize: scaleFontSize(20),
    fontWeight: 'bold',
  },
  subText: {
    fontSize: scaleFontSize(12),
  },
});
