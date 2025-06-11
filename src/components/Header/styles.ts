import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../utils/helpers';

export default StyleSheet.create({
  header: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    elevation: 4,
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  backButton: {
    fontSize: scaleFontSize(28),
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  headerTitle: {
    width: '90%',
    paddingStart: 10,
    fontSize: scaleFontSize(18),
    fontWeight: 'bold',
    color: 'black',
  },
});
