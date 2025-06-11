import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    fontSize: 12,
    width: width / 3.6,
    fontWeight: 'bold',
  },
});
